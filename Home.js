import React,{Fragment} from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Tasks from './Tasks';
import {Link,useNavigate} from 'react-router-dom';

function Home(){
    let history = useNavigate();

    const handleEdit =(id,name,date)=>{
localStorage.setItem('Name',name);
localStorage.setItem('Date',date);
localStorage.setItem('Id',id);
    }

   const handleDelete = (id) =>{
    var index = Tasks.map(function(e){
return e.id
    }).indexOf(id);
    Tasks.splice(index,1);

    history('/');
   }

    return(
        <>
        
        <div style={{margin:"10rem"}}>
        <h1 style={{ margin:"5rem" ,color:'orange'}}>Task Management Application</h1>
            <Table striped border hover size="sm">
                
                <thead>
                    <tr>
                        <th>
                            Task
                        </th>
                        <th>
                            Due-Date
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Tasks && Tasks.length > 0 
                        ? 
                        Tasks.map((item)=>{
                            return(
                                <tr>
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.Date}
                                    </td>
<td>
    <Link to={'/edit'}>
    <Button onClick ={()=> handleEdit(item.id,item.Name,item.Date)}>EDIT</Button>
     </Link>
    <Button onClick ={()=> handleDelete(item.id)}>DELETE</Button>
</td>
                                </tr>
                            ) 
                        })
                            :
                            "No data availlable"
                    }
            
                </tbody>
                <br>
                </br>
                <Link className='d-grid gap-2' to="/create">
                <Button size="lg">Add New Task</Button>
                </Link>
            </Table>

        </div>
        </>
    )

} 

export default Home;