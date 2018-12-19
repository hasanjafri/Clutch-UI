import React, { Component } from 'react';
import { Segment, Container, Grid, Header } from 'semantic-ui-react';

class Footer extends Component {
    render() {
        return(
            <Segment inverted vertical style={{ padding: '5em 0em', backgroundColor: '#D7E3FC' }}>
                <Container>
                    <Grid>
                    <Grid.Row>
                        <Grid.Column>
                        <Header as='h2' style={{textAlign: 'center', color: 'black'}} inverted>Drive On!</Header>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        );
    }
}

export default Footer;