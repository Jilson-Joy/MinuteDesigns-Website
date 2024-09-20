import React from 'react'
import './Portfolio.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Portfolio() {
    return (
        <div className='container'>

            <section className='portfolio  mt-5'>
                <div>
                    <h1>Works</h1>
                </div>
                <dev className=' row d-flex justify-content-center align-items-center'>
                    <div className='col-md-6 d-flex justify-content-center align-items-center flex-column'>
                        <div  className='portfolio_card'>
                            <Card.Body>
                                <Card.Title className='portfolio_card_header'>Starbucks</Card.Title>
                                <Card.Img variant="top" src="https://i.pinimg.com/564x/06/d7/16/06d716a7723f18cc0351a47177fd78be.jpg" className='portfolio_card_img' />
                                <Card.Text className='portfolio_card_text'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </div>
                    </div>
                    <div className='col-md-6 d-flex justify-content-center align-items-center flex-column'>
                        <div  className='portfolio_card'>
                            <Card.Body>
                                <Card.Title className='portfolio_card_header'>Starbucks</Card.Title>
                                <Card.Img variant="top" src="https://i.pinimg.com/564x/06/d7/16/06d716a7723f18cc0351a47177fd78be.jpg" className='portfolio_card_img' />
                                <Card.Text className='portfolio_card_text'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </div>
                    </div>
                </dev>
            </section>
        </div>
    )
}

export default Portfolio