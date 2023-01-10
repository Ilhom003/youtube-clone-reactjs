import styled from "styled-components";

export const Container = styled.div`
width: 350px;
height: 300px;
margin-right: 20px;
margin-bottom: 40px;

 `
export const Video = styled.img`
width: 100%;
height: 200px;
 `

export const Wrapper = styled.div`
 display: flex;
 `

export const User = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
margin-right: 15px;
`

export const Title = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;

color: ${({ desc }) => desc ?' rgba(255, 255, 255, 0.6)' : '#FFFFFF'};
`