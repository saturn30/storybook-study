import React from "react"

export default function Button(props) {
  const { onClick, children } = props
  return (
    <button
      style={{
        width: 100,
        padding: 15,
        borderRadius: 20,
        backgroundColor: "purple",
        color: "white",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
