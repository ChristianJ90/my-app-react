import * as React from 'react';

const Selec = ({options = [], onSelect}) => {
  const handleSelect= (e) =>{
    onSelect(e.target.value)
  }
  return (
    <select onChange={handleSelect}>
        {options.map((el) => <option value={el.value}  key ={el.value}> {el.text}</option>)}
</select>
  )
}

export default Selec