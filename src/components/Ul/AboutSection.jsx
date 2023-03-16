import React from 'react';
import { Container,Row,Col } from 'reactstrap'
import '../../styles/about-section.css'
import aboutImg from '../../assets/all-images/cars-img/aston.jpg'

const AboutSection = () => {
    return <section>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="about__section-content">
                        <h4 className="section__subtitle">About us</h4>
                        <h2 className="section__title">Welcome to car rent service</h2>
                        <p className="section__description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam numquam error enim molestias blanditiis rerum laudantium! Illo voluptas doloremque, similique dolores deserunt quibusdam ipsa quam officia voluptates maxime laboriosam quod accusamus, ratione quas aliquid necessitatibus. Commodi aliquid possimus optio eius.
                        </p>
                        <div className="about__section-item d-flex align-items-center">
                            <p className="section__description d-flex align-items-center gap-2">
                            <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet
                            </p>

                            <p className="section__description d-flex align-items-center gap-2">
                            <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet
                            </p>
                        </div>

                        <div className="about__section-item d-flex align-items-center">
                            <p className="section__description d-flex align-items-center gap-2">
                            <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet
                            </p>

                            <p className="section__description d-flex align-items-center gap-2">
                            <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="about__img">
                        <img src={aboutImg} alt="" className='w-100'/>
                    </div>
                </Col>
                
            </Row>
        </Container>
    </section>;
}
 
export default AboutSection;
