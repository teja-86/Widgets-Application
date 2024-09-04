import React, { useState } from 'react';

const GalleryWidget = () => {
  const [images, setImages] = useState([]);

  const addImage = () => {
    const newImage = `https://via.placeholder.com/150?text=Image+${images.length + 1}`;
    setImages([...images, newImage]);
  };

  return (
    <div className="p-6 bg-gray-400  shadow-lg rounded-lg">
      <div className="mb-4">
        <button 
          onClick={addImage} 
          className="bg-indigo-500 text-white px-4 py-2 rounded bg-slate-800"
        >
          Add Image
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index}`} className="w-full h-auto rounded" />
        ))}
      </div>
    </div>
  );
};

export default GalleryWidget;
