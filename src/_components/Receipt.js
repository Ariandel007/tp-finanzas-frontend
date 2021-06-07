import { Fragment, useEffect, useState } from "react";
import ReceiptGeneralData from "./ReceiptGeneralData";

const Receipt = () => {

    const [dataView, setdataView] = useState({
        title: 'Datos del Recibo por Honorarios',
        stage: 0
    });

    return (
        <Fragment>
            <div className="d-flex justify-content-center my-5">
                <h1>{dataView.title}</h1>
            </div>

            <div className="row">
                <div className="col-12 col-lg-6">
                    <ReceiptGeneralData/>
                </div>

                <div className="col-12 col-lg-6">
                <div className="d-flex justify-content-center">
                    <h1>Elige tu tasa</h1>
                </div>
                <div className="d-flex justify-content-around">
                    <button type="button" class="btn btn-primary">Nominal</button>
                    <button type="button" class="btn btn-primary">Efectiva</button>
                </div>
                </div>
            </div>
        </Fragment>
    );}
 
export default Receipt;