import React, {Component} from "react";
import {Button, FormGroup, ControlLabel, FormControl} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./Login.css";
import {Auth} from "aws-amplify";

export default class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isLoading: false,
            email: "",
            password: ""
        };
    };
    
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length;
    }
    
    handleSubmit = async event => {
        event.preventDefault();
        
        this.setState({isLoading: true});
        
        try {
            await Auth.signIn(this.state.email, this.state.password);
            this.props.userHasAuthenticated(true);
            this.props.history.push("/");
        } catch (e) {
            alert(e.message);
        }
    };
    
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    
    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <LoaderButton
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        isLoading={this.state.isLoading}
                        text="Login"
                        loadingText="Logging in..."
                        type="submit"
                    />
                </form>
            </div>
        );
    }
}