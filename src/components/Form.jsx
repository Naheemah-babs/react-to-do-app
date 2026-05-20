import { useState } from "react";
import '../styles/form.css';
export default function Form({todos, setTodos}){
    const [todo, setTodo] = useState("");
    
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo("");
      }
      return (
        <div>
          <form onSubmit={handleSubmit} className="todoForm">
            <input
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Enter your item"
              value={todo}
              type="text"
              className= "formInput"
            />
            <button type="submit" className="formButton">Add</button>
          </form>
        </div>
      )
}