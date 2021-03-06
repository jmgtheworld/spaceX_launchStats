import {Carousel} from 'react-bootstrap'

export default function Images(props) {

  const {images} = props;
  console.log(images)

  const listofImages = images.map((image) => {
    return (
        <Carousel.Item key = {image} interval = {5000}>
          <img
            className = "d-block w-100"
            src = {image}
            alt = "First slide"
          />
        </Carousel.Item>
    )
  })

  return (
    <Carousel className = "rocketImage">
      {listofImages}
    </Carousel>
  )
}