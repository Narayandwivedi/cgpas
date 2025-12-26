import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './component/Sidebar'
import Dashboard from './pages/Dashboard'
import Gallery from './pages/Gallery'
import BlogManage from './pages/BlogManage'
import NewsManage from './pages/NewsManage'
import ExecutiveBody from './pages/ExecutiveBody'
import BranchManage from './pages/BranchManage'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        {/* Main Content */}
        <div className="flex-1 lg:ml-64">
          {/* Header */}
          <header className="bg-white shadow-sm sticky top-0 z-30">
            <div className="flex items-center justify-between px-1 md:px-4 lg:px-6 py-1.5 md:py-3 lg:py-4 relative">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-gray-600 hover:text-gray-900 p-1 md:p-2 hover:bg-gray-100 rounded-lg transition-colors z-10"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:flex-none">
                <h2 className="text-sm md:text-lg lg:text-xl font-bold text-gray-800 whitespace-nowrap">
                  CGPAS Admin Panel
                </h2>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blogs" element={<BlogManage />} />
              <Route path="/news" element={<NewsManage />} />
              <Route path="/executive-body" element={<ExecutiveBody />} />
              <Route path="/branches" element={<BranchManage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
