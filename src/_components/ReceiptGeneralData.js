import { useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import '../picker.scss'

const ReceiptGeneralData = ({ receiptFormData, setReceiptFormData }) => {

    const style = {
        'width': '100%',
        'padding': '0.3rem',
        'boxSizing': 'border-box',
        'borderRadius': '4px',
        'border': 'none'
    }

    const changeAttribute = (attribute, value) => {
        setReceiptFormData({
            ...receiptFormData,
            [attribute]: value
        });
    }
    const onChangeInput = e => {
        let name = e.target.name;
        let value = parseFloat(e.target.value);
        

        changeAttribute(name, value);
    }

    const [isDolar, setIsDolar] = useState(false);

    const onSwitchHandler = () => {
        const newMoney = !isDolar;
        setIsDolar(newMoney);
    }

    const checkActive = (moneyConditional) =>  moneyConditional? 'active' : '';

    return (
        <div className="card card-data-form p-4">

            <form>
                <div className="d-flex justify-content-center mb-3">
                    <h3>Ingresar Datos</h3>
                </div>
                <div className="form-group row">
                    <label htmlFor="dateOfIssue" className="col-sm-4 col-form-label"><strong>(FE) Fecha de Emisión</strong></label>
                    <div className="col-sm-8">
                    <DayPickerInput inputProps={{ style: style }} value={receiptFormData.dateOfIssue}  onDayChange={day => changeAttribute('dateOfIssue', day)} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="paymentDate" className="col-sm-4 col-form-label"><strong>(FP) Fecha de Pago</strong></label>
                    <div className="col-sm-8">
                    <DayPickerInput inputProps={{ style: style }} value={receiptFormData.paymentDate}  onDayChange={day => changeAttribute('paymentDate', day)} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="totalValue" className="col-sm-4 col-form-label"><strong>(TR)Total a Recibir</strong></label>
                    <div className="col-sm-8">
                    <input type="text" className="form-control" id="totalValue" name="totalValue" value={receiptFormData.totalValue} onChange={onChangeInput} placeholder="Ingrese monto"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="retainage" className="col-sm-4 col-form-label"><strong>(Rt)Retención</strong></label>
                    <div className="col-sm-8">
                    <input type="text" className="form-control" id="retainage" name="retainage" value={receiptFormData.retainage} onChange={onChangeInput} placeholder="Ingrese monto"/>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className={`btn btn-light ${checkActive(isDolar)}`}>
                            <input type="radio" name="options" id="option1" autoComplete="off" onClick={onSwitchHandler}/> Dólares
                        </label>
                        <label className={`btn btn-light ${checkActive(!isDolar)}`}>
                            <input type="radio" name="options" id="option3" autoComplete="off" onClick={onSwitchHandler}/> Soles
                        </label>
                    </div>
                </div> 
            </form>
        </div>
    );
}
 
export default ReceiptGeneralData;