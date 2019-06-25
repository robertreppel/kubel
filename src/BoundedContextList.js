import React, { useState } from 'react';
import uuidv4 from 'uuid/v4';
import { BoundedContext } from "./BoundedContext";
export const BoundedContextList = (props) => {
  const [contexts, setContexts] = useState([]);

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  if(!props.isContextListVisible) {
    return(<React.Fragment />)
  }
  return (<div>
    <div className="contextList">
      {contexts.map(context => {
        return (<BoundedContext key={context.id} setCurrentContext={props.setCurrentContext} currentContext={props.currentContext} context={context} />);
      })}
      <span><input id="newContextName"></input></span>
      <span>
        <button onClick={() => {
          const contextNameInput = document.getElementById("newContextName");
          const newContext = {
            id: uuidv4(),
            name: contextNameInput.value,
            color: getRandomColor()
          };
          contextNameInput.value = "";
          setContexts([...contexts, newContext]);
        }}>New Context</button>
      </span>
    </div>
  </div>);
};
