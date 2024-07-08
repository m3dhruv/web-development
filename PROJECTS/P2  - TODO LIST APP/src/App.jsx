import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])


  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = () => {
    setshowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    const t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id;
    })
    setTodos(newTodos)
    saveToLS();

  };

  const handleDelete = (e, id) => {

    let newTodos = todos.filter(item => {
      return item.id !== id;
    })
    setTodos(newTodos)
    saveToLS();

  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isComplated = !newTodos[index].isComplated;
    setTodos(newTodos)
    saveToLS();
  };

  return (
    <>
      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-slate-200 min-h-[80vh] md:w-[35%]">
        <h1 className="font-bold text-2xl text-center" >iTask - Manage your todos at one place</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className="text-xl font-bold">Add a todo</h2>
          <div className="flex">
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-full rounded-full px-5 py-1 font-bold"
          />
          <button
            onClick={handleAdd} disabled={todo.length < 3}
            className="bg-slate-800  hover:bg-slate-900  mx-2 p-4 py-2 text-sm font-bold text-white rounded-full"
          >
            Save
          </button>
          </div>
        </div>
        <input className="my-4" id="show" onChange={toggleFinished} type="checkbox" chacked={showFinished} /> 
        <label  className="mx-2 font-bold" htmlFor="show" >Show Finished</label>
        <div className="h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2"></div>
        <h2 className="text-xl font-bold">Your Todos</h2>

        <div className="todos">
          {todos.length === 0 && <div className="m-5 font-bold"  >No Todos to display</div>}
          {todos.map(item => {
            return (showFinished || !item.isComplated) && <div key={item.id} className="todo flex my-3 justify-between">
              <div className="flex gap-5 font-bold">
                <input name={item.id} onChange={handleCheckbox} type="checkbox" chacked={item.isComplated} id="" />
                <div className={item.isComplated ? "line-though" : ""}>
                  {item.todo}
                </div>
              </div>

              <div className="buttons flex h-full">
                <button onClick={(e) => handleEdit(e, item.id)} className="bg-slate-800 hover:bg-slate-900 p-2 py-1 text-sm font-bold text-white rounded-md mx-1">
                  <FaEdit />
                </button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className="bg-slate-800 hover:bg-slate-900 p-2 py-1 text-sm font-bold text-white rounded-md mx-1">
                  <MdDeleteForever /> </button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  );
}

export default App;
