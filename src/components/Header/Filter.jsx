import React from 'react';

import removeIcon from '../../images/icon-remove.svg';

import styled from 'styled-components';

const Filter = ({ filterName, removeFilter, sortJobbings }) => {

    const Filter = styled.div`
        margin-right:20px;
        display:inline-block;
        margin-bottom:20px;

        &:last-child{
            margin-right: 0;
        }

        @media all and (max-width:375px){
            margin-bottom:20px;
        }
    `;

    const FilterName = styled.span`
        font-size:1rem;
        font-weight:700;
        padding:10px;
        border-radius:5px 0 0 5px;
        background-color:hsl(180, 52%, 96%);
        display:inline-block;
        color:hsl(180, 29%, 50%);

        @media all and (max-width:375px){
            font-size:.85rem;
        }
    `;

    const FilterCloseBtn = styled.span`
        padding:10px;
        border-radius:0 5px 5px 0;
        background-color:hsl(180, 29%, 50%);
        text-align:center;
        display:inline-block;
        cursor:pointer;

        &:hover{
            background-color:hsl(180, 14%, 20%);
        }

        > img{
            vertical-align:middle;
        }

        @media all and (max-width:375px){
            padding:8px;
        }
    `;


    const clickEvent = (e) => {
        removeFilter(e);
        sortJobbings();
    }

    return (
        <Filter>
            <FilterName>{filterName}</FilterName>
            <FilterCloseBtn onClick={clickEvent}><img src={removeIcon} alt="remove" /></FilterCloseBtn>
        </Filter>
    )
}

export default Filter;