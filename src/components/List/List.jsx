import React, { useEffect } from 'react'

import Job from './Job';

import styled from 'styled-components';

const List = ({ datas, addFilters }) => {
    let filterBoxHeight = (document.getElementById('filterBox')) ? document.getElementById('filterBox').clientHeight : 40;

    const listWrapper = React.createRef();

    const resizeWindow = () => {
        filterBoxHeight = (document.getElementById('filterBox')) ? document.getElementById('filterBox').clientHeight : 40;
        if(listWrapper.current) {
            listWrapper.current.style.cssText = `top:${filterBoxHeight}px`;

            if(window.matchMedia("(max-width:375px)").matches){
                listWrapper.current.style.cssText = `top:${filterBoxHeight + 20}px`;
            }
        }
    }

    useEffect(() => {
        window.addEventListener('resize', resizeWindow)
    })

    const ListWrapper = styled.div`
        position:relative;
        top:${props => props.top}px;
        left:0;
        width:100%;
        padding:0 20px;

        @media all and (max-width:375px){
            top:${props => props.top + 20}px;
        }
    `;

    const ListContainer = styled.div`
        max-width:1440px;
        margin:0 auto;
    `;

    return (
        <ListWrapper top={filterBoxHeight} ref={listWrapper}>
            <ListContainer>
                {datas.map((data, id) => {
                    return <Job key={data.id} data={data} addFilters={addFilters} />
                })}
            </ListContainer>
        </ListWrapper>
    )
}

export default List;