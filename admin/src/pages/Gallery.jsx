import React, { useState, useEffect } from 'react'
import { X, Image, Video, Upload, Trash2, Edit, Plus } from 'lucide-react'

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [mediaType, setMediaType] = useState('image') // 'image' or 'video'
  const [formData, setFormData] = useState({
    title: '',
    mediaType: 'image',
    imageUrl: '',
    videoUrl: '',
    altText: '',
    status: 'published',
    priority: 0
  })

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'
  const API_URL = `${BACKEND_URL}/api`
  const BASE_URL = BACKEND_URL

  useEffect(() => {
    fetchGallery()
  }, [])

  const fetchGallery = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/admin/gallery`)
      const data = await response.json()
      if (data.success) {
        setGalleryItems(data.gallery)
      }
    } catch (error) {
      console.error('Error fetching gallery:', error)
      alert('Failed to fetch gallery items')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleMediaTypeChange = (type) => {
    setMediaType(type)
    setFormData(prev => ({ ...prev, mediaType: type }))
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a valid image file (jpeg, jpg, png, gif, webp)')
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      alert('Image size should be less than 10MB')
      return
    }

    setUploadingImage(true)

    try {
      const uploadFormData = new FormData()
      uploadFormData.append('image', file)

      const response = await fetch(`${API_URL}/upload/gallery`, {
        method: 'POST',
        body: uploadFormData
      })

      const data = await response.json()

      if (data.success) {
        setFormData(prev => ({
          ...prev,
          imageUrl: BASE_URL + data.data.url
        }))
        alert(`Image uploaded successfully! Size: ${data.data.size}`)
      } else {
        alert(data.message || 'Failed to upload image')
      }
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('Failed to upload image')
    } finally {
      setUploadingImage(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.mediaType === 'image' && !formData.imageUrl) {
      alert('Please upload an image')
      return
    }

    if (formData.mediaType === 'video' && !formData.videoUrl) {
      alert('Please enter a YouTube video URL')
      return
    }

    try {
      const url = editingItem
        ? `${API_URL}/admin/gallery/${editingItem._id}`
        : `${API_URL}/admin/gallery`

      const method = editingItem ? 'PUT' : 'POST'

      const submitData = {
        ...formData
      }

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submitData)
      })

      const data = await response.json()

      if (data.success) {
        alert(editingItem ? 'Gallery item updated successfully!' : 'Gallery item created successfully!')
        resetForm()
        setShowModal(false)
        fetchGallery()
      } else {
        alert(data.message || 'Failed to save gallery item')
      }
    } catch (error) {
      console.error('Error saving gallery item:', error)
      alert('Failed to save gallery item')
    }
  }

  const handleEdit = (item) => {
    setEditingItem(item)
    setMediaType(item.mediaType)
    setFormData({
      title: item.title || '',
      mediaType: item.mediaType,
      imageUrl: item.imageUrl || '',
      videoUrl: item.videoUrl || '',
      altText: item.altText || '',
      status: item.status,
      priority: item.priority || 0
    })
    setShowModal(true)
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this gallery item?')) return

    try {
      const response = await fetch(`${API_URL}/admin/gallery/${id}`, {
        method: 'DELETE'
      })

      const data = await response.json()

      if (data.success) {
        alert('Gallery item deleted successfully!')
        fetchGallery()
      } else {
        alert(data.message || 'Failed to delete gallery item')
      }
    } catch (error) {
      console.error('Error deleting gallery item:', error)
      alert('Failed to delete gallery item')
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      mediaType: 'image',
      imageUrl: '',
      videoUrl: '',
      altText: '',
      status: 'published',
      priority: 0
    })
    setEditingItem(null)
    setMediaType('image')
  }

  const extractYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const getYouTubeThumbnail = (url) => {
    const videoId = extractYouTubeId(url)
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Gallery Management</h1>
          <p className="text-gray-600 mt-2">Manage your gallery images and videos</p>
        </div>
        <button
          onClick={() => {
            resetForm()
            setShowModal(true)
          }}
          className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all flex items-center space-x-2"
        >
          <Plus size={20} />
          <span className="font-semibold">Add Media</span>
        </button>
      </div>

      {loading ? (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-gray-600">Loading gallery...</p>
        </div>
      ) : galleryItems.length === 0 ? (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <div className="text-6xl mb-4">🖼️</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No media yet</h3>
          <p className="text-gray-600 mb-6">Start by uploading your first image or adding a video</p>
          <button
            onClick={() => {
              resetForm()
              setShowModal(true)
            }}
            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all"
          >
            Add Media
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div key={item._id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative aspect-video bg-gray-200">
                {item.mediaType === 'image' ? (
                  <img
                    src={item.imageUrl}
                    alt={item.altText || item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={getYouTubeThumbnail(item.videoUrl)}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <Video className="text-white" size={32} />
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute top-2 right-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.mediaType === 'image'
                      ? 'bg-blue-500 text-white'
                      : 'bg-red-500 text-white'
                  }`}>
                    {item.mediaType === 'image' ? '📷 Image' : '🎥 Video'}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1 line-clamp-1">{item.title || 'Untitled'}</h3>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex gap-2">
                    <span className={`text-xs px-2 py-1 rounded ${
                      item.status === 'published'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {item.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-700" title="Priority Order">
                      #{item.priority || 0}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">
                {editingItem ? 'Edit Gallery Item' : 'Add New Media'}
              </h2>
              <button
                onClick={() => {
                  setShowModal(false)
                  resetForm()
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Media Type Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Media Type
                </label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => handleMediaTypeChange('image')}
                    className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                      mediaType === 'image'
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image className="mx-auto mb-2" size={32} />
                    <div className="font-semibold">Image</div>
                    <div className="text-xs text-gray-600">Upload image file</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMediaTypeChange('video')}
                    className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                      mediaType === 'video'
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Video className="mx-auto mb-2" size={32} />
                    <div className="font-semibold">Video</div>
                    <div className="text-xs text-gray-600">YouTube URL</div>
                  </button>
                </div>
              </div>

              {/* Image Upload */}
              {mediaType === 'image' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload Image
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                    {formData.imageUrl ? (
                      <div className="space-y-3">
                        <img
                          src={formData.imageUrl}
                          alt="Preview"
                          className="max-h-48 mx-auto rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, imageUrl: '' }))}
                          className="text-red-600 hover:text-red-700 text-sm font-semibold"
                        >
                          Remove Image
                        </button>
                      </div>
                    ) : (
                      <div>
                        <Upload className="mx-auto mb-3 text-gray-400" size={40} />
                        <label className="cursor-pointer">
                          <span className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors inline-block">
                            {uploadingImage ? 'Uploading...' : 'Choose Image'}
                          </span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            disabled={uploadingImage}
                            className="hidden"
                          />
                        </label>
                        <p className="text-sm text-gray-500 mt-2">PNG, JPG, GIF, WEBP up to 10MB</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Video URL */}
              {mediaType === 'video' && (
                <div>
                  <label htmlFor="videoUrl" className="block text-sm font-semibold text-gray-700 mb-2">
                    YouTube Video URL
                  </label>
                  <input
                    type="url"
                    id="videoUrl"
                    name="videoUrl"
                    value={formData.videoUrl}
                    onChange={handleInputChange}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  {formData.videoUrl && (
                    <div className="mt-3">
                      <img
                        src={getYouTubeThumbnail(formData.videoUrl)}
                        alt="Video preview"
                        className="max-h-32 rounded-lg"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                  Title (Optional)
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter title"
                />
              </div>

              {/* Alt Text (for images) */}
              {mediaType === 'image' && (
                <div>
                  <label htmlFor="altText" className="block text-sm font-semibold text-gray-700 mb-2">
                    Alt Text (for accessibility)
                  </label>
                  <input
                    type="text"
                    id="altText"
                    name="altText"
                    value={formData.altText}
                    onChange={handleInputChange}
                    maxLength={125}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Describe the image"
                  />
                </div>
              )}

              {/* Status and Priority */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="status" className="block text-sm font-semibold text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="priority" className="block text-sm font-semibold text-gray-700 mb-2">
                    Priority (Order)
                  </label>
                  <input
                    type="number"
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="0 = first, 1 = second, etc."
                  />
                  <p className="text-xs text-gray-500 mt-1">Lower numbers appear first</p>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex space-x-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-xl hover:shadow-lg transition-all font-semibold"
                >
                  {editingItem ? 'Update' : 'Create'} Gallery Item
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false)
                    resetForm()
                  }}
                  className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
