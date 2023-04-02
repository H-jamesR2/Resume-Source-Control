import React, { Component } from "react";
import axios from "axios";

class JobParser extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            keywordList: {},
            error: null
        };

        this.HandleChange = this.HandleChange.bind(this);
        this.ParseJob = this.ParseJob.bind(this);
    }

    HandleChange(event) {
        this.setState({value: event.target.value});
    }

    ParseJob() {
        console.log("starting parse with: " + this.state.value);

        axios({
            method: "POST",
            url:"/AI/job-scan",
            body: JSON.stringify("TESTING STRING")
        })
        .then((response) => {
            this.setState({
                keywordList: response.data
            })
            console.log(response.data)
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
                    value={this.state.value}
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