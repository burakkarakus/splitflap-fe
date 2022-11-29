import React, { useState } from 'react';

const handleChange = e => {
  e.target.value = e.target.value.toUpperCase();
  const { maxLength, value, name } = e.target;
  const [fieldName, fieldIndex] = name.split("-");

  if (value.length >= maxLength) {
    if (parseInt(fieldIndex) >= 1) {
      const nextSibling = document.querySelector(
        `input[name=flappingInput-${parseInt(fieldIndex) + 1}]`
      );

      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }
  }
}


export default function CustomInput({stateChanger, ...props}) {
  return <input
    name={"flappingInput-" + props.name}
    className='flapping-input'
    type="text"
    maxLength={1}
    onChange={(e) => { handleChange(e); stateChanger(e.target.value); }} />;
}