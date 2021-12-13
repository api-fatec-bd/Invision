import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Container = styled.div`
display: flex;
flex: 1;
flex-direction: row;
`;

export const ContainerCarousel = styled.div`
flex: 0.8;
background-color: #A9C5BA
`;

export const Imagem = styled.img`
background-color: #A9C5BA;
 margin-top: 15px;
  margin-left: 5px;
`;

export const ContainerLogin = styled.div`
flex: 1;
padding: 20px;
`;

export const ContainerLogo = styled.div`
text-align: right;
`;

export const Logo = styled.h4`
font-size: 20px 
`;

export const ContainerCenter = styled.div`
text-align: center;
`;

export const Titulo = styled.h1` 
font: normal normal normal 30px/38px Muli;
letter-spacing: 0px;
color: #707070;
opacity: 1;
  `

export const Input = styled.input`
text-align: left;
font-size: 14px;
font: normal normal normal 14px/18px Muli;
letter-spacing: 0px;
opacity: 1;
border-width:0px;
border:none;
color: #707070;
`;

export const ContainerForgotButton = styled.div`
align-Items: center;
margin-left: 90px;
`;

export const ContainerSignUp = styled.div`
margin-top: 30px;
margin-bottom: 30px;
`;

export const ForgotButton = styled(Button)`
&& {
  font-size: 7px
} 
`;

export const Sign = styled(Button)`
&& {
background: #707070 0% 0% no-repeat padding-box;
border-radius: 100px;
color: #ffff;
opacity: 1;
width: 175px;
height: 35px;
}`;

export const SignGoogle = styled(Button)`
&& {
  background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #00000029;
border-radius: 100px;
font: normal normal normal 12px/14px Lato;
opacity: 1;
}
`;

export const ContainerTerms = styled.div`
display:flex;
flexDirection: row;
align-items: center;
text-align: center;
`;

export const ContainerCreateAccount = styled.div`
text-align: center; 
width: 100%;
 margin-top: 30px;
`;

export const TermsText = styled.text`
font-size: 14px

`;

export const CreateAccount = styled.a` 
color: #A9C5BA;
`;

export const ErrorMessage = styled.div`
color:red;
font-size:12px;
`;

export const Line = styled.div`
border-bottom: 1px solid #707070;
flex: 0.2
`;

export const LineText = styled.text`
font-size: 12px;
margin: 4px
`;