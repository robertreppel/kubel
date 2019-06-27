import React, { useState, useEffect } from 'react';
import './App.css';
import { Word } from './features/Grouping/Word';
import { ImportWords } from './features/Import/ImportWords';
import { BoundedContextList } from './features/BoundedContexts/BoundedContextList';
import { ImportFileDropzone } from './features/Import/ImportFileDropzone';
import { Toolbar } from './features/Toolbar/Toolbar';

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

  const toggleImportFileDragAreaVisible = () => {
    setIsFileImportVisible(!isFileImportVisible)
  }

  return (
    <React.Fragment>
      <div className="forkOnGithub">
        <a
          href="https://github.com/robertreppel/kubel">
          <img
            width="149"
            height="149"
            src="https://github.blog/wp-content/uploads/2008/12/forkme_right_green_007200.png?resize=149%2C149"
            className="attachment-full size-full"
            alt="Fork me on GitHub" data-recalc-dims="1" />
        </a>
      </div>
      <div className="page">
        <div className="App-header">
          <Toolbar toggleImportFileDragAreaVisible={toggleImportFileDragAreaVisible} />
        </div>
        <div style={{ backgroundColor: "#81A3D9", paddingLeft: "10px", paddingRight: "10px"}}>
          <BoundedContextList
            currentContext={currentContext}
            setCurrentContext={setCurrentContext}
            isContextListVisible={isContextListVisible}
          />
        </div>
        <div className="content">
          <ImportFileDropzone isFileImportVisible={isFileImportVisible} />
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
      </div>
    </React.Fragment>
  );
}

export default App


