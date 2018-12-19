import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Responsive, Segment, Menu, Container } from 'semantic-ui-react';
import Hero from './hero';
import history from './history';

import headerImg from '../assets/header.png';

export default class DesktopMenubar extends Component {
    render() {
      const { children } = this.props
  
      return (
        <Responsive {...Responsive.onlyComputer}>
            <Segment style={{position: 'fixed', top: '0', left: '0', zIndex: '999', width: '100%', padding: '0 0 0 0'}} textAlign="center">
              <Menu secondary style={{backgroundColor: '#D7E3FC'}} size='large'>
                  <Container>
                    <Menu.Item as="a" onClick={() => history.push('/')} position="right">Home</Menu.Item>
                    <Menu.Item as="a" onClick={() => history.push('/carousel')}>Carousel</Menu.Item>
                  </Container>
              </Menu>
            </Segment>
            <Segment inverted textAlign='center' style={{ marginLeft: '10%', marginRight: '10%', minHeight: 300, padding: '1em 0em', backgroundSize: "100% 100%", backgroundImage: `url(${headerImg})`}} vertical>
              <Hero />
            </Segment>  
          {children}
        </Responsive>
      )
    }
}
  
DesktopMenubar.propTypes = {
    children: PropTypes.node,
}