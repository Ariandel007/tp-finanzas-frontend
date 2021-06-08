import { Fragment } from "react";

const SelectRate = ({ dataView, setdataView, receiptFormData, setReceiptFormData }) => {

    const selectRateType = (isNominalState) => {
        setReceiptFormData({
            ...receiptFormData,
            rate: {
                ...receiptFormData.rate,
                isNominal: isNominalState
            }
        });

        setdataView({
            ...dataView,
            title: 'Recibo Descontado a Tasa Nominal',
            stage: 1
        });

    }

    return (
        <Fragment>
            <div className="d-flex justify-content-center">
                <h1>Elige tu tasa</h1>
            </div>
            <div className="d-flex justify-content-around">
                <button type="button" className="btn btn-primary" onClick={ () => selectRateType(true)} >Nominal</button>
                <button type="button" className="btn btn-primary" onClick={ () => selectRateType(false)}>Efectiva</button>
            </div>
        </Fragment>
    );
}
 
export default SelectRate;