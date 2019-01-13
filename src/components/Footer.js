import React, { Component } from 'react';

import Inst from '../img/004-instagram.png';
import Vk from '../img/001-vk.png';
import Fb from '../img/003-facebook.png';
import Twitter from '../img/002-twitter.png'
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';


const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    height: 49px;
`

class Footer extends React.Component{
    render(){
        return(
            <Row>
                <Col lg={3} lgOffset={4}>
                    <nav>
                        <List>
                            <a href="#"><img src={Inst} alt=""/>
                            </a>
                            <a href="#"><img src={Vk} alt=""/>
                            </a>
                            <a href="#"><img src={Fb} alt=""/>
                            </a>
                            <a href="#"><img src={Twitter} alt=""/>
                            </a>
                        </List>
                    </nav>
                </Col>
            </Row>
        );
    }
}
export default Footer