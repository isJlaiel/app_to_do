import React, { FunctionComponent, useEffect, useState } from "react";

type Props = {
    
}

const Get_user: FunctionComponent<Props> = (props: Props) => {
    const[name,setName]=useState('')
    useEffect(()=>{
        (
            async () => {
                const requestOptions = {
                    headers: { 'Content-Type': 'application/json' },
                    //cookie
                    Credentials:"include",
                }
                const response = await fetch('http://localhost:3001/auth/protected',requestOptions)
            const _content= await response.json();
            setName(_content.username)
            }
        )();
    })
    return (
       <div> Hi <h1>{name}</h1> What will you to do today</div>
    );
};

export default Get_user;