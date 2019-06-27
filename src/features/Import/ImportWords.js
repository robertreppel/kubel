import React from 'react';
import uuidv4 from 'uuid/v4';
import './ImportWords.css';

export const ImportWords = (props) => {

    const doImport = () => {
        const text = document.getElementById("importedWords").value;
        let importedLines = new Map();
        text.split("\n").map((word) => {
            const myRegexp = /^(\d*):(.*)/;
            const match = myRegexp.exec(word);
            if (match) {
                const lineNo = match[1]
                const text = match[2]
                addPhraseToVocabulary(text, importedLines, lineNo);
            } else {
                addPhraseToVocabulary(word, importedLines);
            }

            return null;
        });
        if(importedLines.size > 0) {
            let words = [];
            importedLines.forEach((v, k) => {
                words.push({ id: uuidv4(), text: k, count: v });
            });
            props.setWords(words);
            props.setIsImportWordsDialogVisible(false);
            props.setIsContextListVisible(true)
        }
    }

    function addPhraseToVocabulary(text, importedLines) {
        const trimmedText = text.trim()
        if (trimmedText.length  > 0) {
            if (importedLines.has(text)) {
                importedLines.set([]);
            }
            else {
                importedLines.set(text, []);
            }
        }
    }

    if (props.isImportWordsDialogVisible) {
        return (
            <div className="importWordsContentArea">
                <div>
                    <h4>Paste text here</h4>
                    <p>Every line of text will be a phrase which can be grouped with other phrases to determine system boundaries based on Ubiquitous Language.</p>
                </div>
                <div>
                    <textarea id="importedWords" style={{ width: "90vw" }} rows="20"></textarea>
                </div>
                <div>
                    <button className="button commandBtn" onClick={doImport}>Generate Vocabulary</button>
                </div>
            </div>);
    }
    else {
        return (<React.Fragment />);
    }
};



