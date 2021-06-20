import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginAction } from '../actions/auth-action';

const LoginForm = () => {
    const userIsLoading = useSelector(state => state.auth.loading);

    const dispatch = useDispatch();

    const login = user => dispatch(userLoginAction(user));

    const history = useHistory();

    const goToRegister = () => history.push('/sign-up');

    const [userLoginForm, setUserLoginForm] = useState({
        username: '',
        password: '',
    });

    const onChangeInputHandler = e => {
        setUserLoginForm({
            ...userLoginForm,
            [e.target.name]: e.target.value,
        });
    }

    const isvalidForm = () => userLoginForm.username !== '' && userLoginForm.username !== null && userLoginForm.password !== '' && userLoginForm.password !== null

    const onLoginSubmit = e => {
        if(isvalidForm()) {
            login(userLoginForm);
            history.push('/receipt');
        }
    }

    return (
        <div className="card card-data-form p-4">

            <form>
                <div className="d-flex justify-content-center mb-3">
                    <h3>Iniciar Sesión</h3>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputUser" className="col-sm-4 col-form-label"><strong>Usuario</strong></label>
                    <div className="col-sm-8">
                    <input type="text" onChange={onChangeInputHandler} className="form-control" value={userLoginForm.username} defaultValue="Escribe algo" id="inputUser" name="username" placeholder="Escribe algo"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label"><strong>Contraseña</strong></label>
                    <div className="col-sm-8">
                    <input type="password" onChange={onChangeInputHandler} value={userLoginForm.password} defaultValue="*******" className="form-control" id="inputPassword" name="password" placeholder="*******"/>
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-3 mb-5">
                    <button onClick={onLoginSubmit} disabled={!isvalidForm()} type="button" className="btn btn-primary">
                        {userIsLoading? <span className="spinner-grow spinner-grow-sm"></span>: null}
                        Ingresar
                    </button>
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