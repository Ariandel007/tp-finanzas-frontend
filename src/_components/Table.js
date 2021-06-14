import { sort, ascending } from "d3-array";

const Table = () => {

    const sortingAscendingByAttribute = (array, atribute) => {
        const ascedingData = sort(array, (a, b) => ascending(a[atribute], b[atribute]))
    }

    const sortingDescendingByAttribute = (array, atribute) => {
        const descedingData = sort(array, (a, b) => ascending(a[atribute], b[atribute]))
    } 

    return (
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>
                        <div className="row">
                            <div className="col-auto">
                                Título
                            </div>
                            <div className="col-auto">
                                <div className="my-2 triangulo arriba"><div></div></div>
                            </div>
                        </div>
                    </th>
                    <th>
                        <div className="row">
                            <div className="col-auto">
                                Descripción
                            </div>
                            <div className="col-auto">
                                <div className="my-2 triangulo arriba"><div></div></div>
                            </div>
                        </div>
                    </th>
                    <th>
                    <div className="row">
                            <div className="col-auto">
                                Fecha
                            </div>
                            <div className="col-auto">
                                <div className="my-2 triangulo arriba"><div></div></div>
                            </div>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Recibo 1</td>
                    <td>Descripción</td>
                    <td>2/2/2021</td>
                </tr>
            </tbody>
        </table>
    );
}
 
export default Table;