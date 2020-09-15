import React, { Component } from 'react'

import styled from 'styled-components';

class Job extends Component {
    filterClick = (e) => {
        this.props.addFilters(e);
    }

    render() {

        const JobContainer = styled.div`
            padding:25px 40px;
            border-radius:5px;
            position:relative;
            top:0;
            left:0;
            background-color:#fff;
            box-shadow:5px 9px 18px hsla(180, 29%, 50%, .3);
            display:grid;
            grid-template-columns: auto 1fr auto;
            grid-gap:20px;
            align-items:center;
            // overflow:hidden;
            margin-bottom:40px;

            // &:last-child{margin-bottom:0;}

            &:hover:after{
                content:"";
                width:5px;
                height:100%;
                position:absolute;
                top:0;
                left:0;
                display:block;
                background:hsl(180, 29%, 50%);
                border-radius:5px 0 0 5px;
            }

            @media all and (max-width:930px){
                grid-template-columns: auto 1fr 40%;
            }

            @media all and (max-width:750px){
                grid-template-columns: auto 1fr;
                grid-template-rows:auto auto;
                padding:25px 40px 5px;
            }

            @media all and (max-width:375px){
                padding:25px 20px 0;
                grid-template-columns: 1fr;
                margin-bottom:45px;
            }
        `;

        const CompanyThumb = styled.div`
            @media all and (max-width:375px){
                position:absolute;
                top:-27px;
                left:20px;

                > img{
                    width:60%;
                }
            }
        `;

        const JobDetails = styled.div`
            @media all and (max-width:375px){
                padding:10px 0 15px;
                border-bottom:1px solid hsl(180, 8%, 52%);
            }
        `;

        const UpperDetails = styled.div`
            padding-bottom:10px
        `;
        const JobTitle = styled.div`padding-bottom:10px`;
        
        const CompanyName = styled.span`
            font-size:1rem;
            font-weight:700;
            color:hsl(180, 29%, 50%);
            padding-right: 15px;

            @media all and (max-width:463px){
                display:block;
            }

            @media all and (max-width:375px){
                display:inline-block;
            }
        `;

        const NewTag = styled.span`
            background-color:hsl(180, 29%, 50%);
            padding:6px 8px 6px;
            border-radius:50px;
            font-size:.8rem;
            color:#fff;
            display:inline-block;
            font-weight:500;
            margin-right:8px;

                @media all and (max-width:463px){
                    margin-top:10px;
                }
        `;

        const FeaturedTag = styled.span`
            background-color:#000;
            padding:6px 8px 6px;
            border-radius:50px;
            font-size:.8rem;
            color:#fff;
            display:inline-block;
            font-weight:500;

            @media all and (max-width:463px){
                margin-top:10px;
            }
        `;

        const H4 = styled.h4`
            font-size:1.2rem;
            color:#000;
            font-weight:700;
            display:inline-block;
            cursor:pointer;

            &:hover{
                color:hsl(180, 29%, 50%);
            }
        `;

        const SpanLowerDetails = styled.span`
            color:hsl(180, 8%, 52%);
            font-size:.9rem;
            display:inline-block;
            margin-right:10px;

            &:nth-child(1):after{
                content: "●";
                display:inline-block;
                margin-left:10px;
            }

            &:nth-child(2):after{
                content: "●";
                display:inline-block;
                margin-left:10px;
            }

            &:nth-child(3){margin-right:0;}
        `;

        const FilterTags = styled.div`
            @media all and (max-width:750px){
                grid-column-start:1;
                grid-column-end:3;
                padding-top:20px;
                border-top:1px solid hsl(180, 8%, 52%);
            }

            @media all and (max-width:375px){
                padding-top:0;
                border-top:none;
            }
        `;

        const Filter = styled.span`
            padding:10px 15px;
            border-radius:3px;
            color:hsl(180, 29%, 50%);
            background:hsl(180, 31%, 95%);
            font-size:.8rem;
            font-weight:700;
            margin-right:15px;
            cursor:pointer;
            display:inline-block;

            &:hover{
                color:#fff;
                background:hsl(180, 29%, 50%);
            }

            &:last-child{margin-right:0;}

            @media all and (max-width:930px){
                margin-bottom:20px;
            }

            @media all and (max-width:375px){
                margin-bottom:20px;
            }
        `;

        const { company, featured, newTag, position, postedAt, contract, location, role, level, languages, tools, logo } = this.props.data || "";
        let filterNames = [];
        (company !== undefined) ? filterNames = [...languages, ...tools, role, level] : filterNames = []


        return (
            (company !== undefined) ?

                <JobContainer>
                    <CompanyThumb>
                        <img src={require(`../../images/${logo}`)} alt="company" />
                    </CompanyThumb>
                    <JobDetails>
                        <UpperDetails>
                            <CompanyName>{company}</CompanyName>
                            {newTag && <NewTag>New</NewTag>}
                            {featured && <FeaturedTag>FEATURED</FeaturedTag>}
                        </UpperDetails>
                        <JobTitle>
                            <H4>{position}</H4>
                        </JobTitle>
                        <div className="lowerDetails">
                            <SpanLowerDetails>{postedAt}</SpanLowerDetails>
                            <SpanLowerDetails>{contract}</SpanLowerDetails>
                            <SpanLowerDetails>{location}</SpanLowerDetails>
                        </div>
                    </JobDetails>
                    <FilterTags>
                        {filterNames.map((filter, id) => filter && <Filter key={id} onClick={this.filterClick}>{filter}</Filter>)}
                    </FilterTags>
                </JobContainer>
                
                : ""
        )
    }
}

export default Job
