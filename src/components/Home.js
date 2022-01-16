import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import DataTable from 'react-data-table-component';
import Columns from '../helpers/Columns';


const Home = () => {

    const API_KEY = process.env.REACT_APP_API_KEY;
    const [stockData, setStockData] = useState([]);
    const [tickerSymbol, setTickerSymbol] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    const columns = [
        {
            name: 'Ticker Symbol',
            selector: row => row.ticker,
        },
        {
            name: 'Amount',
            selector: row => row.amount,
        },
        {
            name: 'Ex-Dividend Date',
            selector: row => row.exDate,
        },
        {
            name: 'Payment Date',
            selector: row => row.paymentDate,
        },
        {
            name: 'Record Date',
            selector: row => row.recordDate,
        },
    ];
    
    

    const getStockDividends = () => {
        const URL = `https://api.polygon.io/v2/reference/dividends/${tickerSymbol}?apiKey=${API_KEY}`;
        axios.get(URL)
            .then((response) => {
                const data = response.data;
                console.log(data);
                setStockData(data.results);
                console.log(data.results);
            });
    };
    useEffect(() => {

        if (!tickerSymbol) return;
        getStockDividends();
    }, [tickerSymbol]);

    return (
        <div>
            <SearchBar tickerSymbol={tickerSymbol} setTickerSymbol={setTickerSymbol} isTyping={isTyping} setIsTyping={setIsTyping}/>
            <DataTable columns={columns} data={stockData} persistTableHead pagination fixedHeader theme="dark"/>
        </div>
    )
}

export default Home
