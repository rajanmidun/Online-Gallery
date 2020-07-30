import React, { useState } from 'react';
import Title from './components/Title';
import UploadFile from './components/UploadFile';
import ImagesGrid from './components/ImagesGrid';
import Modal from './components/Modal';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(selectedImage);

  return (
    <div className="App">
      <Title />
      <UploadFile />
      <ImagesGrid setSelectedImage={setSelectedImage} />
      {
        selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      }
    </div>
  );
}

export default App;
