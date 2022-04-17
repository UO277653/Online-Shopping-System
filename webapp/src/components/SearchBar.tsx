import * as React from "react";
import {Search} from "@mui/icons-material";
import styled from "styled-components";
import {useState} from "react";
import ListProducts from "./ListProducts";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    justify-content: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");

    const navigate = useNavigate();

    const handleChange = (e: { preventDefault: () => void; target: { value: React.SetStateAction<string>; }; }) => {
        e.preventDefault();
        setSearchInput(e.target.value);

        //if(window.location.href.toString().includes("/products")) {
        //    navigate("/products?filter=" + searchInput);
        //    refreshPage()
        //} else {
        //    navigate("/products?filter=" + searchInput);
        //}
    };

    let input = document.getElementById("searchInput");

    input?.addEventListener("keyup", function(event: any) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("searchButton")?.click();
            refreshPage();
        }
    });

    const refreshPage = ()=>{

        window.location.reload();
    }

    const refreshPageBtn = () => {

        navigate("/products?filter=" + searchInput);
        window.location.reload();
    }

    return (
        <SearchContainer>
            <Input id="searchInput" onChange={handleChange} />
            <Link to= {"/products?filter=" + searchInput} id="searchButton" onClick={refreshPageBtn}>
                <Search style={{ color: "gray", fontSize: 20 }}/>
            </Link>
        </SearchContainer>
    );

}

export default SearchBar;