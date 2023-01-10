import React, { Component } from 'react';
import { Container, Wrapper, Title, ItemWrapper } from './style';
import { sidebar } from '../../utils/sidebar';

class YouTube extends Component {
    render() {
        return (
            <Container>
                {sidebar.map(({ icon, id, title, data } ,index) => (
                    <Wrapper key={index}>
                        {title && <Title title='true'>{title}</Title>}
                        {data.map(({ icon: Icon, title: subTitle },index) => (
                            <ItemWrapper key={index}>
                                <Icon />
                                <Title>{subTitle}</Title>
                            </ItemWrapper>
                        ))
                        }
                    </Wrapper>
                ))}
            </Container>
        );
    }
}

export default YouTube;