
// {
//     isDolar: false,
//     description: '',
//     name: '',
//     retainage: 0.0,
//     totalValue: 0.0,
//     paymentDate: new Date(),
//     dateOfIssue: new Date(),
//     rate: {
//         isCommercialYear: true,
//         isNominal: false,
//         percentage: 0,
//         discountDate: new Date()
//     },
//     rateTerm: {
//         id: 8,
//         name: 'Anual',
//         numberDays: 360
//     },
//     compoundingPeriod: {
//         id: 0,
//         name: '',
//         numberDays: 0,
//     },
//     expenses: [

//     ]
// }

const calculateResults = (receiptFormData) => {

    const result = {};

    const daysAtYear = receiptFormData.rate.isCommercialYear ? 360 : 365;

    if (receiptFormData.rate.isNominal == false) {
        // MOSTRAMOS LA TEA
        const rateFixed = receiptFormData.rate.percentage * (1/100)
        const ratePercentage = Math.pow((1 + rateFixed), daysAtYear/receiptFormData.rateTerm.numberDays) - 1;
        result.ratePercentage = (ratePercentage*100).toFixed(7) + '%';

        // CALCULAMOS EL NUMERO DE DIAS TRANSCURRIDOS
          
        const DifferenceInTime = receiptFormData.paymentDate.getTime() - receiptFormData.rate.discountDate.getTime();
          
        const daysPassed = DifferenceInTime / (1000 * 3600 * 24);

        result.daysPassed = daysPassed;

        // CALCULAMOS LA TASA EFECTIVA SEGUN LOS DIAS TRANSCURRIDOS

        const tep2 = Math.pow((1 + ratePercentage), daysPassed/360) - 1;

        result.rateByDays = (tep2*100).toFixed(7) + '%';

        // CALCULAMOS LA TASA DESCONTADA SEGUN LOS DIAS TRANSCURRIDOS
        const discountedRate = (tep2)/(1 + tep2);

        result.discountedRate = (discountedRate*100).toFixed(7) + '%';

        //CALCULAMOS EL DESCUENTO
        const totalValue = receiptFormData.totalValue;
        const discount = totalValue*discountedRate;

        result.discount = discount.toFixed(2);


        //RETENCION
        const retainage = receiptFormData.retainage;
        result.retainage = retainage.toFixed(2);


        // SUMA DE GASTOS INICIALES TOTALES
        const expensesStart = receiptFormData.expenses.filter(x => x.isFinal == false);
        const expensesEnd = receiptFormData.expenses.filter(x => x.isFinal == true);

        const sumExpensesStart = expensesStart.reduce((accumulator, currentValue) =>  accumulator + currentValue.value, 0);

        result.sumExpensesStart = sumExpensesStart.toFixed(2);

        //VALOR NETO
        const netWorth = totalValue - discount;

        result.netWorth = netWorth.toFixed(2);

        // VALOR TOTAL A RECIBIR
        const totalValueToReceive = netWorth -retainage - sumExpensesStart;
        result.totalValueToReceive = totalValueToReceive.toFixed(2);

        //SUMA DE GASTOS FINALES TOTALES
        const sumExpensesEnd = expensesEnd.reduce((accumulator, currentValue) =>  accumulator + currentValue.value, 0);
        result.sumExpensesEnd = sumExpensesEnd.toFixed(2);

        // VALOR TOTAL A ENTREGAR
        const totalValueToDeliver = totalValue - retainage + sumExpensesEnd;
        result.totalValueToDeliver = totalValueToDeliver.toFixed(2);

        // CALCULAR EL COSTE EFECTIVO ANUAL
        const tcea = Math.pow((parseFloat(totalValueToDeliver.toFixed(2))/parseFloat(totalValueToReceive.toFixed(2))), daysAtYear/daysPassed) - 1;
        result.tcea = (tcea*100).toFixed(7) + '%';;

        return result;
    } 

    return {}
}

export default calculateResults;

// {
//     "ratePercentage": "5.0711764%",
//     "daysPassed": 5,
//     "rateByDays": "0.0687289%",
//     "discountedRate": "0.0686817%",
//     "discount": "0.89",
//     "retainage": "112.00",
//     "sumExpensesStart": "12.00",
//     "netWorth": "1299.11",
//     "totalValueToReceive": "1175.11",
//     "sumExpensesEnd": "23.00",
//     "totalValueToDeliver": "1211.00",
//     "tcea": "799.0634429%"
// }