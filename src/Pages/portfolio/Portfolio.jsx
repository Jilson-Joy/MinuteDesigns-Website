import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import Card from 'react-bootstrap/Card';
import { GetAllPortfolios } from "../../api/frontendApis/portfolioApi";

function Portfolio() {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const [portfolios, setPortfolios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const result = await GetAllPortfolios();
                console.log("Fetched portfolios:", result); // Log the fetched data for debugging
                setPortfolios(result.portfolios);
            } catch (error) {
                console.error("Error fetching portfolios:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolios();
    }, []);

    return (
        <div className="container">
            <section className="portfolio mt-5">
                <div>
                    <h1>Works</h1>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    {loading ? ( // Show loading message while fetching
                        <p>Loading portfolios...</p>
                    ) : portfolios.length > 0 ? (
                        portfolios.map((item) => (
                            <div key={item._id} className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                                <div className="portfolio_card">
                                    <Card.Body>
                                        <Card.Title className="portfolio_card_header">{item.title}</Card.Title>
                                        {item.imageUrl ? (
                                            <img
                                                src={`${baseUrl}${item.imageUrl}`} // Use the API base URL to display the image
                                                alt="Uploaded"
                                                style={{ width: "300px" }}
                                            />
                                        ) : (
                                            <p>No uploaded files available.</p>
                                        )}
                                        <Card.Text className="portfolio_card_text">
                                            {item.description}
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No Portfolios available</p>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Portfolio;
