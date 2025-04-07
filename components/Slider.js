'use client'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
const slides = [
    {
        id: 1,
        title: "slide 1",
        src: '/images/slide1.png',
    },
    {
        id: 2,
        title: "slide 2",
        src: '/images/slide2.png',
    },
    {
        id: 3,
        title: "slide 3",
        src: '/images/slide3.png',
    }
]
 function SliderElement() {
    return (
        <Carousel slide={true} interval={2000} controls={false}>
            {slides.map((item) => (
                <Carousel.Item key={item.id}>
                    <img
                        className='d-block w-100 vh-100'
                        src={item.src}
                        alt={item.title}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
export default SliderElement;