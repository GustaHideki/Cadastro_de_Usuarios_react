import styled from 'styled-components';
import Background from '../../assents/background1.svg'


export const Image = styled.img`
margin-top: 30px;

`



export const Container = styled.div`
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
height: 100vh;


`


export const InputLabel = styled.p`
color: #EEEEEE;
font-size: 18px;
font-weight: 700;
line-height: 22px;
text-align: left;
margin-bottom: 1px;
margin-left: 25px;


`
export const Input = styled.input`
box-shadow: 0px 4px 4px 0px #00000040;
color: #FFFFFF;
font-size: 24px;
background: #FFFFFF40;
border: none;
outline: none;
width: 342px;
height: 58px;
padding: 15px 20px 15px 25px;
border-radius: 14px;
margin-bottom: 34px;


`






