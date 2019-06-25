import React, { useState, useEffect } from 'react';
import uuidv4 from 'uuid/v4';
import { BoundedContext } from "./BoundedContext";

export const BoundedContextList = (props) => {
  const contextsFromLocalStorage = JSON.parse(localStorage.getItem("contexts"))
  const [contexts, setContexts] = useState(contextsFromLocalStorage || []);
    
  useEffect(() => {
    const contextJson =  JSON.stringify(contexts);
    localStorage.setItem('contexts', contextJson);
  }, [contexts]);

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
      <h4>Bounded Contexts</h4>
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
    <hr />
  </div>);
};
