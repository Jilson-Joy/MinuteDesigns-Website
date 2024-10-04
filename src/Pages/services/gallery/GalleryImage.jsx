import React, { useEffect, useState } from 'react';
import { GetAllGalleryImageApi } from "../../../api/frontendApis/galleryApi";
import './GalleryImage.css';

function GalleryImage() {
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

  // Filter galleries to only include those with an imageUrl
  const filteredGalleries = galleries.filter(gallery => gallery.imageUrl);

  return (
    <div className='row gallery '>
      {filteredGalleries.length > 0 ? (
        filteredGalleries.map((gallery, idx) => (
          <div key={idx} className="element-item col-12 col-sm-6 col-md-4 col-lg-3 p-2">
            <img
              src={`${baseUrl}${gallery.imageUrl}`}
              alt={`Gallery Image ${idx + 1}`}
              className="gallery-image"
            />
          </div>
        ))
      ) : (
        <div>No galleries available</div>
      )}
    </div>
  );
}

export default GalleryImage;
