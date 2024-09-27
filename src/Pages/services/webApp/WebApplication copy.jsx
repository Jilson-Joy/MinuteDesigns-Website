import React, { useEffect, useState } from "react";
import "./WebApplication.css";
import { useParams, useLocation } from "react-router-dom";
import { getServiceByUrl } from "../../../api/frontendApis/servicesApi";

function WebApplication() {
  const { id } = useParams(); // Get the dynamic id from URL params
  const location = useLocation();

  const [service, setService] = useState({});
  const [pageContent, setPageContent] = useState("");

  useEffect(() => {
    const fetchService = async () => {
      try {
        console.log("Location:", location);

        // Call the API with the ID from the URL
        const serviceData = await getServiceByUrl(id); // Use the dynamic id from URL
        const data = serviceData.service;
        setService(data);

        console.log("Data fetched:", data);

        if (data.status === true){
          setPageContent(data.content); // Set dynamic content if status is active
        } else {
          setPageContent("Content will be updated soon"); // Show fallback message
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setPageContent("Error fetching content");
      }
    };

    if (id) {
      fetchService();
    }
  }, [id, location]); // Trigger useEffect when id or location changes

  return (
    <div className="webApplication_container">

      {pageContent ? (
        <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      ) : (
        <div>Content will be updated soon...</div>
      )}
    </div>
  );
}

export default WebApplication;
