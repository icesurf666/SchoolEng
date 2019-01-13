import React, { Component } from 'react';


import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Link from './Link'

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    height: 49px;
`

class Header extends React.Component{
    render(){
        return(
            <Row>
                <Col lg={12}>
                    <nav>
                    <List>
                        <Link link="#" text="Языки"/>
                        <Link link="#" text="Пользователи"/>
                        <Link link="#" text="Группы слов"/>
                        <Link link="#" text="Русские слова"/>
                        <Link link="#" text="Иностранные слова"/>
                        <Link link="#" text="Задания"/>
                        <Link link="#" text="Изуч.задачи"/>
                        <Link link="#" text="Изуч.слова"/>
                        <Link link="#" text="Вход"/>
                        <Link link="#" text="Регистрация"/>
                    </List>
                    </nav>
                </Col>
            </Row>
        );
    }
}
export default Header