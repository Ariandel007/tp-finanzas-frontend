import { Fragment } from "react";
import Table from "./Table";

const Historial = () => {
    return (
        <Fragment>
            <div className="d-flex justify-content-center my-5">
                <h1>Historial</h1>
            </div>

            <div className="row">
                <div className="col-12">
                    <Table/>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Historial;