import {  useEffect, useState } from "react";

const ExpenseForm = ({ isFinal, expensesSelected, setExpensesSelected }) => {

    const expenseReasonsForForm = !isFinal ?
    [
        {id: 1, name: 'Portes'},
        {id: 2, name: 'Fotocopias'},
        {id: 3, name: 'Comisión de Estudio'},
        {id: 4, name: 'Comisión de desembolso'},
        {id: 5, name: 'Comisión de intermediación'},
        {id: 6, name: 'Gastos de administración'},
        {id: 7, name: 'Gastos notariales'},
        {id: 8, name: 'Gastos registrales'},
        {id: 9, name: 'Seguro'},
        {id: 10, name: 'Otros gastos'},
    ]
    :
    [
        {id: 1, name: 'Portes'},
        {id: 6, name: 'Gastos de administración'},
        {id: 10, name: 'Otros gastos'},
    ];


    const [expenseToAdd, setExpenseToAdd] = useState({
        isEffective: true,
        isFinal: isFinal,
        value: '',
        idExpenseReason: 1,
        expenseReason: {
            id: 1,
            name: 'Portes'
        },
    });

    const [expenseSelectedToEditOrDelete, setExpenseSelectedToEditOrDelete] = useState({
        isEffective: true,
        isFinal: isFinal,
        value: 0,
        idExpenseReason: 1,
        expenseReason: {
            id: 1,
            name: 'Portes'
        },
        index: -1
    });

    const addExpenseHandler = () => {

        if(expenseToAdd.value !== '' && expenseToAdd.value != null || expenseToAdd.value != 0) {
            setExpensesSelected([
                ...expensesSelected,
                expenseToAdd
            ]);
        } else {
            console.log('error');
        }


    }

    const modifyExpenseToAddHandler = e => {


        let value = e.target.value;

        if (e.target.name == "isEffective") {
            value = value == "true" ? true : false;
        }

        if (e.target.name == "value") {
            value = parseFloat(value);
        }

        setExpenseToAdd({
            ...expenseToAdd,
            [e.target.name]: value,
            expenseReason: e.target.name == 'idExpenseReason' ? expenseReasonsForForm.find(er => er.id == value) : expenseToAdd.expenseReason
        })
    }

    const selectToEditOrDelete = (expense, index) => {
        if (index !== expenseSelectedToEditOrDelete.index){
            setExpenseSelectedToEditOrDelete({
                ...expense,
                index: index
            });
        } else {
            setExpenseSelectedToEditOrDelete({
                isEffective: true,
                isFinal: isFinal,
                value: '',
                idExpenseReason: 1,
                expenseReason: {
                    id: 1,
                    name: 'Portes'
                },
                index: -1
            });
        }

    }

    const deleteSelectedExpenseInList = () => {
        const expensesSelectedToManipulate = expensesSelected.filter((x, index) => index !=  expenseSelectedToEditOrDelete.index);
        setExpensesSelected(expensesSelectedToManipulate);
        setExpenseSelectedToEditOrDelete({
            isEffective: true,
            isFinal: isFinal,
            value: '',
            idExpenseReason: 1,
            expenseReason: {
                id: 1,
                name: 'Portes'
            },
            index: -1
        });
    }

    const checkIfCellIsSelected = (index) => index == expenseSelectedToEditOrDelete.index ? "cellSelected" : "";

    return (
        <div className="card card-data-form p-4 my-1">

            <form>
                <div className="d-flex justify-content-center mb-3">
                    <h3>{isFinal? 'Finales':'Iniciales'}</h3>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputExpenseOne" className="col-sm-4 col-form-label"><strong>Motivo</strong></label>
                    <div className="col-sm-8">
                        <select className="form-control" value={expenseToAdd.idExpenseReason} onChange={modifyExpenseToAddHandler} name="idExpenseReason">
                            { expenseReasonsForForm.map(er => <option key={er.id} value={er.id}>{er.name}</option>) }
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                <label htmlFor="inputExpenseTwo" className="col-sm-4 col-form-label"><strong>Valor expresado:</strong></label>
                    <div className="col-sm-4">
                        <select className="form-control" name="isEffective" value={expenseToAdd.isEffective} onChange={modifyExpenseToAddHandler}>
                            <option value={true}>En Efectivo</option>
                            <option value={false}>En Porcentaje</option>
                        </select>
                    </div>
                    <div className="col-sm-4">
                        <input className="form-control" value={expenseToAdd.value} onChange={modifyExpenseToAddHandler} name="value"/>
                    </div>
                </div>

                <div className="d-flex justify-content-around mt-3 mb-5">
                    <button type="button" className="btn btn-primary" onClick={addExpenseHandler}>Agregar</button>
                    {/* <button type="submit" className="btn btn-primary">Editar</button> */}
                    <button type="button" className="btn btn-primary" onClick={deleteSelectedExpenseInList}>Eliminar</button>
                </div>

                <div className="max-size background-table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Motivo</th>
                                <th>Expresion</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            { expensesSelected.map((e, index) => (
                                <tr key={index} onClick={() => selectToEditOrDelete(e, index)} className={`selectable ${checkIfCellIsSelected(index)}`}>
                                    <td>{e.expenseReason.name}</td>
                                    <td>{e.isEffective? 'En efectivo': 'En porcentaje'}</td>
                                    <td>{e.value}</td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;