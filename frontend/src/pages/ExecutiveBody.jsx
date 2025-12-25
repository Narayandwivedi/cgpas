import React, { useState, useEffect } from 'react'
import { Users } from 'lucide-react'

const ExecutiveBody = () => {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'
  const API_URL = `${BACKEND_URL}/api`

  useEffect(() => {
    fetchMembers()
  }, [])

  const fetchMembers = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/executive-body`)
      const data = await response.json()

      if (data.success) {
        setMembers(data.members)
      }
    } catch (error) {
      console.error('Error fetching executive body members:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-50 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="text-4xl mb-4">⏳</div>
            <p className="text-gray-600">Loading executive body members...</p>
          </div>
        </div>
      </div>
    )
  }

  if (members.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-50 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">
              <Users size={64} className="mx-auto text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No members yet</h3>
            <p className="text-gray-600">Executive body members will appear here</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Executive Body
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Meet our leadership team driving excellence and innovation
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
          {members.map((member) => (
            <div
              key={member._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all"
            >
              {/* Member Photo */}
              <div className="relative aspect-square bg-gray-200">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Member Info */}
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-1">
                  {member.name}
                </h3>
                <p className="text-sm text-purple-600 font-medium">
                  {member.position}, {member.organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExecutiveBody
