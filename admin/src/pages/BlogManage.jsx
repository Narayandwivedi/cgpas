import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const BlogManage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingBlog, setEditingBlog] = useState(null)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [excerptManuallyEdited, setExcerptManuallyEdited] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: 'Admin',
    category: '',
    tags: '',
    featuredImage: '',
    featuredImageAlt: '',
    status: 'draft',
    metaTitle: '',
    metaDescription: ''
  })

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
  const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000'

  useEffect(() => {
    fetchBlogs()
    const action = searchParams.get('action')
    const id = searchParams.get('id')
    if (action === 'new') {
      setShowForm(true)
      resetForm()
    } else if (action === 'edit' && id) {
      fetchBlogForEdit(id)
    }
  }, [searchParams])

  const fetchBlogs = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/admin/blogs`)
      const data = await response.json()
      if (data.success) {
        setBlogs(data.blogs)
      }
    } catch (error) {
      console.error('Error fetching blogs:', error)
      alert('Failed to fetch blogs')
    } finally {
      setLoading(false)
    }
  }

  const fetchBlogForEdit = async (id) => {
    try {
      const response = await fetch(`${API_URL}/admin/blogs/${id}`)
      const data = await response.json()
      if (data.success) {
        const blog = data.blog
        setFormData({
          title: blog.title,
          excerpt: blog.excerpt,
          content: blog.content,
          author: blog.author,
          category: blog.category,
          tags: blog.tags.join(', '),
          featuredImage: blog.featuredImage || '',
          featuredImageAlt: blog.featuredImageAlt || '',
          status: blog.status,
          metaTitle: blog.metaTitle || '',
          metaDescription: blog.metaDescription || ''
        })
        setEditingBlog(blog)
        // Mark as manually edited when editing existing blog
        setExcerptManuallyEdited(true)
        setShowForm(true)
      }
    } catch (error) {
      console.error('Error fetching blog:', error)
      alert('Failed to fetch blog')
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: 'Admin',
      category: '',
      tags: '',
      featuredImage: '',
      featuredImageAlt: '',
      status: 'draft',
      metaTitle: '',
      metaDescription: ''
    })
    setEditingBlog(null)
    setExcerptManuallyEdited(false)
  }

  // Generate excerpt from content (30-40 words)
  const generateExcerpt = (text) => {
    if (!text || text.trim() === '') return ''

    // Remove extra whitespace and newlines
    const cleanText = text.replace(/\s+/g, ' ').trim()

    // Split into words
    const words = cleanText.split(' ')

    // Take first 35 words (middle of 30-40 range)
    const excerptWords = words.slice(0, 35)

    // Join and add ellipsis if there are more words
    let excerpt = excerptWords.join(' ')
    if (words.length > 35) {
      excerpt += '...'
    }

    // Limit to 200 characters (model constraint)
    if (excerpt.length > 200) {
      excerpt = excerpt.substring(0, 197) + '...'
    }

    return excerpt
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target

    // If user is editing excerpt manually, mark it as manually edited
    if (name === 'excerpt') {
      setExcerptManuallyEdited(true)
      setFormData(prev => ({ ...prev, [name]: value }))
    }
    // If user is editing content and excerpt hasn't been manually edited, auto-generate
    else if (name === 'content') {
      setFormData(prev => {
        const newData = { ...prev, content: value }
        // Auto-generate excerpt only if not manually edited
        if (!excerptManuallyEdited) {
          newData.excerpt = generateExcerpt(value)
        }
        return newData
      })
    }
    else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleGenerateExcerpt = () => {
    const generatedExcerpt = generateExcerpt(formData.content)
    setFormData(prev => ({ ...prev, excerpt: generatedExcerpt }))
    setExcerptManuallyEdited(false)
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    // Check file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a valid image file (jpeg, jpg, png, gif, webp)')
      return
    }

    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert('Image size should be less than 10MB')
      return
    }

    setUploadingImage(true)

    try {
      const formData = new FormData()
      formData.append('image', file)

      const response = await fetch(`${API_URL}/upload/blog-featured`, {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setFormData(prev => ({
          ...prev,
          featuredImage: BASE_URL + data.data.url
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

    const blogData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    }

    try {
      const url = editingBlog
        ? `${API_URL}/admin/blogs/${editingBlog._id}`
        : `${API_URL}/admin/blogs`

      const method = editingBlog ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData)
      })

      const data = await response.json()

      if (data.success) {
        alert(editingBlog ? 'Blog updated successfully!' : 'Blog created successfully!')
        setShowForm(false)
        resetForm()
        setSearchParams({})
        fetchBlogs()
      } else {
        alert(data.message || 'Failed to save blog')
      }
    } catch (error) {
      console.error('Error saving blog:', error)
      alert('Failed to save blog')
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this blog?')) return

    try {
      const response = await fetch(`${API_URL}/admin/blogs/${id}`, {
        method: 'DELETE'
      })

      const data = await response.json()

      if (data.success) {
        alert('Blog deleted successfully!')
        fetchBlogs()
      } else {
        alert(data.message || 'Failed to delete blog')
      }
    } catch (error) {
      console.error('Error deleting blog:', error)
      alert('Failed to delete blog')
    }
  }

  const handleNewBlog = () => {
    setSearchParams({ action: 'new' })
  }

  const handleEditBlog = (blog) => {
    setSearchParams({ action: 'edit', id: blog._id })
  }

  const handleCancel = () => {
    setShowForm(false)
    resetForm()
    setSearchParams({})
  }

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin text-6xl mb-4">⏳</div>
          <p className="text-gray-600">Loading blogs...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      {!showForm ? (
        <>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Blog Management</h1>
              <p className="text-gray-600 mt-2">Manage your blog posts</p>
            </div>
            <button
              onClick={handleNewBlog}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all flex items-center space-x-2"
            >
              <span className="text-xl">➕</span>
              <span className="font-semibold">New Blog</span>
            </button>
          </div>

          {blogs.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No blogs yet</h3>
              <p className="text-gray-600 mb-6">Start by creating your first blog post</p>
              <button
                onClick={handleNewBlog}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all"
              >
                Create First Blog
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {blogs.map((blog) => (
                <div key={blog._id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{blog.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          blog.status === 'published'
                            ? 'bg-green-100 text-green-700'
                            : blog.status === 'draft'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {blog.status}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{blog.excerpt}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>📁 {blog.category}</span>
                        <span>👁️ {blog.views} views</span>
                        <span>📅 {new Date(blog.createdAt).toLocaleDateString()}</span>
                      </div>
                      {blog.tags && blog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {blog.tags.map((tag, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => handleEditBlog(blog)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {editingBlog ? 'Edit Blog' : 'Create New Blog'}
            </h2>
            <p className="text-gray-600 mt-1">
              {editingBlog ? 'Update your blog post' : 'Fill in the details to create a new blog post'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter blog title"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Content *
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                  rows={12}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Write your blog content here..."
                />
              </div>

              <div className="md:col-span-2">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Excerpt * {!excerptManuallyEdited && formData.content && <span className="text-xs text-green-600 font-normal">(Auto-generated)</span>}
                  </label>
                  {formData.content && (
                    <button
                      type="button"
                      onClick={handleGenerateExcerpt}
                      className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      🔄 Regenerate from Content
                    </button>
                  )}
                </div>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  required
                  maxLength={200}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Auto-generated from content (30-40 words), or edit manually..."
                />
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-gray-500">
                    {excerptManuallyEdited ? '✏️ Manually edited' : '🤖 Auto-generated from first 30-40 words'}
                  </p>
                  <p className="text-xs text-gray-500">{formData.excerpt.length}/200</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Author *
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Author name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category *
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g., Astrology, Vastu"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="tag1, tag2, tag3"
                />
                <p className="text-xs text-gray-500 mt-1">Separate tags with commas</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Status *
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Featured Image
                </label>

                {/* Image Preview */}
                {formData.featuredImage && (
                  <div className="mb-4 relative">
                    <img
                      src={formData.featuredImage}
                      alt="Featured image preview"
                      className="w-full max-w-2xl h-64 object-cover rounded-lg border-2 border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, featuredImage: '' }))}
                      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                      title="Remove image"
                    >
                      ✕
                    </button>
                  </div>
                )}

                {/* Upload Button */}
                <div>
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      disabled={uploadingImage}
                    />
                    <div className={`inline-flex bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all items-center space-x-2 ${uploadingImage ? 'opacity-50 cursor-not-allowed' : ''}`}>
                      <span>{uploadingImage ? '⏳' : '📤'}</span>
                      <span className="font-semibold">
                        {uploadingImage ? 'Uploading...' : 'Upload Image'}
                      </span>
                    </div>
                  </label>
                  <p className="text-xs text-gray-500 mt-2">
                    Upload an image (will be optimized to WebP, 1200x630px for SEO)
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Featured Image Alt Text
                </label>
                <input
                  type="text"
                  name="featuredImageAlt"
                  value={formData.featuredImageAlt}
                  onChange={handleInputChange}
                  maxLength={125}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Describe the image"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Meta Title (SEO)
                </label>
                <input
                  type="text"
                  name="metaTitle"
                  value={formData.metaTitle}
                  onChange={handleInputChange}
                  maxLength={60}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="SEO title (max 60 chars)"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.metaTitle.length}/60</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Meta Description (SEO)
                </label>
                <textarea
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleInputChange}
                  maxLength={160}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="SEO description (max 160 chars)"
                />
                <p className="text-xs text-gray-500 mt-1">{formData.metaDescription.length}/160</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-6 border-t">
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all font-semibold"
              >
                {editingBlog ? 'Update Blog' : 'Create Blog'}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-200 text-gray-700 px-8 py-3 rounded-xl hover:bg-gray-300 transition-all font-semibold"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default BlogManage
