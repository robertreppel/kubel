import React from 'react';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
export const ImportFileDropzone = (props) => {
  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader();
    reader.onabort = () => console.log('file reading was aborted');
    reader.onerror = () => console.log('file reading has failed');
    reader.onload = () => {
      const binaryStr = reader.result;
      const kubel = JSON.parse(binaryStr);
      kubel.forEach(item => {
        localStorage.setItem(item.key, JSON.stringify(item.item));
      });
      window.location.reload();
    };
    acceptedFiles.forEach(file => reader.readAsBinaryString(file));
    window.ga('send', 'event', 'Project', 'ProjectImported');
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  if (!props.isFileImportVisible) {
    return (<React.Fragment />);
  }
  return (<div className="importFileDropzone" {...getRootProps()}>
    <input {...getInputProps()} />
    <p><strong>Import Project:</strong> Drag 'n' drop a previously exported Kubel file here, or click to select file</p>
  </div>);
};
