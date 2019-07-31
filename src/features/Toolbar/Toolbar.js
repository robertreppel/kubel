import React from 'react';
import './Toolbar.css';

export const Toolbar = (props) => {
  const createNew = () => {
    window.ga('set', 'page', '/new-project');
    window.ga('send', 'pageview');
    const retVal = window.confirm("Creating a new Kubel project will delete everything here.");
    if (retVal === true) {
      localStorage.clear();
      window.location.reload();
    }
  };
  const exportJson = () => {
    window.ga('set', 'page', '/export-project');
    window.ga('send', 'pageview');

    let projectJson = [];
    for (var key in localStorage) {
      const item = JSON.parse(localStorage.getItem(key));
      projectJson.push({ key: key, item: item });
    }
    let fileName = window.prompt("Export file name:");
    if (!fileName) {
      fileName = "Untitled";
    }
    if (!fileName.includes(".")) {
      fileName = `${fileName}.json`;
    }
    download(JSON.stringify(projectJson), fileName, 'text/json');
  };

  function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }
  
  return (<React.Fragment>
    <div className="logoText"><h2>Kubel</h2></div>
    <p className="navText">Service Boundary Explorer</p>
    <div className="menuItem">
      <button className="menu" onClick={createNew}>
        New
      </button>
    </div>
    <div className="menuItem">
      <button className="menu" onClick={ props.toggleImportFileDragAreaVisible }>
        Import
      </button>
    </div>
    <div className="menuItem">
      <button className="menu" onClick={exportJson}>
        Export
    </button>
    </div>
  </React.Fragment>);
};
