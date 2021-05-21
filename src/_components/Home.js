import { Fragment } from "react";
import LoginForm from "./LoginForm";

const Home = () => {
    return (
        <Fragment>
            <div className="d-flex justify-content-center my-5">
                <h1>Bienvenido a tu Cartera de Negocio</h1>
            </div>

            <div className="row">
                <div className="col-12 col-lg-6">
                    <LoginForm/>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="d-flex justify-content-center">
                        <img src="/images/woman-img.png"></img>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Home;