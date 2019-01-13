import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'


const url =  process.env.PUBLIC_URL + '/img/bg.jpg'
const HeaderWrapper = styled.header`
    width: 100%;
    height: 49px;
    background-color: black;
`

const FooterWrapper = styled.div`
    width: 100%;
    height: 59px;
    background-color: black;
       
`
const MainWrapper = styled.main`
    height: 700px;
    padding-top: 130px;
    background: url(${url}) no-repeat;
    background-size: cover;
`

class App extends Component {
  render() {
    return (
        <div className="App">
          <HeaderWrapper>
            <Grid>
                <Header/>
            </Grid>
          </HeaderWrapper>
            <MainWrapper>
                <Grid>
                     <Main/>
                </Grid>
            </MainWrapper>
            <FooterWrapper>
                <Grid>
                    <Footer/>
                </Grid>
            </FooterWrapper>
        </div>
    );
  }
}




export default App;
