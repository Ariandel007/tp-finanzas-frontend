import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRegisterAction } from '../actions/auth-action';
import { useEffect, useRef, useState } from 'react';

const SignUpForm = () => {
    const userIsLoading = useSelector(state => state.auth.loading);

    const dispatch = useDispatch();

    const history = useHistory();

    const isInitialMount = useRef(true);

    const userLoged = useSelector(state => state.auth.user);

    const register = user => dispatch(userRegisterAction(user));

    const goToLogin = () => history.push('/');

    const [userRegisterForm, setUserRegisterForm] = useState({
        username: '',
        password: '',
        passwordConfirmed: ''
    });

    const onChangeInputHandler = e => {
        setUserRegisterForm({
            ...userRegisterForm,
            [e.target.name]: e.target.value,
        });
    }

    const isvalidForm = () => userRegisterForm.username !== '' && userRegisterForm.username !== null 
                                && userRegisterForm.password !== '' && userRegisterForm.password !== null && userRegisterForm.password === userRegisterForm.passwordConfirmed

    const onSignUpSubmit = e => {
        if(isvalidForm()) {
            register(userRegisterForm);
        }
    }

    useEffect(() => {
        if (isInitialMount.current) {
           isInitialMount.current = false;
        } else {
            history.push('/historial');
        }
    }, [history, userLoged]);


    return (
        <div className="card card-data-form p-4">
            <form>
                <div className="d-flex justify-content-center mb-3">
                    <h3>Registrate</h3>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputUser" className="col-sm-4 col-form-label"><strong>Usuario</strong></label>
                    <div className="col-sm-8">
                    <input name="username" onChange={onChangeInputHandler} type="text" value={userRegisterForm.username} defaultValue="Escribe algo" className="form-control" id="inputUser" placeholder="Escribe algo" onClick={onChangeInputHandler}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label"><strong>Contraseña</strong></label>
                    <div className="col-sm-8">
                    <input name="password" onChange={onChangeInputHandler} type="password" value={userRegisterForm.password} defaultValue="*******" className="form-control" id="inputPassword" placeholder="*******" onClick={onChangeInputHandler}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputConfirmedPassword" className="col-sm-4 col-form-label"><strong>Confirmación</strong></label>
                    <div className="col-sm-8">
                    <input name="passwordConfirmed" onChange={onChangeInputHandler} value={userRegisterForm.passwordConfirmed} defaultValue="*******" type="password" className="form-control" id="inputConfirmedPassword" placeholder="*******" onClick={onChangeInputHandler}/>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3 mb-5">
                    <button disabled={!isvalidForm() && userIsLoading} type="button" className="btn btn-primary" onClick={onSignUpSubmit}>
                        {userIsLoading? <span className="spinner-grow spinner-grow-sm"></span>: null}
                        Registrarse
                    </button>
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