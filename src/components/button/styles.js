import styled from 'styled-components'



export const Button = styled.button`
background: ${(props=> props.isBack ?` transparent` : `#000000CC ` )};
width: 342px;
height: 74px;
border-radius: 14px;
border: ${(props=> props.isBack ? `1px solid #ffffff` : `none`)};

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
margin-top: 130px;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.6;
}

img{
   ${(props=> props.isBack && `transform: rotateY(180deg)` )};
}

`

