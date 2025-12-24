import React from 'react'

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to your admin panel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Total Blogs</p>
              <h3 className="text-3xl font-bold mt-2">0</h3>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <span className="text-3xl">📝</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-medium">Gallery Items</p>
              <h3 className="text-3xl font-bold mt-2">0</h3>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <span className="text-3xl">🖼️</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">Published</p>
              <h3 className="text-3xl font-bold mt-2">0</h3>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <span className="text-3xl">✅</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="/blogs?action=new"
            className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all cursor-pointer group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-200 transition-colors">
                <span className="text-2xl">➕</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">Create New Blog</h3>
                <p className="text-sm text-gray-600">Write a new blog post</p>
              </div>
            </div>
          </a>

          <a
            href="/gallery?action=new"
            className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all cursor-pointer group"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                <span className="text-2xl">📷</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">Add to Gallery</h3>
                <p className="text-sm text-gray-600">Upload new images</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
