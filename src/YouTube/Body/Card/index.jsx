import React, { Component } from 'react';
import { Container, Video, Wrapper, User, Title } from './style';

class YouTube extends Component {
    render() {
        const { user, video,name,view,time,title } = this.props.value
        return (
            <Container>
                <Video src={video} />
                <Wrapper>
                    <User src={user.img} />
                    <div>
                        <Title>{title}</Title>
                        <Title desc>{name }</Title>
                        <div >
                        <Title desc>{view } {time }</Title> 

                        </div>
                    </div>
                </Wrapper>
            </Container>
        );
    }
}

export default YouTube;