import React from "react"

export default function Button(props) {
  const { onClick, children } = props
  return (
    <button
      style={{ width: 100, padding: 10, borderRadius: 20, backgroundColor: "lavender" }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
