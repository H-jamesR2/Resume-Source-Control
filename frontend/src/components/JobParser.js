import React, { Component } from "react";
import axios from "axios";
import { json } from "react-router-dom";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";

class JobParser extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            jobDescription: "",
            keywordList: [],
            error: null
        };

        this.HandleChange = this.HandleChange.bind(this);
        this.ParseJob = this.ParseJob.bind(this);
    }

    HandleChange(event) {
        this.setState({jobDescription: event.target.value});
    }

    ParseJob() {
        console.log("starting parse with: " + this.state.jobDescription);
        
        var formData = new FormData()
        formData.append('jobDescription', this.state.jobDescription);

        axios.post("/AI/job-scan", formData)
        .then((response) => {
            this.setState({
                keywordList: response.data
            })
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
        console.log(this.keywordList)
    }

    render() {
        return(
            <div>
                <input
                    type="text"
                    value={this.state.jobDescription}
                    onChange={this.HandleChange}
                />
                <button onClick={this.ParseJob}>
                    Run Scanner
                </button>
                <div>
                    <ul>

                    </ul>
                </div>
            </div>
        )
    };
}

export default JobParser;