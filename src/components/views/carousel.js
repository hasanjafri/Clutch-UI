import React from 'react';
import Slider from 'react-slick';
import { Image } from 'semantic-ui-react';

import '../styles/carousel.css';

const sliderSettings = {
    className: 'center',
    centerPadding: '75px',
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 444,
    arrows: true,
    focusOnSelect: true
};

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.fetchCars();
    }

    componentDidMount() {
        this.setState({
            carsData: this.state.carsData
        })
    }

    fetchCars = () => {
        // fetch('https://s3.ca-central-1.amazonaws.com/clutch-interview/car.json').then(response => response.json()).then(json => {
        //     console.log(json);
        //     this.setState({
        //         carsData: json
        //     })
        // })
        var carsData = require('./data.json');
        console.log(carsData);
        this.setState({
            carsData: carsData
        })
    }

    render() {
        let carImgs;
        if (this.state.carsData) {
            carImgs = this.state.carsData.cars.map((car, i) => (
                <Image wrapped className="Poster" key={i} src={car.photos[0].sizes.base.url}/>
            ));
        }
        return(
            <Slider {...sliderSettings}>{carImgs}</Slider>
        )
    }
}

export default Carousel;