import React from "react"

export default function TextInput(props) {
  const { value, onChange } = props
  return (
    <input
      style={{ padding: 10, width: 300, marginRight: 20, borderRadius: 10 }}
      value={value}
      onChange={onChange}
    />
  )
}
