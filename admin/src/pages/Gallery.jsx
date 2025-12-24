import React, { useState } from 'react'

const Gallery = () => {
  const [images, setImages] = useState([])

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Gallery Management</h1>
          <p className="text-gray-600 mt-2">Manage your gallery images</p>
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all flex items-center space-x-2">
          <span className="text-xl">➕</span>
          <span className="font-semibold">Add Images</span>
        </button>
      </div>

      {images.length === 0 ? (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <div className="text-6xl mb-4">🖼️</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No images yet</h3>
          <p className="text-gray-600 mb-6">Start by uploading your first image to the gallery</p>
          <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all">
            Upload Images
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Gallery items will be mapped here */}
        </div>
      )}
    </div>
  )
}

export default Gallery
