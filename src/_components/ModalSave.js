const ModalSave = ({ showModal, changeModal, receiptFormData, setReceiptFormData }) => {
    
    const setDescription = e => {
        setReceiptFormData({
            ...receiptFormData,
            createDate: new Date(),
            [e.target.name]: e.target.value,
        });
    }

    const saveReceipt = () => {
        console.log(receiptFormData);
        changeModal();
    }

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
                            <input type="text" className="form-control" name="name" value={receiptFormData.name} onChange={setDescription}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-6 col-form-label"><strong>Descripción</strong></label>
                        <div className="col-6">
                            <input type="text" className="form-control" name="description" value={receiptFormData.description} onChange={setDescription}/>
                        </div>
                    </div>
               </div>
               <div className="modal-footer">
                   <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={changeModal}>Cerrar</button>
                   <button type="button" className="btn btn-primary" onClick={saveReceipt}>Guardar</button>
               </div>
               </div>
           </div>
       </div>
    );
}
 
export default ModalSave;