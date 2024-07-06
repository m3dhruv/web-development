import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [showbtn, setshowbtn] = useState(false);
  const [todos, settodos] = useState([
    {
      title: "hii 1",
      desc: "i am a good todo 1",
    },
    {
      title: "hii 2",
      desc: "i am a good todo 2",
    },
    {
      title: "hii 3",
      desc: "i am a good todo 3",
    },
  ]);

  const Todo = ({todo}) => {
    return (
      <>
        <div className="m-4 border-1">
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn && <button> Click </button>}


      {todos.map((todo => {
        return<Todo key={todo.title} todo={todo}/>
        }))}



      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>toggle showbtn</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}


export default App;
