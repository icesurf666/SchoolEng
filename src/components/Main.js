import React, { Component } from 'react';


import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import Slider from './Slider'

const Repair = styled.div`
    color: #ffffff;
    font-weight: 700;
    line-height: 50px;
    font-size: 40px;
        span{
            display: block;
            font-size: 24px;
            line-height: 30px;
        }
     
`
const LightText = styled.div`
    margin-top: 54px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
`
const RegBtn = styled.button`
    margin-top: 32px;
    border:0;
    width: 245px;
    height: 64px;
    background-color: orange;
    border-radius: 30px;
    color: black;
    font-size: 18px;
    font-weight: bold;
`

class Main extends React.Component{
    render(){
        return(
          <Row>
              <Col lg={5}>
                  <Repair>
                      Добро пожаловать
                      <span>в школу иностранного языка</span>
                  </Repair>
                      <LightText>
                          Для того, чтобы начать изучать языки и проходить задания, зарегистрируйтесь.
                      </LightText>
                      <RegBtn>
                          Зарегистрироваться
                      </RegBtn>
              </Col>
              <Col lg={6} lgOffset={1}>
                  <Slider />
              </Col>
          </Row>
        )
    }
}
export default Main