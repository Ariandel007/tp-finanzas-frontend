import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BarButton = ({openSideNav, token, setToken}) => {

    const location = useLocation();

    useEffect(() => {
        setToken(localStorage.getItem('token-receipt'));
    }, [location]);

    return (
        <div className="col-2 selectable">
            {token? <h2 onClick={openSideNav} className="header-title">☰</h2>: null}
        </div>
    );
}
 
export default BarButton;