import { useState } from "react";

export function CreateTodo()
{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input type="text" name="" id="" placeholder="Title" onChange={(e)=>
                {
                    setTitle(e.target.value)
                }
            }/>
            <br />
            <input type="text" name="" id="" placeholder="Description" onChange={(e)=>
                {
                    setDescription(e.target.value)
                }
            }/>
            <br />
            <button
            onClick={()=>
            {
                fetch('http://localhost:3000/todo', {
                    method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                title: title,
                description: description,
                completed: false
            })
        }).then(async function(response){ 
                const data = await response.json();
                alert("Todo Created")
                setTitle("");
                setDescription("");
              })
            }
         }>Add Todo</button>
        </div>
    )
}
