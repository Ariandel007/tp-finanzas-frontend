import { sort, ascending } from "d3-array";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPageReceiptAction } from "../actions/receipt-action";

const Table = () => {

    const receiptsToList = useSelector(state => state.receipt.receiptList);

    const dispatch = useDispatch();

    const getReceipts = pagination => dispatch(getPageReceiptAction(pagination));

    const [currentPage, setCurrentPage] = useState({
        page: 0,
        size: 20,
    });

    // const sortingAscendingByAttribute = (array, atribute) => {
    //     const ascedingData = sort(array, (a, b) => ascending(a[atribute], b[atribute]))
    // }

    // const sortingDescendingByAttribute = (array, atribute) => {
    //     const descedingData = sort(array, (a, b) => ascending(a[atribute], b[atribute]))
    // }

    const formatDate = d => {
        const date = new Date(d);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        return day.toString() + '/' + month.toString() + '/' + year.toString();
    }

    useEffect(() => {
        getReceipts(currentPage);
    }, [currentPage, getReceipts]);

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>
                        <div className="row">
                            <div className="col-auto">
                                Título
                            </div>
                            {/* <div className="col-auto">
                                <div className="my-2 triangulo arriba"><div></div></div>
                            </div> */}
                        </div>
                    </th>
                    <th>
                        <div className="row">
                            <div className="col-auto">
                                Descripción
                            </div>
                            {/* <div className="col-auto">
                                <div className="my-2 triangulo arriba"><div></div></div>
                            </div> */}
                        </div>
                    </th>
                    <th>
                    <div className="row">
                            <div className="col-auto">
                                Fecha
                            </div>
                            {/* <div className="col-auto">
                                <div className="my-2 triangulo arriba"><div></div></div>
                            </div> */}
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
            {
                receiptsToList.map(
                    receipInList => 
                    <tr key={receipInList.id}>
                        <td>{receipInList.name}</td>
                        <td>{receipInList.description}</td>
                        <td>{formatDate(receipInList.createDate)}</td>
                    </tr>
                )
            }
                {/* <tr>
                    <td>Recibo 1</td>
                    <td>Descripción</td>
                    <td>2/2/2021</td>
                </tr> */}
            </tbody>
        </table>
    );
}
 
export default Table;