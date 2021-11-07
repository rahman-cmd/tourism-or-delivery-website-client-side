import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="m-5">
            <Container>
                <Row>
                    <Col>
                        <h2>We’re Solo Agency</h2>
                        <p>Each tour is handcrafted by our team after months (sometimes years!) of in-country research. We carefully select each activity, transportation, accommodation, and included meal option to ensure a consistent level of quality on each tour</p>
                        <p>Accommodation makes or breaks a trip! You have access to a hotel pool or a beach nearby most days on tour. Most nights, you share a room with just one other group member. The select dorm-style options included are ultra-comfy, extra clean, and uber-unique.</p>
                    </Col>
                    <Col><img width="400" src="https://shinetheme.com/travelerdata/solotour/wp-content/uploads/2020/04/Rectangle-107.png" alt="" /></Col>
                </Row>
                <Row className="mt-4">
                    <h3 className="mb-4">What to Expect From The Weather</h3>
                    <Col>
                        <h4>Thailand Tour</h4>
                        <p>Thailand is smack dab in the middle of one of the warmest, most humid climates on the planet. That’s the whole point, right? Warm weather and perfect beaches. But what you don’t see in those glamorized photos tagged with #wanderlust and #paradise, is how hot it can actually get here. It sits just atop the equator and temperature rarely dips below 25 ºC (77 ºF). While it will be hot year-round, there is a rainy season – from July to October – when it will rain almost daily but usually just in short, heavy spurts.

                            So in short, you will be hot, sweaty and sticky. Luckily, we planned accordingly here at BTT. Your transport and accommodation is all AC’d (aside from the night train, one night camping in Erawan National Park, and the floating bungalows in Khao Sok National Park).</p>
                    </Col>
                    <Col>
                        <h4>The Food</h4>
                        <img width="500" height="350" src="https://shinetheme.com/travelerdata/solotour/wp-content/uploads/2020/05/Rectangle-104@3x-1024x1024.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;