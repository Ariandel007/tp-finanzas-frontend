import DayPickerInput from 'react-day-picker/DayPickerInput';
import '../picker.scss'

import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

import 'moment/locale/es';

const RateAndTermForm = ({ dataView, setdataView, receiptFormData, setReceiptFormData }) => {

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


    const onSelectCompoundingPeriodHandler = e => {
        const compoundingPeriodSelectedList = compoundingPeriods.find(r => r.id == e.target.value);

        setReceiptFormData({
            ...receiptFormData,
            compoundingPeriod: compoundingPeriodSelectedList
        })
    }

    const onChangeSelectCompoundingPeriod = e => {
        let value = e.target.value.toString();

        if (value.length == 0) {
            value = '1';
        }
        
        setReceiptFormData({
            ...receiptFormData,
            compoundingPeriod: {
                ...receiptFormData.compoundingPeriod,
                numberDays: parseInt(value)
            } 
        })
    }

    const isValid = () => {
        const  valid = receiptFormData.compoundingPeriod.numberDays > 0 && receiptFormData.rate.percentage > 0 && receiptFormData.rateTerm.numberDays > 0;
        return valid;
    }
    
    const changeView = stage => {
        if (stage == 2) {
            if(isValid()) {
                setdataView({
                    ...dataView,
                    title: 'Costes/Gastos',
                    stage: stage
                });
            }
        } else {
            setdataView({
                ...dataView,
                title: 'Costes/Gastos',
                stage: stage
            });
        }
        
        
    }

    const onChangeCommercialYear = e => {
        setReceiptFormData({
            ...receiptFormData,
            rate: {
                ...receiptFormData.rate,
                [e.target.name]: e.target.value === "true" ? true : false,
            }
        });
    }

    const onChangeRateInput = e => {

        let value = e.target.value;

        value = value.toString();

        if (value.length > 0) {
            if(value.charAt(value.length - 1) == ".") {
                console.log('termina en punto');
            } else {
                value = parseFloat(value);
                if (isNaN(value)) {
                    value='';
                }
            }
        }

        setReceiptFormData({
            ...receiptFormData,
            rate: {
                ...receiptFormData.rate,
                [e.target.name]: value,
            }
        });
    }

    const onChangeRateTermObject = rateTermObj => {
        setReceiptFormData({
            ...receiptFormData,
            rateTerm: rateTermObj
        })
    }

    const onSelectRateTermHandler = e => {
        const rateTermSelectedInList = rateTerms.find(r => r.id == e.target.value);
        // setRateTermSelected(rateTermSelectedInList);
        onChangeRateTermObject(rateTermSelectedInList);
    }

    const onChangeRateTermDays = e => {
        let value = e.target.value.toString();

        if (value.length == 0) {
            value = '1';
        }

        setReceiptFormData({
            ...receiptFormData,
            rateTerm: {
                ...receiptFormData.rateTerm,
                numberDays: parseInt(e.target.value)
            } 
        })
    }

    const onRateDateDiscount = dateDiscount => {
        setReceiptFormData({
            ...receiptFormData,
            rate: {
                ...receiptFormData.rate,
                discountDate: dateDiscount
            }
        });
    }

    const limitDatesInPicker = () => {
        const dt = new Date(receiptFormData.paymentDate.getTime());
        dt.setDate( dt.getDate() - 1 );
        return dt;
    }

    return (
        <div className="card card-data-form p-4">

            <form>
                <div className="d-flex justify-content-center mb-3">
                    <h3>Tasa y Plazo</h3>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label"><strong>(DA) Días por año</strong></label>
                    <div className="col-sm-8">
                        <select className="form-control" name="isCommercialYear" value={receiptFormData.rate.isCommercialYear} onChange={onChangeCommercialYear}>
                            <option value={true}>360 días</option>
                            <option value={false}>365 días</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label"><strong>(PT) Plazo de Tasa</strong></label>
                    <div className="col-sm-4">
                        <select className="form-control" onChange={onSelectRateTermHandler} value={receiptFormData.rateTerm.id}>
                            {
                                rateTerms.map(rateTerm => (<option key={rateTerm.id} value={rateTerm.id}> {rateTerm.name} </option>))
                            }
                        </select>
                    </div>
                    <div className="col-sm-4">
                        <input disabled={receiptFormData.rateTerm.name !== 'Especial'} type="text" className="form-control" id="retainage" name="numberDays" value={receiptFormData.rateTerm.numberDays} onChange={onChangeRateTermDays}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label"><strong>{receiptFormData.rate.isNominal? '(TN) Tasa Nominal' : '(TE) Tasa Efectiva'}</strong></label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="percentage" name="percentage" value={receiptFormData.rate.percentage} onChange={onChangeRateInput}/>
                    </div>
                    <div className="col-sm-2">
                        <input type="text" readOnly className="form-control-plaintext" value="%"/>
                    </div>
                </div>

                {
                    receiptFormData.rate.isNominal ?
                    (
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label"><strong>(PC) Periodo de Capital.</strong></label>
                        <div className="col-sm-4">
                            <select className="form-control" onChange={onSelectCompoundingPeriodHandler} value={receiptFormData.compoundingPeriod.id}>
                                {
                                    compoundingPeriods.map(compoundingPeriod => (<option key={compoundingPeriod.id} value={compoundingPeriod.id}> {compoundingPeriod.name} </option>))
                                }
                            </select>
                        </div>
                        <div className="col-sm-4">
                            <input disabled={receiptFormData.compoundingPeriod.name !== 'Especial'} type="text" className="form-control" id="retainage" name="numberDays" value={receiptFormData.compoundingPeriod.numberDays} onChange={onChangeSelectCompoundingPeriod}/>
                        </div>
                    </div>
                    )
                    :
                    null
                }
                
                <div className="form-group row">
                    <label htmlFor="dateOfIssue" className="col-sm-4 col-form-label"><strong>(FD) Fecha de Descuento</strong></label>
                    <div className="col-sm-8">
                        <DayPickerInput
                        dayPickerProps={{
                            locale: 'es',
                            localeUtils: MomentLocaleUtils,
                            disabledDays: {
                                after: limitDatesInPicker(),
                            }
                        }}
                        formatDate={formatDate}
                        parseDate={parseDate}
                        inputProps={{ style: style }} value={receiptFormData.rate.discountDate} onDayChange={day => onRateDateDiscount(day)} />
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