import React, { Component } from 'react';

import Filter from './Filter';

import styled from 'styled-components';

class FilterBox extends Component {
    render() {
        const FilterBoxWrapper = styled.div`
            position:absolute;
            top:86px;
            left:0%;
            width:100%;
            padding:0 20px;
        `;

        const FilterBoxContainer = styled.div`
            padding:18px 40px;
            background-color:#fff;
            box-shadow:5px 9px 18px hsla(180, 29%, 50%, .3);
            max-width:1440px;
            margin:0 auto;
            border-radius:5px;
            display:grid;
            grid-template-columns:1fr auto;
            grid-gap:20px;
            align-items:center;

            @media all and (max-width:375px){
                padding:20px 20px 0;
            }
        `;

        const ClearBtn = styled.span`
            color:hsl(180, 8%, 52%);
            font-size:1rem;
            font-weight:700;
            cursor:pointer;
            display:inline-block;

            &:hover{
                text-decoration: underline;
            }

            @media all and (max-width:375px){
                font-size:.8rem;
               margin-bottom:20px;
            }
        `;

        const { filters, removeFilter, clearFilters, sortJobbings } = this.props

        return (
            <FilterBoxWrapper>
                <FilterBoxContainer>
                    <div className="filtersContainer">
                        {filters.map((filterName, id) => <Filter key={id} filterName={filterName} removeFilter={removeFilter} sortJobbings={sortJobbings} />)}
                    </div>
                    <div className="clearContainer">
                        <ClearBtn onClick={clearFilters}>Clear</ClearBtn>
                    </div>
                </FilterBoxContainer>
            </FilterBoxWrapper>
        )
    }
}

export default FilterBox
