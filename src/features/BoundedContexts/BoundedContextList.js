import React, { useState, useEffect } from 'react';
import { BoundedContext } from "./BoundedContext";
import { NewContext } from './NewContext';

export const BoundedContextList = (props) => {
  window.ga('set', 'page', '/bounded-contexts-page');
  window.ga('send', 'pageview');

  const contextsFromLocalStorage = JSON.parse(localStorage.getItem("contexts"))
  const [contexts, setContexts] = useState(contextsFromLocalStorage || []);


  function createNewBoundedContext(newContext) {
    setContexts([...contexts, newContext]);
    window.ga('send', 'event', 'Context', 'Created');
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
      {contexts.length === 0 ? <OnboardingInstructions /> :
        <React.Fragment>
          <hr style={{ color: "#F8FAFB" }} />
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
  return (
    <ol className="onboardingText">
      <li className="onboardingTextLine">Drag &amp; Drop phrases which belong together into groups. </li>
      <li className="onboardingTextLine">Create &amp; select bounded contexts.</li>
      <li className="onboardingTextLine">Click phrases to mark them as belonging to the currently selected context.</li>
    </ol>
  )
}