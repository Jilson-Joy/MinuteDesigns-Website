import React, { useEffect, useState } from 'react';
import { GetAllGalleryImageApi } from "../../../api/frontendApis/galleryApi";

function GalleryVideo() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch galleries from the API
  const fetchGalleries = async () => {
    try {
      const result = await GetAllGalleryImageApi();
      setGalleries(result.galleries);
    } catch (error) {
      console.error("Error fetching galleries:", error);
      toast.error("Failed to load galleries.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleries();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Filter galleries to only include those with a videoUrl
  const filteredGalleries = galleries.filter(gallery => gallery.videoUrl);

  return (
    <div className='row gallery '>
      {filteredGalleries.length > 0 ? (
        filteredGalleries.map((gallery, idx) => (
          <div key={idx} className="element-item col-12 col-sm-6 col-md-4 col-lg-3 p-2">
            <div className="video-wrapper">
              <iframe 
                src={`${baseUrl}${gallery.videoUrl}`} 
                title={`Gallery Video ${idx + 1}`} 
                className="gallery-video"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))
      ) : (
        <div>No galleries available</div>
      )}
    </div>
  );
}

export default GalleryVideo;
