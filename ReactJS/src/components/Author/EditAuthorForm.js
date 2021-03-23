import React,{useState} from 'react'
import AuthorForm from './AuthorForm'
import {useDispatch } from 'react-redux';
import {UpdateAuthor} from '../../services/author_services'
import { Modal } from 'react-bootstrap';
import {Button,Icon} from 'semantic-ui-react'

function EditAuthorForm(props) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const SubmitAuthorForm = (model) =>{
        dispatch(UpdateAuthor(model));
        handleClose();
    }
    return (
        <div>
        <Button icon  onClick={ handleShow}><Icon name='edit' /></Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Body Image >
            <AuthorForm SubmitAuthorForm={SubmitAuthorForm} Author = {props.Author}/>
        </Modal.Body>
        </Modal>
        </div>
    )
}

export default EditAuthorForm