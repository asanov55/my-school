import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselApp() {
  return (
    <Carousel className="containe">
      <Carousel.Item interval={1000}>
        <img
          className="carusel d-block w-100"
          src="https://27.edubish.kg/wp-content/uploads/sites/188/2019/02/druzhba-narikov.png"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="carusel d-block w-100"
          src="https://27.edubish.kg/wp-content/uploads/sites/188/2019/02/druzhba-narikov.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carusel d-block w-100"
          src="https://27.edubish.kg/wp-content/uploads/sites/188/2019/02/druzhba-narikov.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselApp;
