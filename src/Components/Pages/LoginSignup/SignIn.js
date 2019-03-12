import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBInput, MDBIcon } from "mdbreact";

import { MDBBtn } from "mdbreact";

class SignIn extends Component {

    state = {
        signinuser: "",
        signinpass: "",
        radio: 1
      };
    
      submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
      };
    
      changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

    render() {
        const { signinuser, signinpass } = this.state;

        return(
            <div className="po-form">
                <form
                    className="needs-validation"
                    onSubmit={this.submitHandler}
                    noValidate
                    >
                    <MDBRow>
                        <MDBCol md="12">
                        <div className="input-icon">
                            <label
                                    htmlFor="defaultFormRegisterConfirmEx3">
                                    Username                                                    
                            </label>
                            <input
                            
                                value={signinuser}
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterPasswordEx4"
                                className="form-control"
                                name="signinuser"
                                placeholder="Enter your password"
                                MDBIcon=""
                                required
                                
                            />
                            <div className="invalid-feedback">
                                Please enter your username
                            </div>
                            <i className="fas fa-user prefix"></i>
                        </div>
                        </MDBCol>
                        <MDBCol md="12">
                        <div className="input-icon">
                            <label
                                htmlFor="defaultFormRegisterConfirmEx3">
                                Password
                            </label>
                            <div className="po-forgotpass">
                                <a href="#">Forgot password ?</a>
                            </div>    
                            <input
                                value={signinpass}
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterPasswordEx4"
                                className="form-control"
                                name="signinpass"
                                placeholder="Enter your password"
                                required
                            />
                            <div className="invalid-feedback">
                                Please enter your password
                            </div>
                            <i className="fas fa-key"></i>
                        </div>
                        </MDBCol>
                        <MDBContainer className="po-radio">
                            <MDBInput label="Remember me" type="checkbox" />
                        </MDBContainer>
                    </MDBRow>
                    <MDBBtn color="primary" type="submit">
                        Sing In
                    </MDBBtn>
                </form>

            </div>   
        )
    }
}

export default SignIn;
