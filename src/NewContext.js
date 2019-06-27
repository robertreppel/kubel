import React from 'react';
import uuidv4 from 'uuid/v4';

export const NewContext = (props) => {
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (<React.Fragment>
    <span style={{ marginRight: "10px" }}><input id="newContextName"></input></span>
    <span>
      <button onClick={() => {
        const contextNameInput = document.getElementById("newContextName");
        const newContext = {
          id: uuidv4(),
          name: contextNameInput.value,
          color: getRandomColor()
        };
        contextNameInput.value = "";
        props.createNewBoundedContext(newContext);
      }}>New</button>
    </span>
  </React.Fragment>);
};
