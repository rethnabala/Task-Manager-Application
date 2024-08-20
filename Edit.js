import React, {useState, useEffect} from 'react';
import {Button,Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Tasks from './Tasks';
import{v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom';

function Edit(){
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    var index = Tasks.map(function(e){
        return e.id
            }).indexOf(id);

            const handleSubmit =(e)=>{
                e.preventDefault();

                let a = Tasks[index];
                a.Name = name;
                a.Date = date;
               
                history("/");
            }
            useEffect(()=>{
setName(localStorage.getItem('Name'))
setDate(localStorage.getItem('Date'))
setId(localStorage.getItem('Id'))
            },[])

            return(
                <div>
                     <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder='Enter name'value={name} required onChange={(e)=> setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder='Enter age'value={date} required onChange={(e)=> setDate(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>
                </div>
            )
}
export default Edit;