import React, { Component, useState } from 'react';
import styled from 'styled-components'

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const RemoveButton = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const TextField = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;


/**
 * Table Compoenet
 * returns: row index, textfield for edit, delete button, and indices of substring
 */
const Table = () => {
  const [row, setRow] = useState([]);

  // New row created everytime add button is clicked
  const createRow = () => {
    setRow([
      ...row,
      { index: row.length, 
        textfield: "",
        indices: [] }
    ]);
  };

  // Checks to see if other rows are substring of current id row
  const substringCheck = (copyArray, id) => {
    for (var i = 0; i < copyArray.length; i++) {
      let string = copyArray[i].textfield;
      if ((string != copyArray[id].textfield) && (string.includes(copyArray[id].textfield))) {
        let indiceArray = [...row];
        if (!indiceArray[i].indices.includes(id)) {
          indiceArray[i].indices.push(id);
          setRow(indiceArray);
        }
      }
    }

  };

  // Automatically change letters to uppercase
  const handleTextFieldChange = (event, id) => {
    let copyArray = [...row];
    copyArray[id].textfield = event.target.value.toUpperCase();
    setRow(copyArray);
    substringCheck(copyArray, id);
  };

  // Removes row, handles removing and shifting indices
  const deleteRow = (id) => {
    let array = [...row];
    var i = 0, found = false;

    while (i < array.length) {
      array[i].indices = array[i].indices.filter(item => item !== id)
      if (found) {
        --array[i].index;
        ++i;
        continue;
      }
      if (found = array[i].index === id) {
        array.splice(i, 1);
        continue;
      }
      ++i;
    } 

    var j = 0;
    var x = 0;
    while (x < array.length) {
      for (j = 0; j < array[x].indices.length; j++) {
        if (array[x].indices[j] > id) {
          array[x].indices[j]--;
        }

      }
      ++x;
   }

    setRow(array);

  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Text Field</th>
            <th>Delete Row</th>
            <th>Indices of Substring</th>
          </tr>
        </thead>
        <tbody>
          {
          row.length ? row.map((row, id) => (
            <tr key={id}>
              <td>
                {row.index}
              </td>
              <td>
                <TextField 
                type="text"
                value={row.textfield}
                onChange={(event) => handleTextFieldChange(event, id)}
                />
              </td>
              <td>
                <RemoveButton onClick={(event) => deleteRow(id)}>Remove</RemoveButton>
              </td>
              <td>
                [ {row.indices.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ]
              </td>
            </tr>
          )) : null
          }
        </tbody>
      </table>
      <Button onClick={createRow}>
        Add
      </Button>
    </div>
  );

}

export default Table;