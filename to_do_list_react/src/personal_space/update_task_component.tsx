import React, { FunctionComponent, useState } from "react";
import { Task_data } from "../interfaces/task_data";
import { Task_update_body } from "../interfaces/Task_up";

type Props = {
    handSubmit ? : (t :Task_data)=>void
    task : Task_data ;
}

const Update_task: FunctionComponent<Props> = (props: Props) => {
    const [taskUp, setTask]=useState<Task_data>(props.task)
    function _hand(e: { preventDefault: () => void; }){
        e.preventDefault()
            if(props.handSubmit)
                props.handSubmit(taskUp)
        }
    return (
       <form className="todo-update" > <input className="main-input" type="text" id="uname" name="name" onChange={(e)=>setTask(previousState => {return { ...previousState,_task:e.target.value }})}/>
        <button type="submit"  className="send-input" onClick={(e)=>_hand(e)}>Update</button></form>
    );
};

export default Update_task;

