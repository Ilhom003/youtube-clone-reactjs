import React, { Component } from 'react';
import { Container, Wrapper, Title, ItemWrapper } from './style';
import { sidebar } from '../../utils/sidebar';

class YouTube extends Component {
    render() {
        return (
            <Container>
                {sidebar.map(({ icon, id, title, data }) => (
                    <Wrapper key={id}>
                        {title && <Title title>{title}</Title>}
                        {data.map(({ icon: Icon, title: subTitle }) => (
                            <ItemWrapper>
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