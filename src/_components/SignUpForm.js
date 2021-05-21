import { useHistory } from 'react-router-dom';

const SignUpForm = () => {
    const history = useHistory();

    const goToLogin = () => history.push('/');

    return (
        <div className="card card-login p-4">
            <form>
                <div className="d-flex justify-content-center mb-3">
                    <h3>Registrate</h3>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputUser" className="col-sm-4 col-form-label"><strong>Usuario</strong></label>
                    <div className="col-sm-8">
                    <input type="text" className="form-control" id="inputUser" placeholder="Escribe algo"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label"><strong>Contraseña</strong></label>
                    <div className="col-sm-8">
                    <input type="password" className="form-control" id="inputPassword" placeholder="*******"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputConfirmedPassword" className="col-sm-4 col-form-label"><strong>Confirmación</strong></label>
                    <div className="col-sm-8">
                    <input type="password" className="form-control" id="inputConfirmedPassword" placeholder="*******"/>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3 mb-5">
                    <button type="submit" className="btn btn-primary">Ingresar</button>
                </div>

                <div className="dotted"></div>
                
                <div className="d-flex justify-content-center my-3">
                    <small>¿Ya tienes una cuenta?</small><small onClick={goToLogin}><strong className="link"> ¡Inicie sesión aquí!</strong></small>
                </div>
            </form>
        </div>
    );
}
 
export default SignUpForm;