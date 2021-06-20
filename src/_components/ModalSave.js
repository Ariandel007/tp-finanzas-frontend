import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createReceipt } from "../actions/receipt-action";

const ModalSave = ({ showModal, changeModal, receiptFormData, setReceiptFormData }) => {
    
    const dispatch = useDispatch();

    const saveReceiptAction = receiptToSave => dispatch(createReceipt(receiptToSave));

    const receiptSavedInGlobalState = useSelector(state => state.receipt.receipt);

    const history = useHistory();

    const isInitialMount = useRef(true);

    const [loading, setLoading] = useState(false);


    const onChangeHandler = e => {
        setReceiptFormData({
            ...receiptFormData,
            createDate: new Date(),
            [e.target.name]: e.target.value,
        });
    }

    const saveReceipt = () => {
        console.log(receiptFormData);
        saveReceiptAction(receiptFormData);
        setLoading(true);
    }

    useEffect(() => {
        if (isInitialMount.current) {
           isInitialMount.current = false;
        } else {
            setLoading(false);
            history.push('/historial');
        }
    }, [history, receiptSavedInGlobalState]);

    return (
       <div className="myModal" style={showModal} id="exampleModal" tabIndex="1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div className="modal-dialog" role="document">
               <div className="modal-content">
               <div className="modal-header">
                   <h5 className="modal-title" id="exampleModalLabel">Guardar</h5>
                   <button type="button" onClick={changeModal} className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                   </button>
               </div>
               <div className="modal-body">
                    <div className="form-group row">
                        <label className="col-6 col-form-label"><strong>Nombre</strong></label>
                        <div className="col-6">
                            <input type="text" className="form-control" name="name" value={receiptFormData.name} onChange={onChangeHandler}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-6 col-form-label"><strong>Descripción</strong></label>
                        <div className="col-6">
                            <input type="text" className="form-control" name="description" value={receiptFormData.description} onChange={onChangeHandler}/>
                        </div>
                    </div>
               </div>
               <div className="modal-footer">
                   <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={changeModal} disabled={loading}>Cerrar</button>
                   <button type="button" className="btn btn-primary" onClick={saveReceipt} disabled={loading}>
                        {loading? <span className="spinner-grow spinner-grow-sm"></span>: null}
                        Guardar
                   </button>
               </div>
               </div>
           </div>
       </div>
    );
}
 
export default ModalSave;