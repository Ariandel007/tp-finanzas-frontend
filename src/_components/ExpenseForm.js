
const ExpenseForm = ({ isFinal }) => {
    return (
        <div className="card card-data-form p-4 my-1">

            <form>
                <div className="d-flex justify-content-center mb-3">
                    <h3>{isFinal? 'Finales':'Iniciales'}</h3>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputExpenseOne" className="col-sm-4 col-form-label"><strong>test seleccion 1</strong></label>
                    <div className="col-sm-8">
                        <select className="form-control">
                            <option>test1</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                <label htmlFor="inputExpenseTwo" className="col-sm-4 col-form-label"><strong>test seleccion 2</strong></label>
                    <div className="col-sm-8">
                        <select className="form-control">
                            <option>test2</option>
                        </select>
                    </div>
                </div>

                <div className="d-flex justify-content-around mt-3 mb-5">
                    <button type="submit" className="btn btn-primary">Agregar</button>
                    <button type="submit" className="btn btn-primary">Editar</button>
                    <button type="submit" className="btn btn-primary">Eliminar</button>
                </div>

                <div className="max-size">
                    <table className="table background-table">
                        <thead>
                            <tr>
                                <th>campo 1</th>
                                <th>campo 2</th>
                                <th>campo 3</th>
                                <th>campo 4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>contenido 1</td>
                                <td>contenido 2</td>
                                <td>contenido 3</td>
                                <td>contenido 4</td>
                            </tr>

                            <tr>
                                <td>contenido 1</td>
                                <td>contenido 2</td>
                                <td>contenido 3</td>
                                <td>contenido 4</td>
                            </tr>

                            <tr>
                                <td>contenido 1</td>
                                <td>contenido 2</td>
                                <td>contenido 3</td>
                                <td>contenido 4</td>
                            </tr>

                            <tr>
                                <td>contenido 1</td>
                                <td>contenido 2</td>
                                <td>contenido 3</td>
                                <td>contenido 4</td>
                            </tr>

                            <tr>
                                <td>contenido 1</td>
                                <td>contenido 2</td>
                                <td>contenido 3</td>
                                <td>contenido 4</td>
                            </tr>

                            <tr>
                                <td>contenido 1</td>
                                <td>contenido 2</td>
                                <td>contenido 3</td>
                                <td>contenido 4</td>
                            </tr>

                            <tr>
                                <td>contenido 1</td>
                                <td>contenido 2</td>
                                <td>contenido 3</td>
                                <td>contenido 4</td>
                            </tr>

                            <tr>
                                <td>contenido 1</td>
                                <td>contenido 2</td>
                                <td>contenido 3</td>
                                <td>contenido 4</td>
                            </tr>

                            <tr>
                                <td>contenido 1</td>
                                <td>contenido 2</td>
                                <td>contenido 3</td>
                                <td>contenido 4</td>
                            </tr>

                            <tr>
                                <td>contenido 1</td>
                                <td>contenido 2</td>
                                <td>contenido 3</td>
                                <td>contenido 4</td>
                            </tr>

                            <tr>
                                <td>contenido 1</td>
                                <td>contenido 2</td>
                                <td>contenido 3</td>
                                <td>contenido 4</td>
                            </tr>

                            <tr>
                                <td>contenido 1</td>
                                <td>contenido 2</td>
                                <td>contenido 3</td>
                                <td>contenido 4</td>
                            </tr>

                            <tr>
                                <td>contenido 1</td>
                                <td>contenido 2</td>
                                <td>contenido 3</td>
                                <td>contenido 4</td>
                            </tr>

                            <tr>
                                <td>contenido 1</td>
                                <td>contenido 2</td>
                                <td>contenido 3</td>
                                <td>contenido 4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    );
}
 
export default ExpenseForm;