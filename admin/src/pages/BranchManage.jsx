import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const BranchManage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    country: '',
    state: '',
    district: '',
    city: '',
    mobileNumber: '',
    email: '',
    fullAddress: '',
    status: 'active',
    head1Name: '',
    head1Designation: '',
    head1Mobile: '',
    head2Name: '',
    head2Designation: '',
    head2Mobile: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

  useEffect(() => {
    fetchBranches();

    const action = searchParams.get('action');
    const id = searchParams.get('id');

    if (action === 'new') {
      handleNew();
    } else if (action === 'edit' && id) {
      handleEdit(id);
    }
  }, [searchParams]);

  const fetchBranches = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${backendUrl}/api/admin/branches`);
      const data = await response.json();

      if (data.success) {
        setBranches(data.data);
      }
    } catch (error) {
      console.error('Error fetching branches:', error);
      alert('Failed to fetch branches');
    } finally {
      setLoading(false);
    }
  };

  const handleNew = () => {
    setFormData({
      country: '',
      state: '',
      district: '',
      city: '',
      mobileNumber: '',
      email: '',
      fullAddress: '',
      status: 'active',
      head1Name: '',
      head1Designation: '',
      head1Mobile: '',
      head2Name: '',
      head2Designation: '',
      head2Mobile: ''
    });
    setEditingId(null);
    setShowModal(true);
  };

  const handleEdit = async (id) => {
    try {
      const response = await fetch(`${backendUrl}/api/admin/branches/${id}`);
      const data = await response.json();

      if (data.success) {
        setFormData({
          country: data.data.country || '',
          state: data.data.state || '',
          district: data.data.district || '',
          city: data.data.city || '',
          mobileNumber: data.data.mobileNumber || '',
          email: data.data.email || '',
          fullAddress: data.data.fullAddress || '',
          status: data.data.status || 'active',
          head1Name: data.data.head1Name || '',
          head1Designation: data.data.head1Designation || '',
          head1Mobile: data.data.head1Mobile || '',
          head2Name: data.data.head2Name || '',
          head2Designation: data.data.head2Designation || '',
          head2Mobile: data.data.head2Mobile || ''
        });
        setEditingId(id);
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error fetching branch:', error);
      alert('Failed to fetch branch details');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.country || !formData.mobileNumber || !formData.fullAddress) {
      alert('Please fill in all required fields (Country, Mobile Number, Full Address)');
      return;
    }

    try {
      const url = editingId
        ? `${backendUrl}/api/admin/branches/${editingId}`
        : `${backendUrl}/api/admin/branches`;

      const method = editingId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert(editingId ? 'Branch updated successfully' : 'Branch created successfully');
        setShowModal(false);
        setSearchParams({});
        fetchBranches();
      } else {
        alert(data.message || 'Failed to save branch');
      }
    } catch (error) {
      console.error('Error saving branch:', error);
      alert('Failed to save branch');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this branch?')) {
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/admin/branches/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        alert('Branch deleted successfully');
        fetchBranches();
      } else {
        alert(data.message || 'Failed to delete branch');
      }
    } catch (error) {
      console.error('Error deleting branch:', error);
      alert('Failed to delete branch');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const closeModal = () => {
    setShowModal(false);
    setSearchParams({});
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading branches...</div>
      </div>
    );
  }

  return (
    <div className="px-3 py-3 md:p-4 lg:p-6">
      <div className="flex items-center justify-between gap-2 mb-4 md:mb-6 mt-2">
        <h1 className="text-base md:text-xl lg:text-2xl font-bold text-gray-800">Branch Management</h1>
        <button
          onClick={() => setSearchParams({ action: 'new' })}
          className="bg-gradient-to-r from-amber-900 to-orange-700 text-white px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-base rounded-lg hover:from-amber-800 hover:to-orange-600 transition-all whitespace-nowrap flex-shrink-0"
        >
          Add New Branch
        </button>
      </div>

      {branches.length === 0 ? (
        <div className="text-center py-8 md:py-12">
          <p className="text-lg md:text-xl text-gray-500 mb-4">No branches yet</p>
          <button
            onClick={() => setSearchParams({ action: 'new' })}
            className="bg-gradient-to-r from-amber-900 to-orange-700 text-white px-4 md:px-6 py-2 text-sm md:text-base rounded-lg hover:from-amber-800 hover:to-orange-600 transition-all"
          >
            Create Your First Branch
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto -mx-3 md:mx-0">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
            <thead className="bg-gradient-to-r from-amber-900 to-orange-700 text-white">
              <tr>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm">Country</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm">State</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm">District</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm">Mobile</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm hidden lg:table-cell">Email</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm hidden xl:table-cell">Address</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm">Status</th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-center text-xs md:text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {branches.map((branch) => (
                <tr key={branch._id} className="border-b hover:bg-gray-50">
                  <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm">{branch.country}</td>
                  <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm">{branch.state || '-'}</td>
                  <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm">{branch.district || '-'}</td>
                  <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm">{branch.mobileNumber}</td>
                  <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm hidden lg:table-cell">{branch.email || '-'}</td>
                  <td className="px-2 md:px-4 py-2 md:py-3 text-xs md:text-sm max-w-xs truncate hidden xl:table-cell" title={branch.fullAddress}>
                    {branch.fullAddress}
                  </td>
                  <td className="px-2 md:px-4 py-2 md:py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      branch.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {branch.status}
                    </span>
                  </td>
                  <td className="px-2 md:px-4 py-2 md:py-3 text-center">
                    <button
                      onClick={() => setSearchParams({ action: 'edit', id: branch._id })}
                      className="text-blue-600 hover:text-blue-800 mr-2 text-xs md:text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(branch._id)}
                      className="text-red-600 hover:text-red-800 text-xs md:text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 md:p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              {editingId ? 'Edit Branch' : 'Add New Branch'}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    State <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    District <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">
                    City <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">
                    Full Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="fullAddress"
                    value={formData.fullAddress}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                <div className="md:col-span-2 mt-4">
                  <h3 className="text-lg font-semibold border-b pb-2 mb-4">Head 1 Details (Optional)</h3>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Head 1 Name</label>
                  <input type="text" name="head1Name" value={formData.head1Name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Head 1 Designation</label>
                  <input type="text" name="head1Designation" value={formData.head1Designation} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Head 1 Mobile</label>
                  <input type="tel" name="head1Mobile" value={formData.head1Mobile} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>

                <div className="md:col-span-2 mt-4">
                  <h3 className="text-lg font-semibold border-b pb-2 mb-4">Head 2 Details (Optional)</h3>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Head 2 Name</label>
                  <input type="text" name="head2Name" value={formData.head2Name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Head 2 Designation</label>
                  <input type="text" name="head2Designation" value={formData.head2Designation} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Head 2 Mobile</label>
                  <input type="tel" name="head2Mobile" value={formData.head2Mobile} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>

              </div>

              <div className="flex justify-end gap-2 md:gap-3 mt-4 md:mt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 md:px-6 py-2 text-sm md:text-base border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 md:px-6 py-2 text-sm md:text-base bg-gradient-to-r from-amber-900 to-orange-700 text-white rounded-lg hover:from-amber-800 hover:to-orange-600"
                >
                  {editingId ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BranchManage;
