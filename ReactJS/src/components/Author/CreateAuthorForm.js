import React,{useState} from 'react'
import AuthorForm from './AuthorForm'
import {useDispatch,useSelector } from 'react-redux';
import {CreateAuthor} from '../../services/author_services'
import { Modal } from 'react-bootstrap';
import {Button} from 'semantic-ui-react'
import {fetchAllAuthors} from '../../services/author_services'

function CreateAuthorForm() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const page = useSelector(state => state.author.page);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const SubmitAuthorForm = (model) =>{
        dispatch(CreateAuthor(model));
        handleClose();
    }
    return (
        <div>
        <Button onClick={()=> handleShow()}>Добавити автора</Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Body Image >
            <AuthorForm SubmitAuthorForm={SubmitAuthorForm} />
        </Modal.Body>
        </Modal>
        </div>
    )
}

export default CreateAuthorForm