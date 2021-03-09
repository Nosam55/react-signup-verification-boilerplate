import React, {useState} from 'react';

import { augustaService } from '@/_services';

function Upload({match}) {
    const {path} = match;
    const state = {
        name: "",
        photo: null,
        start: 1900,
        end: 2020,
        lat: 42,
        long: 42,
        type: "Augusta",
        keywords: "",
        errors: []
    };

    function hasError(input){
        return state.errors.indexOf(input) >= 0;
    }

    function handleInputChange(event){
        const key = event.target.name;
        const value = event.target.value;

        state[key] = value;

        console.log(JSON.stringify(state));
    }

    function handleFileChange(event){
        state.photo = event.target.files[0];
        alert(state.photo);
    }

    function onSubmit(event){
        event.preventDefault();
        let errors = [];

        if(state.name === ""){
            errors.push("name");
        }

        if(state.photo === null)
            errors.push("photo");

        if(state.start > state.end){
            errors.push("start");
        }

        state.errors = errors;

        if(errors.length > 0){
            return false;
        } else {
            alert(JSON.stringify(state));
            augustaService.create(state);
        }
    }

    return (
        <form enctype="multipart/form-data" className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <label htmlFor="name">Name:</label>
                        <input className={hasError("name") ? "form-control is-invalid" : "form-control"}
                               type="text"
                               autoComplete="off"
                               name="name"
                               onChange={handleInputChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="photo">Photo:</label>
                        <br/>
                        <input className={hasError("photo") ? "is-invalid" : ""}
                               type="file"
                               accept="image/*"
                               name="photo"
                               onChange={handleFileChange}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="keywords">Tags: </label>
                        <input type="text" autoComplete="off" name="keywords" onChange={handleInputChange} />
                    </div>
                    <div className="row">
                        <button className="btn btn-success" onClick={onSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
                <div className="col">
                    <span className="row p-1">
                        <label htmlFor="start">Start Decade:</label>
                        <DecadeSelect onChange={handleInputChange} name="start" default={state.start} />
                    </span>

                    <span className="row p-1">
                        <label htmlFor="end">End Decade:</label>
                        <DecadeSelect onChange={handleInputChange} name="end" default={state.end} />
                    </span>

                    <span className="row p-3">
                        <label htmlFor="type">Type: </label>
                        <select value={state.type} onChange={handleInputChange}>
                            <option key="Augusta" value="Augusta">Augusta</option>
                        </select>
                    </span>
                </div>
            </div>
        </form>
    );
}

function DecadeSelect(props){
    const options = [1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];
    const [selected, setSelected] = useState(props.default);
    const selectOptions = options.map((decade) => {
        decade = String(decade);
        return (<option key={decade} value={decade}>{decade}</option>);
    });

    function handleOptionChange(event){
        props.onChange(event); //handle the change normally
        setSelected(event.target.value); //and update the state so that the one you selected becomes the value
    }

    return (
        <select value={selected} name={props.name} onChange={handleOptionChange}>
            {selectOptions}
        </select>
    );;
}

export {Upload};