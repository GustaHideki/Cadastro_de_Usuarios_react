import styled from 'styled-components';
import Background from '../../assents/background2.svg'



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
height: 100%;
min-height: 100vh;


`




export const Button = styled.button`
background: transparent;
width: 342px;
height: 74px;
border-radius: 14px;
border: 1px solid #FFFFFF;

font-size: 17px;
font-weight: 700;
line-height: 28px;
letter-spacing: 0px;
color: #FFFFFF;
cursor: pointer;

display: flex;
align-items: center;
justify-content: center;
gap: 15px;
margin-top: 120px;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.6;
}



`

export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;

box-shadow: 0px 4px 4px 0px #00000040;
color: #FFFFFF;
background: #FFFFFF40;
border: none;
outline: none;

width: 342px;
height: 58px;
padding: 15px 20px 15px 25px;
border-radius: 14px;
margin-top: 20px;

p{
    font-style: normal;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
}

button{
    background: none;
    border: none;
    cursor: pointer;
}
`




