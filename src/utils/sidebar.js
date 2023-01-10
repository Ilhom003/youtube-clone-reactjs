import {ReactComponent as home} from '../assets/icons/home.svg'

import styled from 'styled-components';
const Icons = styled.div``;

Icons.Home = styled(home)`
width:12px;
height: 12px;
`

export const sidebar = [
    {
        id:1,
        data:[
            {id:1, title:'Home',icon:Icons.Home},
            {id:2, title:'Explore',icon:Icons.Home},
            {id:3, title:'Subscription',icon:Icons.Home},
        ]
    },
    {
        id:2,
        data:[
            {id:1, title:'Library',icon:Icons.Home},
            {id:2, title:'History',icon:Icons.Home},
            {id:3, title:'Your Vidios',icon:Icons.Home},
            {id:4, title:'Watch Later',icon:Icons.Home},
            {id:5, title:'Liked vidiis',icon:Icons.Home},
            {id:6, title:'Show More',icon:Icons.Home},
        ]
    },
    {
        id:2,
        title:'Subscriptions',
        data:[
            {id:1, title:'Web Brain Academy',icon:Icons.Home},
            {id:2, title:'Web Brain Academy',icon:Icons.Home},
            {id:3, title:'Web Brain Academy',icon:Icons.Home},
            {id:4, title:'Web Brain Academy',icon:Icons.Home},
            {id:5, title:'Web Brain Academy',icon:Icons.Home},
            {id:6, title:'Web Brain Academy',icon:Icons.Home},
            {id:7, title:'Web Brain Academy',icon:Icons.Home},
            {id:8, title:'Web Brain Academy',icon:Icons.Home},
        ]
    },
    {
        id:2,
        title:'More From YouTube',
        data:[
            {id:1, title:'YouTube Premium',icon:Icons.Home},
            {id:2, title:'Settings',icon:Icons.Home},
            {id:3, title:'Help',icon:Icons.Home},
            {id:4, title:'Report Issue',icon:Icons.Home},
        ]
    },
]