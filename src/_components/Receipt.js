import { Fragment, useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import RateAndTermForm from "./RateAndTermForm";
import ReceiptGeneralData from "./ReceiptGeneralData";
import SelectRate from "./SelectRate";
import Results from "./Results";
import calculateResults from "../utils/calculateResults";

const Receipt = () => {

    const [dataView, setdataView] = useState({
        title: 'Datos del Recibo por Honorarios',
        stage: 0
    });

    const [receiptFormData, setReceiptFormData] = useState({
        isDolar: false,
        description: '',
        name: '',
        retainage: 0.0,
        totalValue: 0.0,
        paymentDate: new Date(),
        dateOfIssue: new Date(),
        rate: {
            isCommercialYear: true,
            isNominal: false,
            percentage: 0,
            discountDate: new Date()
        },
        rateTerm: {
            id: 8,
            name: 'Anual',
            numberDays: 360
        },
        compoundingPeriod: {
            id: 1,
            name: 'Diario',
            numberDays: 1,
        },
        expenses: [

        ]
    });

    const [expensesSelectedStart, setExpensesSelectedStart] = useState([]);

    const [expensesSelectedEnd, setExpensesSelectedEnd] = useState([]);

    const resetFormData = () => {
        setReceiptFormData({
            isDolar: false,
            description: '',
            name: '',
            retainage: 0.0,
            totalValue: 0.0,
            paymentDate: new Date(),
            dateOfIssue: new Date(),
            rate: {
                isCommercialYear: true,
                isNominal: false,
                percentage: 0,//cuando se envie se debe poner entre 100
                discountDate: new Date()
            },
            rateTerm: {
                id: 8,
                name: 'Anual',
                numberDays: 360
            },
            compoundingPeriod: {
                id: 0,
                name: '',
                numberDays: 0,
            },
            expenses: [
    
            ]
        });

        setdataView({
            title: 'Datos del Recibo por Honorarios',
            stage: 0
        });

        setExpensesSelectedStart([]);
        setExpensesSelectedEnd([]);
    }

    const [calculateReceipt, setCalculateReceipt] = useState({});

    useEffect(()=> {
        if (dataView.stage === 3) {
            const calc = calculateResults(receiptFormData);
            setCalculateReceipt(calc);
        }
    },
    [dataView.stage, receiptFormData]);

    const showResults = () => {

        setdataView({
            title: 'Resultados',
            stage: 3
        });

        setReceiptFormData({
            ...receiptFormData,
            expenses: [
                ...receiptFormData.expenses,
                ...expensesSelectedStart,
                ...expensesSelectedEnd
            ]
        });
    }

    const backTasa = () => setdataView({
        title: receiptFormData.rate.isNominal ? 'Recibo Descontado a Tasa Nominal' : 'Recibo Descontado a Tasa Efectiva',
        stage: 1
    });

    const contentPage = () => {

        if (dataView.stage == 0) {
            return (
                <Fragment>
                    <div className="col-12 col-lg-6">
                        <ReceiptGeneralData receiptFormData={receiptFormData} setReceiptFormData={setReceiptFormData}/>
                    </div>

                    <div className="col-12 col-lg-6">
                        <SelectRate dataView={dataView} setdataView={setdataView} receiptFormData={receiptFormData} setReceiptFormData={setReceiptFormData}/>
                    </div>
                </Fragment>
            );
        }

        if (dataView.stage == 1) {
            return (
                <Fragment>
                    <div className="col-12 col-lg-6">
                        <RateAndTermForm dataView={dataView} setdataView={setdataView} receiptFormData={receiptFormData} setReceiptFormData={setReceiptFormData}/>
                    </div>

                    <div className="col-12 col-lg-6">
                    <div className="d-flex justify-content-center pt-5">
                        <img height="400px" src="/images/mano-tasa-img.png"></img>
                    </div>
                    </div>
                </Fragment>
            );
        }

        if (dataView.stage == 2) {
            return (
                <Fragment>
                    <div className="col-12 col-lg-6">
                        <ExpenseForm isFinal={false} expensesSelected={expensesSelectedStart} setExpensesSelected={setExpensesSelectedStart}/>
                    </div>

                    <div className="col-12 col-lg-6">
                        <ExpenseForm isFinal={true} expensesSelected={expensesSelectedEnd} setExpensesSelected={setExpensesSelectedEnd}/>
                    </div>

                    <div className="col-12">
                        <div className="d-flex justify-content-center mt-3">
                            <button type="button" className="btn btn-primary mr-3" onClick={backTasa}>Atrás</button>
                            <button type="button" className="btn btn-primary ml-3" onClick={showResults} >Mostrar</button>
                        </div>
                    </div>
                </Fragment>
            );
        }

        if (dataView.stage == 3) {
            return (
                <Fragment>
                    <div className="col-12">
                        <Results calculateReceipt={calculateReceipt}/>
                    </div>

                    <div className="col-12">
                        <div className="d-flex justify-content-center mt-3">
                            <button type="button" className="btn btn-primary mr-3">Guardar</button>
                            <button type="button" className="btn btn-primary ml-3" onClick={resetFormData} >Nuevo</button>
                        </div>
                    </div>
                </Fragment>
            );
        }

        return null;
    }

    return (
        <Fragment>
            <div className="d-flex justify-content-center my-5">
                <h1>{dataView.title}</h1>
            </div>

            <div className="row">
                { contentPage() }
            </div>
        </Fragment>
    );}
 
export default Receipt;