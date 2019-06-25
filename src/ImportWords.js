import React from 'react';
import uuidv4 from 'uuid/v4';

export const ImportWords = (props) => {

    const importWords = () => {
        const text = document.getElementById("importedWords").value;
        let importedLines = new Map();
        text.split("\n").map((word) => {
            if (word) {
                if (importedLines.has(word)) {
                    importedLines.set(word, importedLines.get(word) + 1);
                }
                else {
                    importedLines.set(word, 1);
                }
            }
            return null;
        });
        let words = [];
        importedLines.forEach((v, k) => {
            words.push({ id: uuidv4(), text: k, count: v });
        });
        props.setWords(words);
        props.setIsImportWordsDialogVisible(false);
        props.setIsContextListVisible(true)
    }

    if (props.isImportWordsDialogVisible) {
        return (<div>
            <p>Paste words here:</p>
            <div>
                <textarea id="importedWords" rows={20} cols={50}></textarea>
            </div>
            <div>
                <button onClick={importWords}>Import</button>
            </div>
        </div>);
    }
    else {
        return (<React.Fragment />);
    }
};
