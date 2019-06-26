import React from 'react';
export const Toolbar = (props) => {
  const createNew = () => {
    const retVal = window.confirm("Creating a new Kubel will delete everything here.");
    if (retVal === true) {
      localStorage.clear();
      window.location.reload();
    }
  };
  const exportJson = () => {
    let projectJson = [];
    for (var key in localStorage) {
      const item = JSON.parse(localStorage.getItem(key));
      projectJson.push({ key: key, item: item });
    }
    let fileName = window.prompt("Export As:");
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
    <div className="menuItem"><h2>Kubel</h2></div>
    <div className="menuItem">
      <a href="#" onClick={createNew}>
        New
      </a>
    </div>
    <div className="menuItem">
      <a href="#" onClick={ props.toggleImportFileDragAreaVisible }>
        Import
    </a>
    </div>
    <div className="menuItem">
      <a href="#" onClick={exportJson}>
        Export
    </a>
    </div>
  </React.Fragment>);
};
