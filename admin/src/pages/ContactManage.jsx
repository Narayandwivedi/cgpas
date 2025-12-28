import React, { useState, useEffect } from 'react';

const ContactManage = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
    const API_URL = `${BACKEND_URL}/api`;

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_URL}/admin/contacts`);
            const data = await response.json();
            setContacts(data);
        } catch (error) {
            console.error('Error fetching contacts:', error);
            alert('Failed to fetch contacts');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="px-3 py-3 md:p-4 lg:p-6">
            <div className="flex items-center justify-between gap-2 mb-4 md:mb-6 mt-2">
                <h1 className="text-base md:text-xl lg:text-2xl font-bold text-gray-800">Contact Messages</h1>
            </div>

            {loading ? (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                    <div className="text-4xl mb-4">⏳</div>
                    <p className="text-gray-600">Loading contacts...</p>
                </div>
            ) : contacts.length === 0 ? (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                    <div className="text-6xl mb-4">📨</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No messages yet</h3>
                    <p className="text-gray-600 mb-6">When users send messages through the contact form, they will appear here.</p>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {contacts.map((contact) => (
                                <tr key={contact._id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(contact.createdAt).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.email || '-'}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.mobile}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.subject || '-'}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{contact.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ContactManage;
