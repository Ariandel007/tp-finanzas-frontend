import DayPickerInput from 'react-day-picker/DayPickerInput';
import '../picker.scss'
import { useState } from "react"

const RateAndTermForm = ({ dataView, setdataView }) => {

    const style = {
        'width': '100%',
        'padding': '0.3rem',
        'boxSizing': 'border-box',
        'borderRadius': '4px',
        'border': 'none'
    }

    const rateTerms = [
        {id: 1, name: 'Diario', numberDays: 1,},
        {id: 2, name: 'Quincenal', numberDays: 15,},
        {id: 3, name: 'Mensual', numberDays: 30,},
        {id: 4, name: 'Bimestral', numberDays: 60,},
        {id: 5, name: 'Trimestral', numberDays: 90,},
        {id: 6, name: 'Cuatrimestral', numberDays: 120,},
        {id: 7, name: 'Semestral', numberDays: 180,},
        {id: 8, name: 'Anual', numberDays: 360,},
        {id: 9, name: 'Especial', numberDays: 1}
    ]

    const compoundingPeriods = [
        {id: 1, name: 'Diario', numberDays: 1,},
        {id: 2, name: 'Quincenal', numberDays: 15,},
        {id: 3, name: 'Mensual', numberDays: 30,},
        {id: 4, name: 'Bimestral', numberDays: 60,},
        {id: 5, name: 'Trimestral', numberDays: 90,},
        {id: 6, name: 'Cuatrimestral', numberDays: 120,},
        {id: 7, name: 'Semestral', numberDays: 180,},
        {id: 8, name: 'Anual', numberDays: 360,},
        {id: 9, name: 'Especial', numberDays: 1}
    ]

    const [rateTermSelected, setRateTermSelected] = useState({id: 8, name: 'Anual', numberDays: 360});

    const onSelectRateTermHandler = e => {
        const rateTermSelectedInList = rateTerms.find(r => r.id == e.target.value);
        setRateTermSelected(rateTermSelectedInList)
    }

    const onChangeRateTermDays = e => {
        setRateTermSelected({
            ...rateTermSelected,
            numberDays: e.target.value
        });
    }
////
    const [compoundingPeriodSelected, setCompoundingPeriodSelected] = useState({id: 8, name: 'Anual', numberDays: 360});

    const onSelectCompoundingPeriodHandler = e => {
        const compoundingPeriodSelectedList = compoundingPeriods.find(r => r.id == e.target.value);
        setCompoundingPeriodSelected(compoundingPeriodSelectedList)
    }

    const onChangeSelectCompoundingPeriod = e => {
        setCompoundingPeriodSelected({
            ...compoundingPeriodSelected,
            numberDays: e.target.value
        });
    }

    ///

    const changeView = stage => setdataView({
        ...dataView,
        title: 'Costes/Gastos',
        stage: stage
    });

    

    return (
        <div className="card card-data-form p-4">

            <form>
                <div className="d-flex justify-content-center mb-3">
                    <h3>Tasa y Plazo</h3>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label"><strong>(DA) Días por año</strong></label>
                    <div className="col-sm-8">
                        <select className="form-control">
                            <option>365 días</option>
                            <option>360 días</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label"><strong>(PT) Plazo de Tasa</strong></label>
                    <div className="col-sm-4">
                        <select className="form-control" onChange={onSelectRateTermHandler} value={rateTermSelected.id}>
                            {
                                rateTerms.map(rateTerm => (<option key={rateTerm.id} value={rateTerm.id}> {rateTerm.name} </option>))
                            }
                        </select>
                    </div>
                    <div className="col-sm-4">
                        <input disabled={rateTermSelected.id != 9} type="text" className="form-control" id="retainage" name="numberDays" value={rateTermSelected.numberDays} onChange={onChangeRateTermDays}/>
                    </div>
                </div>

                <div className="form-group row">
                    {/* ACA AÑADIR ESTRUCTIRA DE CONTROL CUANDO SEA NOMIMAL O NO */}
                    <label className="col-sm-4 col-form-label"><strong>(TE) Tasa Nominal</strong></label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="percentage" name="percentage"/>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" readOnly className="form-control-plaintext" value="%"/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label"><strong>(PC) Periodo de Capital.</strong></label>
                    <div className="col-sm-4">
                        <select className="form-control" onChange={onSelectCompoundingPeriodHandler} value={compoundingPeriodSelected.id}>
                            {
                                compoundingPeriods.map(compoundingPeriod => (<option key={compoundingPeriod.id} value={compoundingPeriod.id}> {compoundingPeriod.name} </option>))
                            }
                        </select>
                    </div>
                    <div className="col-sm-4">
                        <input disabled={compoundingPeriodSelected.id != 9} type="text" className="form-control" id="retainage" name="numberDays" value={compoundingPeriodSelected.numberDays} onChange={onChangeSelectCompoundingPeriod}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="dateOfIssue" className="col-sm-4 col-form-label"><strong>(FD) Fecha de Descuento</strong></label>
                    <div className="col-sm-8">
                        <DayPickerInput inputProps={{ style: style }}  onDayChange={day => console.log(day)} />
                    </div>
                </div>

                <div className="d-flex justify-content-around">
                    <button type="button" className="btn btn-primary" onClick={() => changeView(0)}>Atrás</button>
                    <button type="button" className="btn btn-primary" onClick={() => changeView(2)}>Siguiente</button>
                </div>

            </form>
        </div>
    );
}
 
export default RateAndTermForm;