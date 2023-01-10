import styled from "styled-components";

export const Container = styled.div`
 display:flex;
 flex-direction: column;
 width: 250px;
 height: 100vh;
 overflow-y: scroll;
 background: #212121;
 `

export const Wrapper = styled.div`
 border-bottom:2px solid rgba(255,255,255,0.2);
 margin: 10px 0;
 `
export const Title = styled.div`
display: flex;
align-items: center;
 font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 20px;
margin-left: 24px;
cursor: pointer;
height: 40px;
color:${({ title }) => (title ? 'rgba(255, 255, 255, 0.6)' : '#ffffff')}; 
`

export const ItemWrapper = styled.div`
display:flex;
align-items: center;
cursor: pointer;     
`