import React from 'react';
import uuidv4 from 'uuid/v4';
import './../../App.css'

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
      <button className="button commandBtn" onClick={() => {
        const contextNameInput = document.getElementById("newContextName");
        const trimmedContextName = contextNameInput.value.trim()
        if (trimmedContextName.length > 0) {
          const newContext = {
            id: uuidv4(),
            name: trimmedContextName,
            color: getRandomColor()
          };
          contextNameInput.value = "";
          props.createNewBoundedContext(newContext);
        }
      }}>New</button>
    </span>
  </React.Fragment>);
};
