import React, { useState, useEffect } from 'react';
import { BoundedContext } from "./BoundedContext";
import { NewContext } from './NewContext';

export const BoundedContextList = (props) => {
  const contextsFromLocalStorage = JSON.parse(localStorage.getItem("contexts"))
  const [contexts, setContexts] = useState(contextsFromLocalStorage || []);


  function createNewBoundedContext(newContext) {
    setContexts([...contexts, newContext]);
  }

  useEffect(() => {
    const contextJson = JSON.stringify(contexts);
    localStorage.setItem('contexts', contextJson);
  }, [contexts]);

  if (!props.isContextListVisible) {
    return (<React.Fragment />)
  }
  return (
    <div>
      <div>
        <span><h4 style={{ display: "inline-block", marginRight: "10px" }}>Bounded Contexts</h4></span><NewContext createNewBoundedContext={createNewBoundedContext} />
      </div>
      <div className="contextList">
        {contexts.map(context => {
          return (<BoundedContext key={context.id} setCurrentContext={props.setCurrentContext} currentContext={props.currentContext} context={context} />);
        })}
      </div>
      <hr />
    </div>);
};



