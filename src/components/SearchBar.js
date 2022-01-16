
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useDebounce } from 'use-debounce';

const Container = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    background-color: #121212;
    width: 100%;
`

const Label = styled.h1`
    color: #ffbf00;
    align-items: center;
    text-align: center;
    width: 50%;
`

const Button = styled.button`
    padding: 0 2;
`

const Header = styled.h1`
    color: #ffbf00; 
    align-items: center;
    text-align: left;
    width: 50%;
    padding-left: 10px;
`

const InputContainer = styled.div`
    text-align: right;
    padding-right: 10px;
    width: 50%;
`


const SearchBar = ({tickerSymbol, setTickerSymbol, isTyping, setIsTyping}) => {

    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        if (!search) return;
        setTickerSymbol(search);
    }

     
    return (
        <Container>
            <Header>Dividend History Tracker</Header>
            <InputContainer>
            <input type="text" placeholder="Enter a ticker symbol" onChange={(e) => setSearch(e.target.value)}/>
            <Button onClick={handleSearch}>Go</Button>
            </InputContainer>
        </Container>
    )
}

export default SearchBar
