 import styled from "styled-components";
 import { ReactComponent as burger } from "../assets/icons/burger.svg";
 import { ReactComponent as search } from "../assets/icons/search.svg";
 import { ReactComponent as bell } from "../assets/icons/bell.svg";
 import { ReactComponent as menu } from "../assets/icons/menu.svg";
 import { ReactComponent as video } from "../assets/icons/video.svg";

 export const Container = styled.div`
 display:flex;
 flex-direction: ${({flex})=> !flex && 'column'};
 /* height: 100vh; */
 background: #212121;
 color: #FFFFFF;
 padding: ${({flex})=> !flex && '0 30px'};
 
 `

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 60px;
background: #212121;
position: sticky;
top: 0;
`

export const Category = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content:${({end})=> end && 'flex-end'} ;
`
export const Icons = styled.div``;

Icons.Burger = styled(burger)`
width:24px;
height: 24px;
cursor: pointer;
`;
Icons.Bell = styled(bell)`
width:24px;
cursor: pointer;
height: 24px;
margin-left: 20px;
`;
Icons.Menu = styled(menu)`
width:20px;
cursor: pointer;
height: 20px;
margin-left: 20px;
`;
Icons.Video = styled(video)`
width:24px;
cursor: pointer;
height: 24px;
margin-left: 20px;
`;

Icons.Logo = styled.img``;
Icons.Search = styled(search)`
width:65px;
height: 40px;
padding: 10px 20px;
background: rgba(255, 255, 255, 0.2);
border-radius: 0px 2px 2px 0px;
cursor: pointer;
`

export const Input = styled.input`
height: 40px;
width: 100%;
max-width: 500px;
background: #000000;
color: rgba(255, 255, 255, 0.6);;
font-size:  18px;
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 2px 0px 0px 2px;
padding-left: 10px;
:focus{
    outline: none;
}
`

export const User =styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
cursor: pointer;
margin-left: 20px;
`

