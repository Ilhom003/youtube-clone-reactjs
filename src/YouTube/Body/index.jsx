import React, { Component } from 'react';
import { Container } from './style';
import Card from './Card'
import { data } from '../../mock';

class YouTube extends Component {
    render() {
        return (
            <Container>
                {data.map((value) => (
                    <Card
                        view='1M'
                        time='10 minutes before'
                        name={'User'}
                        user={'https://yt3.ggpht.com/ytc/AKedOLRMsjJQ7wRCoQqylzci_XTzHNuorRV7M3cMOW9RQA=s900-c-k-c0x00ffffff-no-rj'}
                        video={'https://i.ytimg.com/vi/hcXXZq25FX0/maxresdefault.jpg'}
                    />
                ))}
            </Container>
        );
    }
}

export default YouTube;