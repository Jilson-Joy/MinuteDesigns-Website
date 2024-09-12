import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is imported

function Addpage() {
    const [image, setImage] = useState(null);
    const [text, setText] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleClear = () => {
        setText("");
        setImage(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        alert(`Submitted Text: ${text}`);
        // Optionally, clear the form after submission
        handleClear();
    };

    return (
        <div className='container'>
            <div className='d-flex flex-column justify-content-start align-items-start '>
                <div className='row mt-5 '>
                    <h4>Add Page</h4>
                </div>
                <div className=' row p-4 border rounded mt-2'>
                    <form onSubmit={handleSubmit}>
                        <div className=" form-group mb-3">
                            <label htmlFor="inputText">Enter Text:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputText"
                                placeholder="Type something..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </div>
                        <div className=" form-group mb-3">
                            <label htmlFor="inputImage">Upload an Image:</label>
                            <input
                                type="file"
                                className="form-control"
                                id="inputImage"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="button" className="btn btn-danger" onClick={handleClear}>Clear</button>
                        </div>
                    </form>
                    {image && (
                        <div className="mt-3">
                            <img src={image} alt="Uploaded" className="img-fluid" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Addpage;
