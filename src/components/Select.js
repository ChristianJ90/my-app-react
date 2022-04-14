import React from 'react'

const select = ({options = [], onSelect}) => {
  return (
    <select>
        {options.map((el) => <option value={el.value}>{el.text}</option>)}
    </select>
  )
}

export default select