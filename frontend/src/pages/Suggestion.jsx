import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';
import { toast } from 'react-toastify';

const Suggestion = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
    const API_URL = `${BACKEND_URL}/api`;

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        message: '',
        image: '',
    });

    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        const uploadFormData = new FormData();
        uploadFormData.append('image', file);

        try {
            const response = await fetch(`${API_URL}/upload/suggestion`, {
                method: 'POST',
                body: uploadFormData,
            });

            const data = await response.json();

            if (response.ok) {
                setFormData({ ...formData, image: data.data.url });
                toast.success('Image uploaded successfully!');
            } else {
                toast.error(data.message || 'Failed to upload image.');
            }
        } catch (err) {
            toast.error('An error occurred while uploading the image.');
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.mobile || !formData.message) {
            toast.error('Please fill in all required fields.');
            return;
        }
        setLoading(true);

        try {
            const response = await fetch(`${API_URL}/suggestions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setFormData({
                    fullName: '',
                    email: '',
                    mobile: '',
                    message: '',
                    image: '',
                });
                toast.success('Your suggestion has been sent successfully!');
            } else {
                toast.error(data.message || 'Failed to send suggestion.');
            }
        } catch (err) {
            toast.error('An error occurred while sending your suggestion.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Submit a Suggestion
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                                Mobile Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                placeholder="Enter your mobile number"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Suggestion <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                                placeholder="Write your suggestion here"
                            ></textarea>
                        </div>

                        <div>
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                                Attach an Image (Optional)
                            </label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                onChange={handleFileChange}
                                accept="image/*"
                                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                            />
                            {uploading && <p className="text-sm text-gray-500 mt-2">Uploading image...</p>}
                            {formData.image && !uploading && (
                                <div className="mt-4">
                                    <img src={`${BACKEND_URL}${formData.image}`} alt="Preview" className="h-20 w-20 object-cover rounded-md" />
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={loading || uploading}
                            className="w-full bg-orange-600 text-white py-3 px-6 text-base rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 shadow-md hover:shadow-lg disabled:bg-gray-400"
                        >
                            {loading ? 'Submitting...' : 'Submit Suggestion'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Suggestion;
