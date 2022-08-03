import React, { FunctionComponent, useEffect, useState } from "react";
import { task_create_body } from "../interfaces/task.input";
import { Task_data } from "../interfaces/task_data";
import { Task_update_body } from "../interfaces/Task_up";
import Add_task from "./add_task_component";
import Update_task from "./update_task_component";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import './main_page_tasks.css';


const Main: FunctionComponent = () => {
    const [data, setData]=useState<Task_data[]>([])
    const[nbrTask,setNbre]=useState(0)
    const [etatTask, setEtat] = useState(false)
    const [task_update,setTaskUp]=useState<Task_data>({
        _id:"",
        _task:"",
        _done:false,
        createdAt: new Date() ,
        updatedAt : new Date()  
    })
    useEffect(()=>{
        fetch('http://localhost:3001/to-do')
        .then((response) =>{
        if (!response.ok) {
        throw new Error(" error" + response.status);
        }
        return response.json();
        })
        .then((myJson) =>{
       setData(myJson)
        })
        .catch((error) =>{
            console.log(error)
        });
        
},[etatTask,nbrTask])
function _add(t : task_create_body){
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(t)
};
fetch('http://localhost:3001/to-do',requestOptions)
.then((response) =>{
    if (!response.ok) {
    throw new Error(" error" + response.status);
    }
    return response.json();
    })
    .then((myJson) =>{
        setData([...data,myJson])
        setNbre(nbrTask + 1)
    })
    .catch((error) =>{
        console.log(error)
    });
    
}


function _delete(e: { preventDefault: () => void; } ,  t:Task_data){
    e.preventDefault()
    console.log(t._id)
fetch(`http://localhost:3001/to-do/${t._id}`, { method: 'DELETE' })
.then(() => {
    setData(data.filter((aux)=>aux._id!==t._id))
    setNbre(nbrTask - 1)
    console.log('Delete successful')});
}   
function _update(t : Task_data){
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(t)
    };
    fetch(`http://localhost:3001/to-do/${t._id}`, requestOptions)
        .then(response => response.json())
        .then(async(d) => {
        console.log(d)
     setEtat(false)
        })
}


    function affich() {
    const _tas= data.map((t : Task_data )=>
      //  <tr key={`key${t.id}`}>
        <tr>
            <td>{t._task}</td>
            <td> 
            <TiEdit  onClick={(e)=>{ e.preventDefault();
                    setEtat(true);
                    setTaskUp(t);
                    }}  className='edit-icon'/>  
            </td>
            <td>
            <RiCloseCircleLine   onClick={(e)=>_delete(e, t)}className='delete-icon'/>
            </td>
        </tr>
    )
    return _tas
}
    return (
             <>
      {etatTask ? <Update_task task={task_update} handSubmit={(t: Task_data)=>_update(t)  }/> :
       <div className="todo-app"> <Add_task handSubmit={(t)=>_add(t)}/>
 <table >
      {affich()}
      {etatTask && <Update_task task={task_update} handSubmit={(t: Task_data)=>_update(t)  }/>}
     </table>     

</div>}</>);
};

export default Main;