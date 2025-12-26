import { useState, useEffect } from 'react';
import { Search, MapPin, Phone, Mail } from 'lucide-react';

const Branch = () => {
  const [branches, setBranches] = useState([]);
  const [filteredBranches, setFilteredBranches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [filters, setFilters] = useState({
    country: '',
    state: '',
    district: '',
    search: ''
  });

  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

  useEffect(() => {
    fetchBranches();
    fetchCountries();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [branches, filters]);

  useEffect(() => {
    if (filters.country) {
      fetchStates(filters.country);
    } else {
      setStates([]);
      setDistricts([]);
    }
  }, [filters.country]);

  useEffect(() => {
    if (filters.state) {
      fetchDistricts(filters.state, filters.country);
    } else {
      setDistricts([]);
    }
  }, [filters.state]);

  const fetchBranches = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${backendUrl}/api/branches`);
      const data = await response.json();

      if (data.success) {
        setBranches(data.data);
        setFilteredBranches(data.data);
      }
    } catch (error) {
      console.error('Error fetching branches:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCountries = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/branches/countries`);
      const data = await response.json();

      if (data.success) {
        setCountries(data.data);
      }
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  const fetchStates = async (country) => {
    try {
      const response = await fetch(`${backendUrl}/api/branches/states?country=${encodeURIComponent(country)}`);
      const data = await response.json();

      if (data.success) {
        setStates(data.data);
      }
    } catch (error) {
      console.error('Error fetching states:', error);
    }
  };

  const fetchDistricts = async (state, country) => {
    try {
      const url = `${backendUrl}/api/branches/districts?state=${encodeURIComponent(state)}&country=${encodeURIComponent(country)}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.success) {
        setDistricts(data.data);
      }
    } catch (error) {
      console.error('Error fetching districts:', error);
    }
  };

  const applyFilters = () => {
    let filtered = [...branches];

    if (filters.country) {
      filtered = filtered.filter(branch =>
        branch.country.toLowerCase() === filters.country.toLowerCase()
      );
    }

    if (filters.state) {
      filtered = filtered.filter(branch =>
        branch.state && branch.state.toLowerCase() === filters.state.toLowerCase()
      );
    }

    if (filters.district) {
      filtered = filtered.filter(branch =>
        branch.district && branch.district.toLowerCase() === filters.district.toLowerCase()
      );
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(branch =>
        branch.country.toLowerCase().includes(searchLower) ||
        (branch.state && branch.state.toLowerCase().includes(searchLower)) ||
        (branch.district && branch.district.toLowerCase().includes(searchLower)) ||
        branch.fullAddress.toLowerCase().includes(searchLower) ||
        branch.mobileNumber.includes(searchLower) ||
        (branch.email && branch.email.toLowerCase().includes(searchLower))
      );
    }

    setFilteredBranches(filtered);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'country') {
      setFilters(prev => ({
        ...prev,
        state: '',
        district: ''
      }));
    } else if (name === 'state') {
      setFilters(prev => ({
        ...prev,
        district: ''
      }));
    }
  };

  const resetFilters = () => {
    setFilters({
      country: '',
      state: '',
      district: '',
      search: ''
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading branches...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8 text-gray-800">Our Branches</h1>

        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-8">
          <h2 className="text-base md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
            <Search className="w-4 h-4 md:w-5 md:h-5" />
            Search Branches
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-3 md:mb-4">
            <div>
              <label className="block text-xs md:text-sm font-medium mb-1">Country</label>
              <select
                name="country"
                value={filters.country}
                onChange={handleFilterChange}
                className="w-full px-2 py-1.5 md:px-3 md:py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">All Countries</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium mb-1">State</label>
              <select
                name="state"
                value={filters.state}
                onChange={handleFilterChange}
                disabled={!filters.country}
                className="w-full px-2 py-1.5 md:px-3 md:py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:bg-gray-100"
              >
                <option value="">All States</option>
                {states.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium mb-1">District</label>
              <select
                name="district"
                value={filters.district}
                onChange={handleFilterChange}
                disabled={!filters.state}
                className="w-full px-2 py-1.5 md:px-3 md:py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:bg-gray-100"
              >
                <option value="">All Districts</option>
                {districts.map((district) => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium mb-1">Search</label>
              <input
                type="text"
                name="search"
                value={filters.search}
                onChange={handleFilterChange}
                placeholder="Search by country, state, district"
                className="w-full px-2 py-1.5 md:px-3 md:py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <button
            onClick={resetFilters}
            className="text-amber-700 hover:text-amber-900 font-medium text-xs md:text-sm"
          >
            Reset Filters
          </button>
        </div>

        <div className="mb-3 md:mb-4 text-gray-600 text-xs md:text-sm">
          Showing {filteredBranches.length} of {branches.length} branches
        </div>

        {filteredBranches.length === 0 ? (
          <div className="text-center py-8 md:py-12 bg-white rounded-lg shadow">
            <p className="text-base md:text-xl text-gray-500">No branches found matching your criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredBranches.map((branch) => (
              <div
                key={branch._id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 md:p-6"
              >
                <div className="flex items-start gap-2 mb-2 md:mb-3">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-amber-700 mt-0.5 md:mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-sm md:text-lg text-gray-800">
                      {branch.district ? `${branch.district}, ` : ''}
                      {branch.state ? `${branch.state}, ` : ''}
                      {branch.country}
                    </h3>
                  </div>
                </div>

                <div className="space-y-1 md:space-y-2 mb-3 md:mb-4">
                  <p className="text-gray-600 text-xs md:text-sm">{branch.fullAddress}</p>
                </div>

                <div className="border-t pt-3 md:pt-4 space-y-1.5 md:space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-700" />
                    <a
                      href={`tel:${branch.mobileNumber}`}
                      className="text-gray-700 hover:text-amber-700 text-xs md:text-sm"
                    >
                      {branch.mobileNumber}
                    </a>
                  </div>

                  {branch.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-700" />
                      <a
                        href={`mailto:${branch.email}`}
                        className="text-gray-700 hover:text-amber-700 break-all text-xs md:text-sm"
                      >
                        {branch.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Branch;
