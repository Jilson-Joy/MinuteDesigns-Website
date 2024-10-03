import React, { useEffect, useState } from 'react';
import { GetAllGalleryImageApi } from "../../../api/frontendApis/galleryApi";

function GalleryImage() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state added

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

  // Filter galleries to include only those with valid imageUrl
  const filteredGalleries = galleries.filter(gallery => gallery.imageUrl);

  // Render only if there are valid images
  return (
    <div className='row d-flex'>
      {filteredGalleries.map((gallery, idx) => (
        <div key={idx} className="element-item col-md-3 image p-2">
          <img
            src={`${baseUrl}${gallery.imageUrl}`}
            alt={`Gallery Image ${idx + 1}`}
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      ))}
    </div>
  );
}

export default GalleryImage;
