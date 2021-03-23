import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon, Label, Menu, Table,Button } from 'semantic-ui-react';
import  'moment/locale/ru';
import './Author.css'
import {Link}  from "react-router-dom";
import CreateAuthorForm from './CreateAuthorForm';
import {setPage,ChangeSort} from '../../redux/Author/authorActions';
import {fetchAllAuthors,RemoveAuthor} from '../../services/author_services'
import EditAuthorForm from './EditAuthorForm';
import { Pagination } from 'semantic-ui-react';
import Moment from 'react-moment';


function Authors() {
    const dispatch = useDispatch();
    const page = useSelector(state => state.author.page);
    useEffect(() => {
        dispatch(fetchAllAuthors(page,ascending));
    }, []);
    const authors = useSelector(state => state.author.authors);
    let ascending = useSelector(state => state.author.ascending);
    const loading = useSelector(state => state.author.loading);
    const removeAuthor = (authorId) =>{
        dispatch(RemoveAuthor(authorId));
    }
    const onchangeSort = (asc) =>{
        ascending = asc;
        dispatch(fetchAllAuthors(page,ascending));
        dispatch(ChangeSort(asc));
    }
    const onchangePage =(e, {activePage})=>{
        dispatch(fetchAllAuthors(activePage,ascending));
        dispatch(setPage(activePage));
  }
  if(loading === false)
      return<div>loading...</div>
  return (
    <div className="authors">
        <div>

        </div>
    <div className="add-author">
        <CreateAuthorForm/>
    </div>
    <Table celled>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Прізвище та ім`я{ascending?(
                            <Button icon   className='icon-sort' onClick={()=>onchangeSort(false)}>
                                <Icon name='sort alphabet down' />
                            </Button>):(
                            <Button icon sort alphabet down className='icon-sort' onClick={()=>onchangeSort(true)}>
                                <Icon name='sort alphabet up' />
                            </Button>)}</Table.HeaderCell>
            <Table.HeaderCell>Пошта</Table.HeaderCell>
            <Table.HeaderCell>Адреса</Table.HeaderCell>
            <Table.HeaderCell>Дата народження</Table.HeaderCell>
            <Table.HeaderCell>Вік</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
        </Table.Header>

        <Table.Body>
            {
                authors.map((author)=>{
                    return(
                    <Table.Row key={author.authorId}>
                        <Table.Cell>{author.fullName}</Table.Cell>
                        <Table.Cell>{author.email}</Table.Cell>
                        <Table.Cell>{author.address}</Table.Cell>
                        <Table.Cell>{<Moment format="YYYY/MM/DD">{author.birtDay}</Moment>}</Table.Cell>
                        <Table.Cell>{author.age}</Table.Cell>
                        <Table.Cell>  
                            <EditAuthorForm Author={author} />
                            <Button icon as={Link} to={"/authors"} onClick={()=>{removeAuthor(author.authorId)}}>
                                <Icon name='delete' />
                            </Button>
                        </Table.Cell>
                    </Table.Row>)})
            }
        </Table.Body>

        <Table.Footer>
        <Table.Row>
            <Table.HeaderCell colSpan='3'>
                <Pagination  floated='right'  defaultActivePage={1}  totalPages={10}  onPageChange = {onchangePage}/>
            </Table.HeaderCell>
        </Table.Row>
        </Table.Footer>
    </Table>

    </div>
  );
}
  export default Authors;

