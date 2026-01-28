import { useState } from "react";
import "../App.css";
function App() {
  const [Task, TaskFn] = useState(""); //task
  const [List, ListFn] = useState([]); //store task
  const [Edit,SetEdit] =useState(null);
  

  const apiUrl="http://localhost:5000/api/todos";

 
  
const addTodo=async()=>
  {
   if (!Task) return alert("Enter a task");

    if(Edit) 
    {
      const res = await fetch(`http://localhost:5000/api/todos/${Edit}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: Task }), 
      });
      const data = await res.json();
      console.log("Updated todo:", data); // ✅ backend response check
      ListFn(prev=>prev.map(todo => todo._id === Edit ? { ...todo, task: data.task } : todo));
      TaskFn("");
      SetEdit(null);
      return;
      
    }
 
    
      const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task: Task }), 
    });

    const data = await res.json();
    console.log("Added todo:", data); // ✅ backend response check

    // // refresh local list (optional: fetch from backend)
    ListFn(prev => [...prev, data.todo]);
    TaskFn(""); // clear input field
    
  
   
    

    }

  
 
const Show = async () => {
  try {
    const res = await fetch(`http://localhost:5000/api/todos`);
    const data = await res.json(res);
    ListFn(data); // todos list set
  } catch (err) {
    console.error(err);
  }
};





const del=async (id)=>{
    const res=await fetch(`http://localhost:5000/api/todos/${id}`,{
         method:"DELETE",
         headers: { "Content-Type": "application/json" },  
          
    });

    const data=await res.json();
    ListFn(prev=>prev.filter(todo => todo._id !== id));

    


}

 const edit=async (item)=>
 {

    TaskFn(item.task);//code
    SetEdit(item._id);//code task id
    // ListFn(prev => prev.filter(todo => todo._id !== item._id)); // box disappear

  
  }



  return (
    <div>
      <h1>My Todo</h1>

      <input
        type="text"
        placeholder="Enter your task"
        onChange={(e) => TaskFn(e.target.value)}
        value={Task}
      />

      <button onClick={addTodo} disabled={!Task}>


     
        Add
      </button>
      <button onClick={Show}style={{marginLeft:"2vw"}}>Show</button>

      <ul>
        {List.map((item) => {
          return (
            <div key={item._id}
            style={{display:item._id ===Edit ? "none":"flex", alignItems:"center", gap:"1vw", marginTop:"1vh"}}
            >
              <input type="checkbox" />
              <input type="text" value={item._id === Edit ? Task : item.task} readOnly />
              <button onClick={()=>edit(item)}>
                
                     
                Edit
              </button>

              <button
                onClick={()=>del(item._id)}
                //     () =>
                //   ListFn(List.filter((value, indx) => indx !== index))
                
              >
                Delete{" "}
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
