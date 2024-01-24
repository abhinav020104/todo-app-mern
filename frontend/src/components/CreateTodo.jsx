import { useState } from "react";

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>  
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={
            function(e){
                const tvalue = e.target.value;
                setTitle(tvalue);
            }
        }></input><br/>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={
            function(e){
                const dvalue = e.target.value;
                setDescription(dvalue);
            }
        }></input>
        <br />
        <button style={{
            padding: 10, 
            margin: 10}}
            onClick={()=>{
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers:{
                        "contentType": "application/json"
                    }
                })
                .then(async function(res){
                    const json = await res.json();
                    alert("todo added");
                })
            }}>Add a TODO</button>
    </div>
}