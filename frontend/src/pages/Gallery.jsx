import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BACKEND_URL}/api/gallery?status=published`);
      const data = await response.json();

      if (data.success) {
        setGalleryItems(data.gallery);
      }
    } catch (error) {
      console.error('Error fetching gallery:', error);
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    if (imagePath.startsWith('http')) return imagePath;
    return `${BACKEND_URL}${imagePath}`;
  };

  const extractYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const getYouTubeThumbnail = (url) => {
    const videoId = extractYouTubeId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
  };

  // Separate images and videos
  const images = galleryItems.filter(item => item.mediaType === 'image');
  const videos = galleryItems.filter(item => item.mediaType === 'video');
  const featuredVideo = videos.length > 0 ? videos[0] : null;
  const otherVideos = videos.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Gallery Sections */}
      <div className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          </div>
        ) : galleryItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-400 text-6xl mb-4">📁</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No items found</h3>
            <p className="text-gray-500">Check back later for more content.</p>
          </div>
        ) : (
          <>
            {/* Images Section */}
            {images.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Images</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {images.map((item) => (
                    <div
                      key={item._id}
                      className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      {/* Media Container */}
                      <div className="relative aspect-video bg-gray-200 overflow-hidden">
                        <img
                          src={getImageUrl(item.imageUrl)}
                          alt={item.altText || item.title}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Item Info */}
                      {item.title && (
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                            {item.title}
                          </h3>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Videos Section */}
            {videos.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Videos</h2>

                {/* Featured Video (Full Width) */}
                {featuredVideo && (
                  <div className="mb-6 bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative w-full" style={{ height: '500px' }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${extractYouTubeId(featuredVideo.videoUrl)}`}
                        title={featuredVideo.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                    {featuredVideo.title && (
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {featuredVideo.title}
                        </h3>
                      </div>
                    )}
                  </div>
                )}

                {/* Other Videos Grid (4 columns) */}
                {otherVideos.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {otherVideos.map((item) => (
                      <div
                        key={item._id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                      >
                        <div className="relative" style={{ height: '200px' }}>
                          <iframe
                            src={`https://www.youtube.com/embed/${extractYouTubeId(item.videoUrl)}`}
                            title={item.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        </div>
                        {item.title && (
                          <div className="p-3">
                            <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-1">
                              {item.title}
                            </h3>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;
