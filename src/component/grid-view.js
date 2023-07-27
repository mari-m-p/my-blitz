
import { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';
import SkeletonRect from '../component/skeleton';

const GridView = (props) => {
    const [data, setData] = useState([]);
    const [sortModel, setSortModel] = useState([
        {
            field: 'ORDERDATE',
            sort: 'desc',
        },
    ]);

    useEffect(() => {
        if(props.data){
        const rowsWithIds = props.data.map((row) => ({ ...row, id: uuidv4() }));
        setData(rowsWithIds);
        }
    },[props.data])


    const columns = [
        { field: 'ORDERNUMBER', headerName: 'Order Number', width: 150, sortable: true },
        { field: 'QUANTITYORDERED', headerName: 'Quantity Ordered', width: 160, sortable: true },
        { field: 'PRICEEACH', headerName: 'Price Each', width: 130, sortable: true },
        { field: 'ORDERLINENUMBER', headerName: 'Order Line Number', width: 180, sortable: true },
        { field: 'SALES', headerName: 'Sales', width: 130, sortable: true },
        { field: 'ORDERDATE', headerName: 'Order Date', width: 180, sortable: true },
        { field: 'STATUS', headerName: 'Status', width: 120, sortable: true },
        { field: 'QTR_ID', headerName: 'Quarter ID', width: 120, sortable: true },
        { field: 'MONTH_ID', headerName: 'Month ID', width: 110, sortable: true },
        { field: 'YEAR_ID', headerName: 'Year ID', width: 110, sortable: true },
        { field: 'PRODUCTLINE', headerName: 'Product Line', width: 160, sortable: true },
        { field: 'MSRP', headerName: 'MSRP', width: 100, sortable: true },
        { field: 'PRODUCTCODE', headerName: 'Product Code', width: 150, sortable: true },
        { field: 'CUSTOMERNAME', headerName: 'Customer Name', width: 180, sortable: true },
        { field: 'PHONE', headerName: 'Phone', width: 140, sortable: true },
        { field: 'ADDRESSLINE1', headerName: 'Address Line 1', width: 200, sortable: true },
        { field: 'ADDRESSLINE2', headerName: 'Address Line 2', width: 200, sortable: true },
        { field: 'CITY', headerName: 'City', width: 130, sortable: true },
        { field: 'STATE', headerName: 'State', width: 100, sortable: true },
        { field: 'POSTALCODE', headerName: 'Postal Code', width: 140, sortable: true },
        { field: 'COUNTRY', headerName: 'Country', width: 150, sortable: true },
        { field: 'TERRITORY', headerName: 'Territory', width: 140, sortable: true },
        { field: 'CONTACTLASTNAME', headerName: 'Contact Last Name', width: 180, sortable: true },
        { field: 'CONTACTFIRSTNAME', headerName: 'Contact First Name', width: 180, sortable: true },
        { field: 'DEALSIZE', headerName: 'Deal Size', width: 130, sortable: true },
    ];

    const getRowId = (row) => row.id;

    return <>
        <div style={{ height: 500, width: '100%' }}>

         {(data.length === 0) ? <SkeletonRect /> : <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10, 20]}
                getRowId={getRowId}
                sortModel={sortModel}
                onSortModelChange={(model) => setSortModel(model)}
            />}
        </div>
    </>

}

export default GridView;