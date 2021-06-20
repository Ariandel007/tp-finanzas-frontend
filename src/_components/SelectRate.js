import { Fragment, useEffect, useState } from "react";

const SelectRate = ({ dataView, setdataView, receiptFormData, setReceiptFormData }) => {

    const isValidForm = () => {
        const valid = receiptFormData.dateOfIssue !== null && receiptFormData.dateOfIssue !== '' &&
        receiptFormData.paymentDate !== null && receiptFormData.paymentDate !== '' &&
        receiptFormData.totalValue !== null && receiptFormData.totalValue !== '' && receiptFormData.totalValue.toString().charAt(receiptFormData.totalValue.length - 1) != "." && receiptFormData.totalValue > 0 &&
        receiptFormData.retainage !== null && receiptFormData.retainage !== '' && receiptFormData.retainage.toString().charAt(receiptFormData.retainage.length - 1) != "." && receiptFormData.retainage > 0
        return valid;
    }

    const [isvalid, setIsValid] = useState(isValidForm());

    const selectRateType = (isNominalState) => {
        if(isvalid) {
            setReceiptFormData({
                ...receiptFormData,
                rate: {
                    ...receiptFormData.rate,
                    isNominal: isNominalState
                }
            });

            setdataView({
                ...dataView,
                title: isNominalState? 'Recibo Descontado a Tasa Nominal' : 'Recibo Descontado a Tasa Efectiva',
                stage: 1
            });
        }
    }

    useEffect(() => {
        setIsValid(isValidForm());
    }, [isValidForm, receiptFormData]);

    return (
        <Fragment>
            <div className="d-flex justify-content-center">
                <h1>Elige tu tasa</h1>
            </div>
            <div className="d-flex justify-content-center py-3">
                <img height="300px" src="/images/tasa-interes-img.png" ></img>
            </div>
            <div className="d-flex justify-content-center">
                <div className="col-9">
                {!isvalid?
                    <div class="alert alert-primary" role="alert">
                        Faltan campos a llenar!
                    </div>
                    :
                    null
                }
                </div>
            </div>
            <div className="d-flex justify-content-around">
                <button type="button" className="btn btn-primary" onClick={ () => selectRateType(true)} >Nominal</button>
                <button type="button" className="btn btn-primary" onClick={ () => selectRateType(false)}>Efectiva</button>
            </div>

            
        </Fragment>
    );
}
 
export default SelectRate;