import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ProfilePic from '../../assets/images/profile.png';
import './CarouselBox.css';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

function CarouselBox() {
    const testimonials = [
        {
            text: 'Some quick example text to build on the card title and make up the bulk of the card’s content.',
            name: 'Jilson Joy',
            role: 'Client',
            img: ProfilePic
        },
        {
            text: 'Another example of a testimonial to showcase the carousel functionality.',
            name: 'Jane Doe',
            role: 'Customer',
            img: ProfilePic
        },
        {
            text: 'This is the third testimonial in the carousel component.',
            name: 'John Smith',
            role: 'User',
            img: ProfilePic
        },
        {
            text: 'This is a fourth testimonial to fill up the carousel.',
            name: 'Emily Clark',
            role: 'Designer',
            img: ProfilePic
        },
    ];

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='container carouselbox'>
            {/* Previous Button */}
            <button className="carousel-control-prev" onClick={() => setIndex(index === 0 ? testimonials.length / 2 - 1 : index - 1)}>
                <ChevronLeft className='icon_arrow' />
            </button>

            <Carousel activeIndex={index} onSelect={handleSelect} interval={null} controls={false}>
                {testimonials.reduce((resultArray, item, idx) => {
                    const chunkIndex = Math.floor(idx / 2);

                    if (!resultArray[chunkIndex]) {
                        resultArray[chunkIndex] = [];
                    }

                    resultArray[chunkIndex].push(item);

                    return resultArray;
                }, []).map((testimonialPair, idx) => (
                    <Carousel.Item key={idx}>
                        <div className="row">
                            {testimonialPair.map((testimonial, idx) => (
                                <div className="col-md-6 card_container" key={idx}>
                                    <Card className="card">
                                        <Card.Body>
                                            <div className="carouselbox_text">
                                                <Quote className="quote" />
                                                <div>
                                                    <Card.Text className="card_text mt-2">
                                                        {testimonial.text}
                                                    </Card.Text>
                                                </div>
                                                <div>
                                                    <img src={testimonial.img} alt={testimonial.name} className="carouselbox_img" />
                                                </div>
                                                <div>
                                                    <Card.Title>{testimonial.name}</Card.Title>
                                                </div>
                                                <div>
                                                    <p>{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            {/* Next Button */}
            <button className="carousel-control-next" onClick={() => setIndex(index === testimonials.length / 2 - 1 ? 0 : index + 1)}>
                <ChevronRight className='icon_arrow' />
            </button>
        </div>
    );
}

export default CarouselBox;
