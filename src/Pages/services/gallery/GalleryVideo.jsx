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

  return (
   <>
        <div className=' row d-flex'>
          {galleries.length > 0 ? (
            galleries.map((gallery, idx) => (
              <div key={idx} className="element-item col-md-3 video p-2">
                {gallery.videoUrl ? (
                  <iframe 
                    src={`${baseUrl}${gallery.videoUrl}`} 
                    title={`Gallery Video ${idx + 1}`} 
                    width="300" 
                    height="300" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                ) : (
                  "No video available"
                )}
              </div>
            ))
          ) : (
            <div>No galleries available</div>
          )}
        </div>
   </>
  );
}

export default GalleryVideo;
