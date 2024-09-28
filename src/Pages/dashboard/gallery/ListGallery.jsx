import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GetGalleryById, EditGalleryApi } from "../../../api/gallery";
import { GetAllCategories } from "../../../api/category";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowLeft } from "react-icons/fa";

const EditGallery = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        categoryName: "",
        type: "",
        videoUrl: "",
    });
    const [files, setFiles] = useState([]);
    const [existingFiles, setExistingFiles] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [loading, setLoading] = useState(true);
    const [filesToRemove, setFilesToRemove] = useState([]);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const result = await GetGalleryById(id);
                if (result.success) {
                    setFormData({
                        categoryName: result.gallery.categoryName,
                        type: result.gallery.type,
                        videoUrl: result.gallery.videoUrl,
                    });
                    setExistingFiles(result.gallery.images || []);
                } else {
                    toast.error("Failed to load gallery data.");
                }
            } catch (error) {
                console.error("Error fetching gallery details:", error);
                toast.error("Failed to load gallery.");
            } finally {
                setLoading(false);
            }
        };

        const fetchCategories = async () => {
            try {
                const result = await GetAllCategories();
                if (result.success) {
                    setCategories(result.categories);
                } else {
                    toast.error("Failed to load categories.");
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
                toast.error("Failed to load categories.");
            } finally {
                setLoadingCategories(false);
            }
        };

        fetchGallery();
        fetchCategories();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFiles(Array.from(e.target.files));
        }
    };

    const handleRemoveFile = (file) => {
        setFilesToRemove([...filesToRemove, file]);
        setExistingFiles(existingFiles.filter((f) => f !== file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        
        formDataToSend.append("categoryName", formData.categoryName);
        formDataToSend.append("type", formData.type);
        formDataToSend.append("videoUrl", formData.videoUrl);

        files.forEach((file) => {
            formDataToSend.append("files", file);
        });

        // Convert filesToRemove to a JSON string before sending
        formDataToSend.append("filesToRemove", JSON.stringify(filesToRemove));

        try {
            await EditGalleryApi(id, formDataToSend);
            toast.success("Gallery updated successfully!");
            navigate("/mainDashboard/listGallery");
        } catch (error) {
            toast.error("Failed to update gallery.");
            console.error("Error updating gallery:", error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Edit Gallery</h1>
            <form onSubmit={handleSubmit}>
                {/* Form fields for categoryName, type, and videoUrl */}
                
                <button type="submit">Update Gallery</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default EditGallery;