
import axiosClient from '../config/axios-client';

import {
    LIST_RECEIPTS,
    LIST_RECEIPTS_SUCCESS ,
    LIST_RECEIPTS_ERROR,
} from '../types';

export function getPageReceiptAction(pagination) {
    return async (dispatch) => {
        dispatch(getPage());

        const page = pagination.page;
        const size = pagination.size;
        try {
            const res = await axiosClient.get(`/receipt/findAllMyReceipts/${page}/${size}`);

            const responsePagination = res.data;

            dispatch(getPageSuccess(responsePagination.content));

        } catch (error) {
            dispatch(getPageError());
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

