import { useState } from "react";
import TaskItem from "./TaskItem";

function TodoApp(){
    const[task,setTask]=useState([]);
    const[showTask,setShowTask]=useState(false);

    function addTask(event){
        if(event.key==="Enter"){

            const newTask={title:event.target.value , id:""};
            const newArray=[...task];
            newArray.push(newTask);
            setTask(newArray);
            event.target.value="";
        }
    }

    return(
        
        <>
          <input type="text" placeholder="enter task" onKeyUp={(e)=>{addTask(e)}}/>
          <br />
          <br />
          <button onClick={()=>setShowTask(!showTask)}>{!showTask ? "show task" : "hide task"}</button>
          <br />
          {showTask && <ul>
            {
                task.map((item)=>{
                    return(
                        <TaskItem key={item.id} title={item.title}/>
                    )
                })
            }
          </ul>
          }
        </>
    )
}
export default TodoApp;