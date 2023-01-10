import React, { Component } from 'react';
import { Category, Container, Wrapper, Icons, Input, User } from './style';
import Sidebar from './Sidebar'
import Body from './Body'
import logo from '../assets/imgs/logo.png'
import user from '../assets/imgs/user.jpg'
import { data } from '../mock';


class YouTube extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data
        }
    }
    render() {
        const onSearch = (e) => {
            let res = data.filter((value)=> value.title.toLowerCase().includes(e.target.value.toLowerCase()))
            this.setState({data:res})
        }
        return (
            <Container>
                <Wrapper>
                    <Category>
                        <Icons.Burger />
                        <Icons.Logo src={logo} />
                    </Category>
                    <Category>
                        <Input placeholder='Search...' onChange={onSearch} />
                        <Icons.Search />
                    </Category>
                    <Category end='true'>
                        <Icons.Video />
                        <Icons.Menu />
                        <Icons.Bell />
                        <User src={user} />
                    </Category>
                </Wrapper>
                <Container flex>
                    <Sidebar />
                    <Body data={this.state.data} />
                </Container>
            </Container>
        );
    }
}

export default YouTube;