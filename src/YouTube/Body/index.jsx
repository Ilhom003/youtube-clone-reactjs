import React, { Component } from 'react';
import { Container } from './style';
import Card from './Card'

class YouTube extends Component {
    render() {
        console.log(this.props.data);
        const { data } = this.props
        return (
            <Container>
                {
                    data.length ?
                        data.map((value) => (
                            <Card key={value.id} value={value} />
                        )) : <h1 style={{ textAlign: 'center', width: '100%'}}>Not Found  </h1>
                }
            </Container>
        );
    }
}

export default YouTube;