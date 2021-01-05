import React from 'react';
import * as yup from 'yup';
import {useFormik } from "formik";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, ContainerCarousel, Imagem, ContainerLogin, ContainerLogo, Logo, ContainerCenter, Titulo,
    ContainerForgotButton, ForgotButton, ContainerSignUp, Sign, SignGoogle, ContainerCreateAccount, CreateAccount, ErrorMessage,
    Line, LineText
}
    from './styles.js'
import googleIcon from '../../assets/googleIcon.png'
import Data from '../../assets/Data.png'


const initialValues = {
    email: "",
    password: "",
}
let validationSchema = yup.object().shape({
    email: yup.string().email().required("*Este campo não pode ser vazio"),
    password: yup
        .string()
        .required("*Este campo não pode ser vazio")
})

export default function Login(onSubmit) {

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });
    const emailProps = formik.getFieldProps("email");
    const passwordProps = formik.getFieldProps('password');
    return (
        <form onSubmit={formik.handleSubmit} data-testid="form-add-login" >
            <Container>
                <MuiThemeProvider>
                    <ContainerCarousel>
                        <Carousel>
                            <Carousel.Item>
                                <Imagem
                                    width="100%"
                                    height='100%'
                                    src={Data}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Imagem
                                    width="100%"
                                    height='100%'
                                    src={Data}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Imagem
                                    width="100%"
                                    height='100%'
                                    src={Data}
                                />
                            </Carousel.Item>
                        </Carousel>
                        <div style={{ padding: 50 }}>
                            <h3 style={{ marginTop: 5, color: '#FFF', fontSize: 20 }}  >Marcenas mattis egestas</h3>
                            <p style={{ color: '#FFF', fontSize: 12 }}>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</p>
                        </div>
                    </ContainerCarousel>
                    <ContainerLogin>
                        <ContainerLogo>
                            <Logo> Invision </Logo>
                        </ContainerLogo>
                        <ContainerCenter>
                            <Titulo> Welcome to Invision</Titulo>
                        </ContainerCenter>
                        <ContainerCenter>
                            <ContainerCenter>
                            <TextField label="Users name or Email" type="email" name="email" inputProps={{ 'data-testid': 'email' }} InputLabelProps={{ style: { fontSize: 14 } }} {...emailProps} />
                                {formik.touched.email && formik.errors.email ? (
                                    <ErrorMessage>{formik.errors.email}</ErrorMessage>
                                ) : null}
                            </ContainerCenter>
                            <ContainerCenter>
                                <TextField label="Password" type="password" name="password" inputProps={{ 'data-testid': 'password' }} InputLabelProps={{ style: { fontSize: 14 } }} {...passwordProps} />
                                {formik.touched.password && formik.errors.password ? (
                                    <ErrorMessage>{formik.errors.password}</ErrorMessage>
                                ) : null}
                            </ContainerCenter>
                            <ContainerForgotButton >
                                <ForgotButton>  Forgot Password? </ForgotButton>
                            </ContainerForgotButton>
                            <ContainerSignUp>
                                <Sign type="submit" > Sign up</Sign>
                            </ContainerSignUp>
                        </ContainerCenter>
                        <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Line />

                            <LineText> Or</LineText>
                            <Line />
                        </Container>
                        <ContainerCenter>
                            <SignGoogle variant="contained" startIcon={<img src={googleIcon} />}> Sign with Google</SignGoogle>
                        </ContainerCenter>
                        <Container>
                            <ContainerCreateAccount>
                                <text> New <b>Invision? </b> <CreateAccount href="cadastro"> Create Account</CreateAccount></text>
                            </ContainerCreateAccount>

                        </Container>
                    </ContainerLogin>
                </MuiThemeProvider>
            </Container >
        </form>
    )
}