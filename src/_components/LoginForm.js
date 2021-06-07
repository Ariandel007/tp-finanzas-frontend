import { useHistory } from 'react-router-dom';

const LoginForm = () => {

    const history = useHistory();

    const goToRegister = () => history.push('/sign-up');

    return (
        <div className="card card-data-form p-4">

            <form>
                <div className="d-flex justify-content-center mb-3">
                    <h3>Iniciar Sesión</h3>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputUser" className="col-sm-4 col-form-label"><strong>Usuario</strong></label>
                    <div className="col-sm-8">
                    <input type="text" className="form-control" id="inputUser" name="username" placeholder="Escribe algo"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label"><strong>Contraseña</strong></label>
                    <div className="col-sm-8">
                    <input type="password" className="form-control" id="inputPassword" name="password" placeholder="*******"/>
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-3 mb-5">
                    <button type="submit" className="btn btn-primary">Ingresar</button>
                </div>

                <div className="dotted"></div>
                
                <div className="d-flex justify-content-center my-3">
                    <small>¿Aún no tienes una cuenta?</small><small onClick={goToRegister}><strong className="link"> ¡Cree una cuenta aquí!</strong></small>
                </div>
            </form>
        </div>
    );
}
 
export default LoginForm;