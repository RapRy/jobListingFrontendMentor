import React, { Component } from 'react';

import GlobalStyle from './globalStyles';

import { Header, List } from './components';

// import styled from 'styled-components';

class App extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            filters: [],
            filtersRef: [],
            dataRef: []
        }
    }

    componentDidMount(){
        // this.fetchDatas();

        const data = [
            {
              "id": 1,
              "company": "Photosnap",
              "logo": "photosnap.svg",
              "newTag": true,
              "featured": true,
              "position": "Senior Frontend Developer",
              "role": "Frontend",
              "level": "Senior",
              "postedAt": "1d ago",
              "contract": "Full Time",
              "location": "USA Only",
              "languages": ["HTML", "CSS", "JavaScript"],
              "tools": []
            },
            {
              "id": 2,
              "company": "Manage",
              "logo": "manage.svg",
              "newTag": true,
              "featured": true,
              "position": "Fullstack Developer",
              "role": "Fullstack",
              "level": "Midweight",
              "postedAt": "1d ago",
              "contract": "Part Time",
              "location": "Remote",
              "languages": ["Python"],
              "tools": ["React"]
            },
            {
              "id": 3,
              "company": "Account",
              "logo": "account.svg",
              "newTag": true,
              "featured": false,
              "position": "Junior Frontend Developer",
              "role": "Frontend",
              "level": "Junior",
              "postedAt": "2d ago",
              "contract": "Part Time",
              "location": "USA Only",
              "languages": ["JavaScript"],
              "tools": ["React", "Sass"]
            },
            {
              "id": 4,
              "company": "MyHome",
              "logo": "myhome.svg",
              "newTag": false,
              "featured": false,
              "position": "Junior Frontend Developer",
              "role": "Frontend",
              "level": "Junior",
              "postedAt": "5d ago",
              "contract": "Contract",
              "location": "USA Only",
              "languages": ["CSS", "JavaScript"],
              "tools": []
            },
            {
              "id": 5,
              "company": "Loop Studios",
              "logo": "loop-studios.svg",
              "newTag": false,
              "featured": false,
              "position": "Software Engineer",
              "role": "FullStack",
              "level": "Midweight",
              "postedAt": "1w ago",
              "contract": "Full Time",
              "location": "Worldwide",
              "languages": ["JavaScript"],
              "tools": ["Ruby", "Sass"]
            },
            {
              "id": 6,
              "company": "FaceIt",
              "logo": "faceit.svg",
              "newTag": false,
              "featured": false,
              "position": "Junior Backend Developer",
              "role": "Backend",
              "level": "Junior",
              "postedAt": "2w ago",
              "contract": "Full Time",
              "location": "UK Only",
              "languages": ["Ruby"],
              "tools": ["RoR"]
            },
            {
              "id": 7,
              "company": "Shortly",
              "logo": "shortly.svg",
              "newTag": false,
              "featured": false,
              "position": "Junior Developer",
              "role": "Frontend",
              "level": "Junior",
              "postedAt": "2w ago",
              "contract": "Full Time",
              "location": "Worldwide",
              "languages": ["HTML", "JavaScript"],
              "tools": ["Sass"]
            },
            {
              "id": 8,
              "company": "Insure",
              "logo": "insure.svg",
              "newTag": false,
              "featured": false,
              "position": "Junior Frontend Developer",
              "role": "Frontend",
              "level": "Junior",
              "postedAt": "2w ago",
              "contract": "Full Time",
              "location": "USA Only",
              "languages": ["JavaScript"],
              "tools": ["Vue", "Sass"]
            },
            {
              "id": 9,
              "company": "Eyecam Co.",
              "logo": "eyecam-co.svg",
              "newTag": false,
              "featured": false,
              "position": "Full Stack Engineer",
              "role": "Fullstack",
              "level": "Midweight",
              "postedAt": "3w ago",
              "contract": "Full Time",
              "location": "Worldwide",
              "languages": ["JavaScript", "Python"],
              "tools": ["Django"]
            },
            {
              "id": 10,
              "company": "The Air Filter Company",
              "logo": "the-air-filter-company.svg",
              "newTag": false,
              "featured": false,
              "position": "Front-end Dev",
              "role": "Frontend",
              "level": "Junior",
              "postedAt": "1mo ago",
              "contract": "Part Time",
              "location": "Worldwide",
              "languages": ["JavaScript"],
              "tools": ["React", "Sass"]
            }
          ]

        this.setState({ data:data, dataRef: data }, () => this.setFilterRef());
    }

    setFilterRef = () => {
        const data = [];
        this.state.data.forEach((val) => {
            const filters = [val.level, val.role, ...val.tools, ...val.languages];
            data.push(filters);
        })

        this.setState({filtersRef: data})
    }

    sortJobbings = async () => {

        const filters = this.state.filters
        const filtersRef = this.state.filtersRef
        let idCont = [];
        let sortedData = [];
        let datas = this.state.dataRef;

        filters.forEach((filter) => {
            filtersRef.forEach((filRef, id) => {
                if(filRef.includes(filter)){
                    idCont.push(id);

                }
            })
        })

        let idContSorted = idCont.sort().filter((idC, i, arr) => !i || idC !== arr[i-1]);


        datas.forEach((data, i) => {
            idContSorted.forEach((idC) => {
                if(idC === i) sortedData.push(data);
            })
        })

        this.setState({data:sortedData})
    }

    async fetchDatas(){
        try{
            const res = await fetch("./api/data.json")
            if(!res.ok){
                throw Error(res.statusText);
            }else{
                const data = await res.json();
                this.setState({ data: data, dataRef: data })
                this.setFilterRef();
            }
        }catch(err){
            console.log(err)
        }
            
    }

    addFilters = (e) => {
        const filterName = e.target.innerHTML;
        const duplicate = this.state.filters.includes(filterName);

        !duplicate && 
            this.setState({filters: [...this.state.filters, filterName]}, 
                () => {
                    this.sortJobbings()
                }
            );
    }

    clearFilters = () => {
        this.setState({filters: []}, 
            () => {
                this.setState({data: this.state.dataRef})
            }    
        );
    }

    removeFilter = (e) => {
        const filterName = e.currentTarget.previousElementSibling.innerHTML;

        const result = this.state.filters.filter((filt) => filterName !== filt);

        this.setState({filters: result}, 
            () => {
                if(this.state.filters.length > 0){
                    this.sortJobbings()
                }else{
                    this.setState({data: this.state.dataRef})
                }
            }  
        );
    }

    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <div>
                    <Header filters={this.state.filters} removeFilter={this.removeFilter} sortJobbings={this.sortJobbings} clearFilters={this.clearFilters}/>
                    <List datas={this.state.data} addFilters={this.addFilters} />
                </div>
            </React.Fragment>
        )
    }
}

export default App;


