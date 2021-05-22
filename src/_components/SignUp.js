import { Fragment, useEffect, useState } from "react";
import SignUpForm from "./SignUpForm";

const SignUp = () => {

    return (
        <Fragment>
            <div className="d-flex justify-content-center my-5">
                <h1>Bienvenido a tu Cartera de Negocio</h1>
            </div>

            <div className="row">
                <div className="col-12 col-lg-6">
                    <SignUpForm/>
                </div>
                <div className="hide-md col-12 col-lg-6">
                    <div className="d-flex justify-content-center">
                        <img height="400px" src="/images/man-sign-up.png"></img>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default SignUp;