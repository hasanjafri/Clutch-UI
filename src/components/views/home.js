import React from 'react';
import { Segment, Grid, Header, Image, Dropdown, Container, Card, Input} from 'semantic-ui-react';
import ResponsiveContainer from '../responsive-container';

import '../styles/home.css';

const dropDownOptions = [
    {key: 'Honda', text: 'Honda', value: 'Honda'},
    {key: 'Jeep', text: 'Jeep', value: 'Jeep'}
]

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: []
        };
    }

    componentWillMount() {
        this.fetchCars();
    }

    componentDidMount() {
        this.generateCarCards();
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

    generateCarCards = () => {
        if (this.state.carsData) {
            let randCars = [];
            for (var i=0; i<9; i++) {
                if (this.state.carsData) {
                    randCars.push(this.state.carsData.cars[Math.floor(Math.random() * this.state.carsData.cars.length)])
                }
            }
            
            this.setState({
                randCars: randCars
            })
        } else {
            return;
        }
    }

    handlePriceFilter = event => {
        this.filterCards(parseInt(event.target.value))
    }

    handleMake = (event, { value }) => {
        this.state.value.push(value);
        console.log(value);
    }

    groupBy = (list, keyGetter) => {
        const map = new Map();
        list.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            } else {
                collection.push(item);
            }
        });
        return map;
    }

    filterCards = (priceFilter=null, make=null) => {
        let filteredCars = [];
        let randCars = [];
        if (priceFilter != null) {
            for (var i=0; i<this.state.carsData.cars.length; i++) {
                if (this.state.carsData.cars[i].price <= priceFilter) {
                    filteredCars.push(this.state.carsData.cars[i])
                } else {
                    return;
                }
            }
        }

        console.log(filteredCars)
        
        for (i=0; i<9; i++) {
            randCars.push(filteredCars[Math.floor(Math.random() * this.state.carsData.cars.length)])
        }

        this.setState({
            randCars: randCars
        })
    }

    render() {
        var containerCards;
        if (this.state.randCars) {
            console.log(this.state.randCars);
            containerCards = this.state.randCars.map((car, i) => {
                return(
                    <Container key={i} style={{float: 'left', position: 'relative', width: '30%'}}>
                        <Card>
                            <Image src={car.photos[0].sizes.base.url}/>
                            <Card.Content>
                                <Card.Header>{car.model_trim}</Card.Header>
                                <Card.Meta>{car.year}  · {car.mileage}km</Card.Meta>
                                <Card.Description>${car.price}</Card.Description>
                            </Card.Content>
                        </Card>
                    </Container>
                )
            })
        }
        return(
            <ResponsiveContainer> 
                <Segment vertical>
                    <Grid style={{marginRight: '10%', marginLeft: '10%'}}> 
                        <Grid.Column mobile={16} tablet={16} computer={2} style={{ backgroundColor: "#d7e3fc"}} textAlign="center">
                            <Header className="Header" as='h4'>
                                <Header.Content>Filter Data</Header.Content>
                            </Header>
                            <Input label={{basic: true, content: '$'}} labelPosition='left' placeholder='By price' fluid onChange={this.handlePriceFilter}/>
                            <Dropdown placeholder="By make" fluid multiple selection options={dropDownOptions} onChange={this.handleMake} value={this.state.value}/>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={14}>
                                {containerCards}
                        </Grid.Column>
                    </Grid>
                </Segment>
            </ResponsiveContainer>
        )
    }
}

export default Home;