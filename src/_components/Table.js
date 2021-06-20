import { sort, ascending } from "d3-array";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPageReceiptAction } from "../actions/receipt-action";

const Table = () => {

    const history = useHistory();

    const receiptsToList = useSelector(state => state.receipt.receiptList);
    const loading = useSelector(state => state.receipt.loading);
    const totalPages = useSelector(state => state.receipt.totalPages);    

    const goToReceiptSelected = useCallback(id => history.push(`receiptselected/${id}`), [history]);


    const dispatch = useDispatch();

    // const getReceipts = pagination => dispatch(getPageReceiptAction(pagination));
    const getReceipts = useCallback(pagination => dispatch(getPageReceiptAction(pagination)), [dispatch]);

    const [currentPage, setCurrentPage] = useState({
        page: 0,
        size: 7,
    });

    const prevPage = () => {
        setCurrentPage(
            {
                ...currentPage,
                page: --currentPage.page
            }
        );
    }

    const nextPage = () => {
        setCurrentPage(
            {
                ...currentPage,
                page: ++currentPage.page
            }
        );
    }


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
        //getReceipts(currentPage);
        getReceipts(currentPage);
    }, [currentPage, getReceipts]);

    return (
        <Fragment>
            {
                loading ?
                <div className="d-flex justify-content-center">
                    <div class="spinner-grow text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                :
                null
            }
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
                        <tr className="cursorlist" key={receipInList.id} onClick={()=>goToReceiptSelected(receipInList.id)}>
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
            <div className="my-2">
                    <div className="d-flex justify-content-end">
                        {currentPage.page === 0 ? 
                            null
                            :
                            <button onClick={prevPage} button="button" class="previous roundPageButton">&#8249;</button>
                        }
                        {totalPages - 1 === currentPage.page? 
                            null
                            :
                            <button onClick={nextPage} button="button" class="next roundPageButton">&#8250;</button>
                        }
                        
                    </div>
            </div>
        </Fragment>
        
    );
}
 
export default Table;