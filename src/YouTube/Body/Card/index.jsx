import React, { Component } from 'react';
import { Container, Video, Wrapper, User, Title } from './style';

class YouTube extends Component {
    render() {
        const { user, video,name,view,time } = this.props
        return (
            <Container>
                <Video src={video} />
                <Wrapper>
                    <User src={user} />
                    <div>
                        <Title>Lorem Ipsum is simply dummy text of the printing</Title>
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