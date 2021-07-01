const Results = ({ calculateReceipt }) => {
    return (
        <div className="">
            <div className="card card-data-form p-4">

                <div className="col-12">
                    <div className="row">

                        <div className="col-12 col-md-6">
                            <div className="form-group row">
                                <label className="col-6 col-form-label"><strong>(TEA) Tasa Efectiva Anual</strong></label>
                                <div className="col-6">
                                    <input type="text" readOnly className="form-control" value={calculateReceipt.ratePercentage}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group row">
                                <label className="col-6 col-form-label"><strong>(CI) Costes Iniciales Totales</strong></label>
                                <div className="col-6">
                                    <input type="text" readOnly className="form-control" value={calculateReceipt.sumExpensesStart}/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="col-12">
                    <div className="row">

                        <div className="col-12 col-md-6">
                            <div className="form-group row">
                                <label className="col-6 col-form-label"><strong>(ND) Número de días transcurridos</strong></label>
                                <div className="col-6">
                                    <input type="text" readOnly className="form-control" value={calculateReceipt.daysPassed}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group row">
                                <label className="col-6 col-form-label"><strong>(VNET) Valor Neto</strong></label>
                                <div className="col-6">
                                    <input type="text" readOnly className="form-control" value={calculateReceipt.netWorth}/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="col-12">
                    <div className="row">

                        <div className="col-12 col-md-6">
                            <div className="form-group row">
                                <label className="col-6 col-form-label"><strong>(TE) Tasa Efectiva a ND días</strong></label>
                                <div className="col-6">
                                    <input type="text" readOnly className="form-control" value={calculateReceipt.rateByDays}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group row">
                                <label className="col-6 col-form-label"><strong>(VR) Valor Total Recibo</strong></label>
                                <div className="col-6">
                                    <input type="text" readOnly className="form-control" value={calculateReceipt.totalValueToReceive}/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>


                <div className="col-12">
                    <div className="row">

                        <div className="col-12 col-md-6">
                            <div className="form-group row">
                                <label className="col-6 col-form-label"><strong>(d) Tasa Descontada a ND días</strong></label>
                                <div className="col-6">
                                    <input type="text" readOnly className="form-control" value={calculateReceipt.discountedRate}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group row">
                                <label className="col-6 col-form-label"><strong>(CF) Costes Finales Totales</strong></label>
                                <div className="col-6">
                                    <input type="text" readOnly className="form-control" value={calculateReceipt.sumExpensesEnd}/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>


                <div className="col-12">
                    <div className="row">

                        <div className="col-12 col-md-6">
                            <div className="form-group row">
                                <label className="col-6 col-form-label"><strong>(D) Descuento</strong></label>
                                <div className="col-6">
                                    <input type="text" readOnly className="form-control" value={calculateReceipt.discount}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group row">
                                <label className="col-6 col-form-label"><strong>(VE) Valor Total a Entregar</strong></label>
                                <div className="col-6">
                                    <input type="text" readOnly className="form-control" value={calculateReceipt.totalValueToDeliver}/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="col-12">
                    <div className="row">

                        <div className="col-12 col-md-6">
                            <div className="form-group row">
                                <label className="col-6 col-form-label"><strong>(Rt) Retención</strong></label>
                                <div className="col-6">
                                    <input type="text" readOnly className="form-control" value={calculateReceipt.retainage}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group row">
                                <label className="col-6 col-form-label"><strong>(TCEA) Tasa de Coste Efectiva Anual</strong></label>
                                <div className="col-6">
                                    <input type="text" readOnly className="form-control" value={calculateReceipt.tcea}/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>


            </div>
            
        </div>
        
    );
}
 
export default Results;