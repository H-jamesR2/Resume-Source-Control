import React, { Component } from "react";
import axios from "axios";
import { json } from "react-router-dom";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";

function KeywordList(props) {
    // WARNING STILL NEEDS WORK TO POSSIBLY INCLUDE MORE KEYWORD LABELS
    var outputHardSkills = props.keywordList.map((keyword) =>{
        if(keyword["label"]=="Hard Skill")
            return <li key={keyword["id"]}>{keyword["word"]}</li>
        return
    }
    );
    var outputSoftSkills = props.keywordList.map((keyword) => {
        if(keyword["label"]=="Soft Skill")
            return <li key={keyword["id"]}>{keyword["word"]}</li>
        return
    }
    );
    return (
        <div>
            <h2>Hard Skills</h2>
            <ul>
                {outputHardSkills}
            </ul>
            <h2>Soft Skills</h2>
            <ul>
                {outputSoftSkills}
            </ul>
        </div>
    )
}

class JobParser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobDescription: "",
            keywordList: [],
        };

        this.HandleChange = this.HandleChange.bind(this);
        this.ParseJob = this.ParseJob.bind(this);
    }

    HandleChange(event) {
        this.setState({jobDescription: event.target.value});
    }

    ParseJob() {
        //Formatting Data
        var formData = new FormData()
        formData.append('jobDescription', this.state.jobDescription);
        
        // Making request for scanner
        axios.post("/AI/job-scan", formData)
        .then((response) => {
            this.setState({keywordList: response.data["entities"]});
            console.log(response.data);
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
    }

    render() {
        return(
            <div>
                <div>
                    <span>
                        <input
                            type="text"
                            value={this.state.jobDescription}
                            onChange={this.HandleChange}
                            style={{fontSize:"20px",padding:"7px",marginRight:"10px",width:"calc(100% - 86px)"}}
                            placeholder="Enter some keywords here..."
                        />
                    </span>
                    <span>
                        <button onClick={this.ParseJob}>
                            Scan
                        </button>
                    </span>
                </div>
                <div>
                    <KeywordList keywordList={this.state.keywordList}></KeywordList>
                </div>
            </div>
        )
    };
}

export default JobParser;