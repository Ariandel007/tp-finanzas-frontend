import {
    SAVE_RECEIPT,
    SAVE_RECEIPT_SUCCESS,
    SAVE_RECEIPT_ERROR,
    LIST_RECEIPTS,
    LIST_RECEIPTS_SUCCESS,
    LIST_RECEIPTS_ERROR

} from '../types';

const initialState = {
    receipt: null,
    receiptSelected: null,
    loading: false,
    receiptList: [],
    totalPages: 1,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch (action.type) {
        case SAVE_RECEIPT:
        case LIST_RECEIPTS:
            return {
                ...state,
                loading: true,
            }

        case SAVE_RECEIPT_SUCCESS:
            return {
                ...state,
                loading: false,
                receipt: action.payload.content,
            }
        
        case SAVE_RECEIPT_ERROR:
        case LIST_RECEIPTS_ERROR:
            return {
                ...state,
                loading: false
            }
        case LIST_RECEIPTS_SUCCESS:
            return {
                ...state,
                loading: false,
                receiptList: action.payload.content,
                totalPages: action.payload.totalPages
            }

        default:
            return state;
    }
}