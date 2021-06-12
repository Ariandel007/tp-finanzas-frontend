import { Fragment, useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import RateAndTermForm from "./RateAndTermForm";
import ReceiptGeneralData from "./ReceiptGeneralData";
import SelectRate from "./SelectRate";

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
        paymentDate: 0.0,
        dateOfIssue: '',
        rate: {
            isCommercialYear: false,
            isNominal: false,
            percentage: true
        },
        rateTerm: {
            id: 0,
            name: '',
            numberDays: 0,
        },
        compoundingPeriod: {
            id: 0,
            name: '',
            numberDays: 0,
        },
        expenses: [
            // {
            //     isEffective: true,
            //     isFinal: true,
            //     value: 0.0,
            //     expenseReason: {
            //         id: 0,
            //         name: '',
            //     }
            // },
        ]
    });

    useEffect(()=> {
        console.log('Es nominal', receiptFormData.rate.isNominal);
        console.log('Stage', dataView.stage);
    },
    [receiptFormData.rate.isNominal, dataView.stage]);

    const contentPage = () => {

        if (dataView.stage == 0) {
            return (
                <Fragment>
                    <div className="col-12 col-lg-6">
                        <ReceiptGeneralData/>
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
                        <RateAndTermForm dataView={dataView} setdataView={setdataView}/>
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
                        <ExpenseForm isFinal={false}/>
                    </div>

                    <div className="col-12 col-lg-6">
                        <ExpenseForm isFinal={true}/>
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