import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import Card from 'react-bootstrap/Card';
import { listAllPortfolio } from '../../api/frontendApis/pagesApi';

function Portfolio() {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const data = await listAllPortfolio();
                console.log("Fetched portfolio:", data);
                if (data && Array.isArray(data.portfolio)) {
                    setPortfolio(data.portfolio);
                } else {
                    setPortfolio([]);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchPortfolio();
    }, []);

    return (
        <div className="container">
            <section className="portfolio mt-5">
                <div>
                    <h1>Works</h1>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    {portfolio.length > 0 ? (
                        portfolio.map((item) => (
                            <div key={item._id} className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                                <div className="portfolio_card">
                                    <Card.Body>
                                        <Card.Title className="portfolio_card_header">{item.title}</Card.Title>
                                        <Card.Img
                                            variant="top"
                                            src={`${API_BASE_URL}${item.imageUrl}`}
                                            className="portfolio_card_img"
                                        />
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
