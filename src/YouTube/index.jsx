import React, { Component } from 'react';
import { Category, Container, Wrapper,Icons,Input, User } from './style';
import Sidebar from './Sidebar'
import Body from './Body'
import logo from '../assets/imgs/logo.png'
import user from '../assets/imgs/user.jpg'

class YouTube extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    <Category>
                        <Icons.Burger/>
                        <Icons.Logo src={logo}/>
                    </Category>
                    <Category>
                        <Input placeholder='Search...'/>
                        <Icons.Search/>
                    </Category>
                    <Category end>
                        <Icons.Video/>
                        <Icons.Menu/>
                        <Icons.Bell/>
                        <User src={user}/>
                    </Category>
                </Wrapper>
                <Container flex>
                    <Sidebar />
                    <Body />
                </Container>
            </Container>
        );
    }
}

export default YouTube;