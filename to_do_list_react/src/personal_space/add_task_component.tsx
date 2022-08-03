import React, { FunctionComponent, useState } from "react";
import {v4} from 'uuid'
import { task_create_body } from "../interfaces/task.input";
type Props = {
    handSubmit ? : (_t : task_create_body)=>void ;
}

const Add_task: FunctionComponent<Props> = (props: Props) => {
    const [task0,setTask0]=useState<task_create_body>({
        _task : "string" ,
         _done : false 
})
    const [numT, setnumT]=useState(0)
    function _hand(e: { preventDefault: () => void; }){
    e.preventDefault()
        if(props.handSubmit)
            props.handSubmit(task0)
    }
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setTask0({_task:e.target.value,_done:false})
    }
    return (
        <form >
           <label htmlFor="task"><h1>What will you to do today</h1></label>
            <input type="text" id="uname" name="name" className="main-input" onChange={(e)=>handleChange(e)}/>
            <input type="submit" className="send-input" onClick={(e)=>_hand(e)}/>
        </form>
    );
};

export default Add_task ;


