import DayPickerInput from 'react-day-picker/DayPickerInput';
import '../picker.scss'

const ReceiptGeneralData = () => {
      
    return (
        <div className="card card-data-form p-4">

            <form>
                <div className="d-flex justify-content-center mb-3">
                    <h3>Ingresar Datos</h3>
                </div>
                <div className="form-group row">
                    <label htmlFor="dateOfIssue" className="col-sm-4 col-form-label"><strong>(FE) Fecha de Emisión</strong></label>
                    <div className="col-sm-8">
                    <DayPickerInput inputProps={{ style: { width: '100%' } }}  onDayChange={day => console.log(day)} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="paymentDate" className="col-sm-4 col-form-label"><strong>(FP) Fecha de Pago</strong></label>
                    <div className="col-sm-8">
                    <DayPickerInput inputProps={{ style: { width: '100%' } }}  onDayChange={day => console.log(day)} />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="totalValue" className="col-sm-4 col-form-label"><strong>(TR)Total a Recibir</strong></label>
                    <div className="col-sm-8">
                    <input type="text" className="form-control" id="totalValue" name="totalValue" placeholder="Ingrese monto"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="retainage" className="col-sm-4 col-form-label"><strong>(Rt)Retención</strong></label>
                    <div className="col-sm-8">
                    <input type="text" className="form-control" id="retainage" name="retainage" placeholder="Ingrese monto"/>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <label class="btn btn-light active">
                            <input type="radio" name="options" id="option1" autocomplete="off" checked/> Dólares
                        </label>
                        <label class="btn btn-light">
                            <input type="radio" name="options" id="option3" autocomplete="off"/> Soles
                        </label>
                    </div>
                </div> 
            </form>
        </div>
    );
}
 
export default ReceiptGeneralData;