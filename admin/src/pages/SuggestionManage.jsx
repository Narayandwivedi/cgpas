import React, { useState, useEffect } from 'react';

const SuggestionManage = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(true);

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
    const API_URL = `${BACKEND_URL}/api`;
    const BASE_URL = BACKEND_URL;

    useEffect(() => {
        fetchSuggestions();
    }, []);

    const fetchSuggestions = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_URL}/admin/suggestions`);
            const data = await response.json();
            setSuggestions(data);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
            alert('Failed to fetch suggestions');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="px-3 py-3 md:p-4 lg:p-6">
            <div className="flex items-center justify-between gap-2 mb-4 md:mb-6 mt-2">
                <h1 className="text-base md:text-xl lg:text-2xl font-bold text-gray-800">Suggestion Messages</h1>
            </div>

            {loading ? (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                    <div className="text-4xl mb-4">⏳</div>
                    <p className="text-gray-600">Loading suggestions...</p>
                </div>
            ) : suggestions.length === 0 ? (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                    <div className="text-6xl mb-4">📨</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No suggestions yet</h3>
                    <p className="text-gray-600 mb-6">When users send suggestions, they will appear here.</p>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {suggestions.map((suggestion) => (
                                <tr key={suggestion._id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(suggestion.createdAt).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{suggestion.fullName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{suggestion.email || '-'}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{suggestion.mobile}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{suggestion.message}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {suggestion.image ? (
                                            <a href={`${BASE_URL}${suggestion.image}`} target="_blank" rel="noopener noreferrer">
                                                <img src={`${BASE_URL}${suggestion.image}`} alt="Suggestion" className="h-10 w-10 object-cover rounded-md" />
                                            </a>
                                        ) : (
                                            '-'
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default SuggestionManage;
