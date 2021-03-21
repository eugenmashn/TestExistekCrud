import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Icon, Label, Menu, Table,Button } from 'semantic-ui-react';
import  'moment/locale/ru';
import './Author.css'
import CreateAuthorForm from './CreateAuthorForm';
//import {set_Page} from '../../redux/Post/actionsAuthors';
import {fetchAllAuthors} from '../../services/author_services'
import EditAuthorForm from './EditAuthorForm';

function Authors() {
    const dispatch = useDispatch();
    const page = useSelector(state => state.author.page);
    useEffect(() => {
        dispatch(fetchAllAuthors(page));
    }, []);
    debugger;
    const authors = useSelector(state => state.author.authors);
    const loading = useSelector(state => state.author.loading);
    const onchangePage =(e, {activePage})=>{
  //  dispatch(set_Page(activePage));
  }
  if(loading === false)
      return<div>loading...</div>
  debugger;
  return (
    <div className="authors">
    <div className="add-author">
        <CreateAuthorForm/>
    </div>
    <Table celled>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Прізвище та ім`я</Table.HeaderCell>
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
                        <Table.Cell>{author.birtDay}</Table.Cell>
                        <Table.Cell>{author.age}</Table.Cell>
                        <Table.Cell>  
                            <EditAuthorForm Author={author} />
                            <Button icon>
                                <Icon name='delete' />
                            </Button>
                        </Table.Cell>
                    </Table.Row>)})
                
            }
        
        </Table.Body>

        <Table.Footer>
        <Table.Row>
            <Table.HeaderCell colSpan='3'>
            <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                <Icon name='chevron right' />
                </Menu.Item>
            </Menu>
            </Table.HeaderCell>
        </Table.Row>
        </Table.Footer>
    </Table>

    </div>
  );
}
  
  export default Authors;

