
import axiosClient from '../config/axios-client';

import {
    LIST_RECEIPTS,
    LIST_RECEIPTS_SUCCESS ,
    LIST_RECEIPTS_ERROR,
    SAVE_RECEIPT,
    SAVE_RECEIPT_SUCCESS,
    SAVE_RECEIPT_ERROR,
} from '../types';

export function getPageReceiptAction(pagination) {
    return async (dispatch) => {
        dispatch(getPage());

        const page = pagination.page;
        const size = pagination.size;
        try {
            const res = await axiosClient.get(`/receipt/findAllMyReceipts/${page}/${size}`);

            const responsePagination = res.data;

            const payloadToSend ={
                totalPages: responsePagination.totalPages,
                content: responsePagination.content
            }

            dispatch(getPageSuccess(payloadToSend));

        } catch (error) {
            dispatch(getPageError());
        }
    }
}

export function createReceipt(receiptToCreate) {
    return async (dispatch) => {
        dispatch(saveReceipt());
        try {
            const res = await axiosClient.post(`/receipt/create`, receiptToCreate);

            const receipt = res.data;

            dispatch(saveReceiptSuccess(receipt));

            
        } catch (error) {
            dispatch(saveReceiptError());
        }
    }
}


// GET PAGE RECEIPT
const getPage = () => ({
    type: LIST_RECEIPTS
});

const getPageSuccess = (pageContentReceipts) => ({
    type: LIST_RECEIPTS_SUCCESS,
    payload: pageContentReceipts
});

const getPageError = () => ({
    type: LIST_RECEIPTS_ERROR
});

// CREATE RECEIPT
const saveReceipt = () => ({
    type: SAVE_RECEIPT
});

const saveReceiptSuccess = (receiptToSave) => ({
    type: SAVE_RECEIPT_SUCCESS,
    payload: receiptToSave
});

const saveReceiptError = () => ({
    type: SAVE_RECEIPT_ERROR
});