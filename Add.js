import React, {useState} from 'react';
import {Button,Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Tasks from './Tasks';
import{v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom';

function Add(){
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    let history = useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a= name,
        b= date;
        Tasks.push({id:uniqueId,Name : a,Date : b});
        console.log(Tasks);
        history("/");
    }
    return <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder='Enter name and Task' required onChange={(e)=> setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder='Enter Due-Date' required onChange={(e)=> setDate(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
            </Form>
        </div>;
}
export default Add;