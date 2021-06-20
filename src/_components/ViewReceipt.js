import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Results from "./Results";
import { getReceiptByIdAction } from "../actions/receipt-action";
import calculateResults from "../utils/calculateResults";

const ViewReceipt = () => {
    const isInitialMount = useRef(true);

    const dispatch = useDispatch();

    const params = useParams();

    const idReceipt = params.idReceipt;

    const receiptSelected = useSelector(state => state.receipt.receiptSelected);

    const getReceiptSelected = useCallback((id) => dispatch(getReceiptByIdAction(id)), [dispatch]);


    const [receiptLoad, setReceiptLoad] = useState(false);

    useEffect(() => {
        getReceiptSelected(idReceipt)
    }, [getReceiptSelected, idReceipt]);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else {
            setReceiptLoad(true);
         }
    }, [receiptSelected])

    const resultData = (receiptData) => {
        receiptData.paymentDate = new Date(receiptData.paymentDate);
        receiptData.rate.discountDate = new Date(receiptData.rate.discountDate);
        return calculateResults(receiptData)
    };

    return (
        <div>
            <div className="d-flex justify-content-center my-5">
                <h1>Recibo</h1>
            </div>

            <div className="row">
            {
                receiptSelected ?
                <Results calculateReceipt={resultData(receiptSelected)}/>
                :
                null
            }
                {/* <Results calculateReceipt={receiptSelected}/> */}
            </div>
        </div>
    );
}
 
export default ViewReceipt;