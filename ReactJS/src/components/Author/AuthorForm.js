import React, { useState , useEffect } from 'react';
import {Button,Form,} from 'semantic-ui-react'
import {Link}  from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Author.css'
 const AuthorForm  = (props)=>{
    const [modelAuthor, setModalAuthor] = useState({
        email:'',
        address:'',
        fullName:'',
        birtDay:'',
        age:''
    
    });  

    useEffect(() => {
        setModalAuthor(props.Author);
    }, [props.Author]);

    const [errors, setErrors] = useState({});
    const inputGroupChangeHandler = (event) => {
    debugger;
    setModalAuthor((prevState) => (
        {
        ...prevState,
        [event.target.id]: event.target.value
        }));
    }
    const inputGroupChangeDate = (value,e) => {
        debugger;
        setModalAuthor((prevState) => (
            {
            ...prevState,
            birtDay: value.toLocaleDateString()
            }));
        }
    
    const validate = () => {
        debugger;
        let isValid = true;
        let name = null;
        
        if (!modelAuthor?.address) {
          isValid = false;
          setErrorValue ("address" , "Будь ласка ведіть адресу");
        }
        if (!modelAuthor?.age) {
            isValid = false;
            setErrorValue ("age" , "Будь ласка ведіть вік");
        }         
        if (!modelAuthor?.birtDay) {
            isValid = false;
            setErrorValue ("birtDay" , "Будь ласка ведіть дату народження");
        } 
        if (!modelAuthor?.fullName) {
            isValid = false;
            setErrorValue ("fullName" , "Будь ласка ведіть повне ім'я");
        } 
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(!pattern.test(String(modelAuthor?.email).toLowerCase()))
        {
            isValid = false;
            setErrorValue ("email" , "Будь ласка ведіть коректну пошту");
        }
        return isValid;
    }
    const setErrorValue = (nameInput,value) =>
    {
        setErrors((preState)=>({
            ...preState,
            [nameInput]:value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(validate())
        {
            props.SubmitAuthorForm(modelAuthor)
        }
        
    }
 
return (

    <Form  className='cr-up-form' onSubmit={event => {
        console.log('submit');
        event.preventDefault();
        }}>

        <Form.Group  widths={2} className='form-cr-up-post'>
        <Form.Input label="Прізвище та ім'я"  type="text" id='fullName' width={8}
                name="fullName"value={!modelAuthor ? '' : modelAuthor.fullName}
                onChange={event => inputGroupChangeHandler( event)}/>
                <span className="text-danger">{errors.fullName}</span>
        <Form.Input label='Адреса'  type="text" id='address' width={8}
                name="address"value={!modelAuthor ? '' : modelAuthor.address}
                onChange={event => inputGroupChangeHandler( event)}/>
                <span className="text-danger">{errors.address}</span>
        </Form.Group>
        <Form.Group  widths={2} className='form-cr-up-post'>
            <Form.Input label="Пошта"  type="text" id='email' width={8}
                name="email"value={!modelAuthor ? '' : modelAuthor.email}
                onChange={event => inputGroupChangeHandler( event)}/>
            <span className="text-danger">{errors.email}</span>
        </Form.Group>
        <Form.Group>
        <div className='eight wide field'>
        <label for='birtDay' >Дата народження</label>
        <DatePicker id='birtDay' name="birtDay" dateFormat='YYYY-MM-DD HH:MM:SS'
                value={!modelAuthor ? '' : modelAuthor.birtDay} width={8} 
                onChange={(value,event) => inputGroupChangeDate( value,event)} />
                <span className="text-danger">{errors.birtDay}</span>
                </div>
        <Form.Input label="Вік"  type="number" id='age' width={4}
                name="age"value={!modelAuthor ? '' : modelAuthor.age}
                onChange={event => inputGroupChangeHandler( event)}/>
                <span className="text-danger">{errors.age}</span>
        </Form.Group>
        <div className = 'cr-up-submit-button'>
            <Button as={Link} to="/authors" type='submit' onClick={(e)=>{onSubmit(e) }} variant="primary"   >
            Зберегти
            </Button>
        </div>
        
    </Form>

    );
};
export default AuthorForm;

