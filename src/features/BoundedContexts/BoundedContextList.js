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
        <span><h4 style={{ display: "inline-block", marginRight: "10px", color: " #F8FAFB" }}>Contexts</h4></span><NewContext createNewBoundedContext={createNewBoundedContext} />
      </div>
      { contexts.length === 0 ? <OnboardingInstructions /> :
      <React.Fragment>
      <hr style={{ color: "#F8FAFB" }}/>
      <div className="contextList">
        {contexts.map(context => {
          return (<BoundedContext key={context.id} setCurrentContext={props.setCurrentContext} currentContext={props.currentContext} context={context} />);
        })}
      </div>
      </React.Fragment>
      }
    </div>);
};


const OnboardingInstructions = () => {
  return(<div className="onboardingText">
    <div className="onboardingTextLine">1. Drag &amp; Drop terms which belong together into groups. </div>
    <div className="onboardingTextLine">2. Create &amp; select bounded contexts.</div> 
    <div className="onboardingTextLine">3. Click terms to mark them as belonging to the currently selected context.</div>
    </div>)
}