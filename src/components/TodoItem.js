import React from "react"

export default function TodoItem(props) {
  const { contents, deleteTodo, toggleCheck, checked } = props
  return (
    <div style={{ display: "flex", width: 450, margin: 20 }}>
      <input type="checkbox" checked={checked} onClick={toggleCheck} />
      <span
        style={{
          flex: 1,
          textDecorationLine: checked ? "line-through" : "none",
          marginLeft: 10,
        }}
      >
        {contents}
      </span>
      <span style={{ color: "red" }} onClick={deleteTodo}>
        del
      </span>
    </div>
  )
}
