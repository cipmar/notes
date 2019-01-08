import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config.js";
import "./NewNote.css";
import {API} from "aws-amplify";

export default class NewNote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: null,
            content: ""
        };
    }

    validateForm() {
        return this.state.content.length > 0;
    }
    
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    };
    
    handleSubmit = async event => {
        event.preventDefault();

        this.setState({isLoading: true});

        try {
            await this.createNote({
                content: this.state.content
            });

            this.props.history.push("/");
        } catch (e) {
            alert(e);
            this.setState({isLoading: false});
        }
    };

    createNote(note) {
        return API.post("notes", "/", {
            body: note
        });
    }
    
    render() {
        return (
            <div className="NewNote">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="content">
                        <FormControl
                            onChange={this.handleChange}
                            value={this.state.content}
                            componentClass="textarea"
                        />
                    </FormGroup>
                    <LoaderButton
                        block
                        bsStyle="primary"
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        isLoading={this.state.isLoading}
                        text="Create"
                        loadingText="Creating..."
                    />
                </form>
            </div>
        );
    }
}