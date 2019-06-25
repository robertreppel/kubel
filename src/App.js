import React, { useState, useEffect } from 'react';
import './App.css';
import { Word } from './Word';
import { ImportWords } from './ImportWords';
import { BoundedContextList } from './BoundedContextList';
import {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

const App = () => {
  const [currentContext, setCurrentContext] = useState(null)

  const wordsFromLocalStorage = JSON.parse(localStorage.getItem("words"))
  const [words, setWords] = useState(wordsFromLocalStorage || [])

  const [isImportWordsDialogVisible, setIsImportWordsDialogVisible] = useState(wordsFromLocalStorage && wordsFromLocalStorage.length > 0 ? false : true)
  const [isContextListVisible, setIsContextListVisible] = useState(wordsFromLocalStorage && wordsFromLocalStorage.length > 0 ? true : false)

  const [ isFileImportVisible, setIsFileImportVisible ] = useState(false)

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
    <div className="page">
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
      <ImportFileDropzone isFileImportVisible={ isFileImportVisible }/>
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
  );
}

export default App

function ImportFileDropzone(props) {  const onDrop = useCallback(acceptedFiles => {
  const reader = new FileReader()

  reader.onabort = () => console.log('file reading was aborted')
  reader.onerror = () => console.log('file reading has failed')
  reader.onload = () => {
    const binaryStr = reader.result
    const kubel = JSON.parse(binaryStr);
    kubel.forEach( item => {
      localStorage.setItem(item.key, JSON.stringify(item.item))
    })
    window.location.reload()
  }

  acceptedFiles.forEach(file => reader.readAsBinaryString(file))
}, [])
const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

if(!props.isFileImportVisible) {
  return(<React.Fragment />)
}
return (
  <div className="importFileDropzone" {...getRootProps()}>
    <input {...getInputProps()} />
    <p>Drag 'n' drop a file here, or click to select files</p>
  </div>
)}