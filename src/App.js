import React, { useState } from "react"

import Button from "./components/Button"
import TextInput from "./components/TextInput"
import TodoItem from "./components/TodoItem"

function App() {
  const [todos, setTodos] = useState([
    { text: "공부하기", checked: false },
    { text: "청소하기", checked: false },
  ])
  const [text, setText] = useState("")

  const createTodo = () => {
    const newTodo = {
      text,
      checked: false,
    }
    setTodos([...todos, newTodo])
    setText("")
  }

  const toggleCheck = (i) => {
    todos[i].checked = !todos[i].checked
    setTodos([...todos])
  }

  const deleteTodo = (i) => {
    setTodos([...todos.slice(0, i), ...todos.slice(i + 1, todos.length)])
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: 100,
      }}
    >
      <h1>Todo List</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <TextInput value={text} onChange={(e) => setText(e.target.value)} />
        <Button onClick={createTodo}>생성</Button>
      </div>
      <div>
        {todos.map((v, i) => (
          <TodoItem
            key={v.text}
            contents={v.text}
            toggleCheck={() => toggleCheck(i)}
            checked={v.checked}
            deleteTodo={() => deleteTodo(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default App
