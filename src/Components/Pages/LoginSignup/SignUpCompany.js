import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBInput } from "mdbreact";

import { MDBBtn } from "mdbreact";

class SignUpCompany extends Component {
    state = {
        signupfname: "",
        signuplname: "",
        signupemail: "",
        signuppass: "",
        signuprepass: "",
        companyuser: "",
        companyname: ""
        
      };
    
      submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
      };
    
      changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

      onClick = (nr) => () => {
        this.setState({
          radio: nr
        });
      }

    render() {
        const { signupfname, signuplname, 
            signupemail, signuppass, signuprepass, companyuser, companyname } = this.state;
        return(
            <div>
                <div className="po-form">
                    <form
                        className="needs-validation"
                        onSubmit={this.submitHandler}
                        noValidate
                        >
                        <MDBRow>
                            <MDBCol md="12">
                            <label
                                    htmlFor="defaultFormRegisterConfirmEx3">
                                    First Name                                                    
                                </label>
                            <input
                                value={signupfname}
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterPasswordEx4"
                                className="form-control"
                                name="signupfname"
                                placeholder="Enter your first name"
                                required
                            />
                            <div className="invalid-feedback">
                                Please enter your first name
                            </div>
                            </MDBCol>
                            <MDBCol md="12">
                                <label
                                    htmlFor="defaultFormRegisterConfirmEx3">
                                    Last Name
                                </label>
                            <input
                                value={signuplname}
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterPasswordEx4"
                                className="form-control"
                                name="signuplname"
                                placeholder="Enter your last name"
                                required
                            />
                            <div className="invalid-feedback">
                                Please enter your last name
                            </div>
                            </MDBCol>
                            <MDBCol md="12">
                            <label
                                htmlFor="defaultFormRegisterConfirmEx3">
                                Email
                            </label>
                            <input
                                value={signupemail}
                                onChange={this.changeHandler}
                                type="email"
                                id="defaultFormRegisterPasswordEx4"
                                className="form-control"
                                name="signupemail"
                                placeholder="Enter your email address"
                                required
                            />
                            <div className="invalid-feedback">
                                Please enter your email
                            </div>
                            </MDBCol>
                            <MDBCol md="12">
                                <label
                                    htmlFor="defaultFormRegisterConfirmEx3">
                                    Password
                                </label>
                            <input
                                value={signuppass}
                                onChange={this.changeHandler}
                                type="password"
                                id="defaultFormRegisterPasswordEx4"
                                className="form-control"
                                name="signuppass"
                                placeholder="Enter your password eg. P@sswCrd!"
                                required
                            />
                            <div className="invalid-feedback">
                                Please enter your password
                            </div>
                            </MDBCol>
                            <MDBCol md="12">
                                <label
                                    htmlFor="defaultFormRegisterConfirmEx3">
                                    Confirm Password
                                </label>
                            <input
                                value={signuprepass}
                                onChange={this.changeHandler}
                                type="text"
                                id="defaultFormRegisterPasswordEx4"
                                className="form-control"
                                name="signuprepass"
                                placeholder="Re-enter your password"
                                required
                            />
                            <div className="invalid-feedback">
                                Please enter your password
                            </div>
                            </MDBCol>                            
                        </MDBRow>
                        <MDBBtn color="primary" type="submit">
                            Create new account
                        </MDBBtn>
                    </form>
                </div>
                <div className="rc-link text-center">
                    <p>By signing up, you agree to our Terms and Policy. You may receive email Notifications from us and can opt out any time.   </p>
                </div>                   
            </div>               
        )
    }
}

export default SignUpCompany;
