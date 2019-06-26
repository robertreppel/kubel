import React, { useState, useEffect } from 'react';
import './App.css';
import { Word } from './Word';
import { ImportWords } from './ImportWords';
import { BoundedContextList } from './BoundedContextList';
import { ImportFileDropzone } from './ImportFileDropzone';

const App = () => {
  const [currentContext, setCurrentContext] = useState(null)

  const wordsFromLocalStorage = JSON.parse(localStorage.getItem("words"))
  const [words, setWords] = useState(wordsFromLocalStorage || [])

  const [isImportWordsDialogVisible, setIsImportWordsDialogVisible] = useState(wordsFromLocalStorage && wordsFromLocalStorage.length > 0 ? false : true)
  const [isContextListVisible, setIsContextListVisible] = useState(wordsFromLocalStorage && wordsFromLocalStorage.length > 0 ? true : false)

  const [isFileImportVisible, setIsFileImportVisible] = useState(false)

  useEffect(() => {
    const wordsJson = JSON.stringify(words);
    localStorage.setItem('words', wordsJson);
  }, [words]);

  const createNew = () => {
    const retVal = window.confirm("Creating a new Kubel will delete everything here.");
    if (retVal === true) {
      localStorage.clear();
      window.location.reload();
    }
  };

  const exportJson = () => {
    let projectJson = []
    for (var key in localStorage) {
      const item = JSON.parse(localStorage.getItem(key))
      projectJson.push({ key: key, item: item })
    }
    let fileName = window.prompt("Export As:")
    if (!fileName) {
      fileName = "Untitled"
    }
    if (!fileName.includes(".")) {
      fileName = `${fileName}.json`
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

  return (
    <React.Fragment>
      <div>
        <a
          href="https://github.com/robertreppel/kubel">
          <img
            style={{ position: "absolute", top: 0, right: 0}}
            width="149"
            height="149"
            src="https://github.blog/wp-content/uploads/2008/12/forkme_right_green_007200.png?resize=149%2C149"
            className="attachment-full size-full"
            alt="Fork me on GitHub" data-recalc-dims="1" />
        </a>
      </div>    <div className="page">
        <div className="App-header">
          <div className="menuItem"><h2>Kubel</h2></div>
          <div className="menuItem">
            <button onClick={createNew}>
              New
            </button>
          </div>
          <div className="menuItem">
            <button onClick={() => setIsFileImportVisible(!isFileImportVisible)}>
              Import
          </button>
          </div>
          <div className="menuItem">
            <button onClick={exportJson}>
              Export
          </button>
          </div>

        </div>
        <hr />
        <ImportFileDropzone isFileImportVisible={isFileImportVisible} />
        <BoundedContextList
          currentContext={currentContext}
          setCurrentContext={setCurrentContext}
          isContextListVisible={isContextListVisible}
        />
        {words.map(((word) => {
          return (<Word key={word.id} word={word} currentContext={currentContext} />)
        }))}
        <ImportWords
          isImportWordsDialogVisible={isImportWordsDialogVisible}
          setIsImportWordsDialogVisible={setIsImportWordsDialogVisible}
          setWords={setWords}
          setIsContextListVisible={setIsContextListVisible}
        />
      </div>
    </React.Fragment>
  );
}

export default App

