import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  //  FOR HANDLING THE FILE WHICH IS UPLOADED BY THE USER
  const handleFile = e => {
    const fileTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    const selectedFile = e.target.files[0];
    if (selectedFile && fileTypes.includes((selectedFile.type).toLowerCase())) {
      setFile(selectedFile);
      setError(null);
    }
    else {
      setFile(null);
      setError('Please select an image of type (png or jpg)');
    }
  }

  return (
    <form>
      <label>
        <input type='file' onChange={handleFile} />
        <span>+</span>
      </label>
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div className='file'>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  )
}

export default UploadFile
