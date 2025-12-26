import React, { useState, useEffect } from 'react'
import { X, Upload, Trash2, Edit, Plus, Users } from 'lucide-react'

const ExecutiveBody = () => {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingMember, setEditingMember] = useState(null)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    organization: '',
    imageUrl: '',
    status: 'published',
    priority: 0
  })

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'
  const API_URL = `${BACKEND_URL}/api`
  const BASE_URL = BACKEND_URL

  useEffect(() => {
    fetchMembers()
  }, [])

  const fetchMembers = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/admin/executive-body`)
      const data = await response.json()
      if (data.success) {
        setMembers(data.members)
      }
    } catch (error) {
      console.error('Error fetching executive body members:', error)
      alert('Failed to fetch executive body members')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
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

      const response = await fetch(`${API_URL}/upload/executive`, {
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

    if (!formData.name.trim() || !formData.position.trim() || !formData.organization.trim() || !formData.imageUrl) {
      alert('Name, position, organization, and image are required')
      return
    }

    try {
      const url = editingMember
        ? `${API_URL}/admin/executive-body/${editingMember._id}`
        : `${API_URL}/admin/executive-body`

      const method = editingMember ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.success) {
        alert(editingMember ? 'Member updated successfully!' : 'Member added successfully!')
        resetForm()
        setShowModal(false)
        fetchMembers()
      } else {
        alert(data.message || 'Failed to save member')
      }
    } catch (error) {
      console.error('Error saving member:', error)
      alert('Failed to save member')
    }
  }

  const handleEdit = (member) => {
    setEditingMember(member)
    setFormData({
      name: member.name,
      position: member.position,
      organization: member.organization,
      imageUrl: member.imageUrl,
      status: member.status,
      priority: member.priority || 0
    })
    setShowModal(true)
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this member?')) return

    try {
      const response = await fetch(`${API_URL}/admin/executive-body/${id}`, {
        method: 'DELETE'
      })

      const data = await response.json()

      if (data.success) {
        alert('Member deleted successfully!')
        fetchMembers()
      } else {
        alert(data.message || 'Failed to delete member')
      }
    } catch (error) {
      console.error('Error deleting member:', error)
      alert('Failed to delete member')
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      position: '',
      organization: '',
      imageUrl: '',
      status: 'published',
      priority: 0
    })
    setEditingMember(null)
  }

  return (
    <div className="px-3 py-3 md:p-4 lg:p-6">
      <div className="flex items-center justify-between gap-2 mb-4 md:mb-6 mt-2">
        <h1 className="text-base md:text-xl lg:text-2xl font-bold text-gray-800">Executive Body</h1>
        <button
          onClick={() => {
            resetForm()
            setShowModal(true)
          }}
          className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 md:px-6 py-1.5 md:py-3 text-xs md:text-base rounded-lg md:rounded-xl hover:shadow-lg transition-all flex items-center space-x-1.5 md:space-x-2 whitespace-nowrap flex-shrink-0"
        >
          <Plus size={16} className="md:w-5 md:h-5" />
          <span className="font-semibold">Add Member</span>
        </button>
      </div>

      {loading ? (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-gray-600">Loading members...</p>
        </div>
      ) : members.length === 0 ? (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <div className="text-6xl mb-4"><Users size={64} className="mx-auto text-gray-400" /></div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No members yet</h3>
          <p className="text-gray-600 mb-6">Start by adding your first executive body member</p>
          <button
            onClick={() => {
              resetForm()
              setShowModal(true)
            }}
            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-xl hover:shadow-lg transition-all"
          >
            Add Member
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6">
          {members.map((member) => (
            <div key={member._id} className="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative aspect-square bg-gray-200">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-2 md:p-4">
                <h3 className="text-xs md:text-base font-semibold text-gray-800 mb-0.5 md:mb-1 line-clamp-1">{member.name}</h3>
                <p className="text-xs md:text-sm text-purple-600 font-medium mb-0.5 md:mb-1 line-clamp-1">{member.position}</p>
                <p className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2 line-clamp-1">{member.organization}</p>
                <div className="flex items-center justify-between mt-2 md:mt-3">
                  <div className="flex gap-1 md:gap-2">
                    <span className={`text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded ${
                      member.status === 'published'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      <span className="hidden md:inline">{member.status}</span>
                      <span className="md:hidden">{member.status === 'published' ? '✓' : '•'}</span>
                    </span>
                    <span className="text-xs px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-purple-100 text-purple-700" title="Priority Order">
                      #{member.priority || 0}
                    </span>
                  </div>
                  <div className="flex space-x-1 md:space-x-2">
                    <button
                      onClick={() => handleEdit(member)}
                      className="p-1.5 md:p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Edit size={16} className="md:w-[18px] md:h-[18px]" />
                    </button>
                    <button
                      onClick={() => handleDelete(member._id)}
                      className="p-1.5 md:p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={16} className="md:w-[18px] md:h-[18px]" />
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
                {editingMember ? 'Edit Member' : 'Add New Member'}
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
              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Photo *
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
                          {uploadingImage ? 'Uploading...' : 'Choose Photo'}
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

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter name"
                />
              </div>

              {/* Position */}
              <div>
                <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
                  Position *
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., CEO, Director, Manager"
                />
              </div>

              {/* Organization */}
              <div>
                <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                  Organization *
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter organization name"
                />
              </div>

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
                  {editingMember ? 'Update' : 'Add'} Member
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

export default ExecutiveBody
