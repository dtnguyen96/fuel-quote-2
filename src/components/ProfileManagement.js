import React, { Component, useState } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel, Col } from "react-bootstrap";
import axios from 'axios'

class ProfileManagement extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields : {}
        }
    }

    handleChange(field, e)
    {
        let fields = this.state.fields;
        
        fields[field] = e.target.value;
        this.setState({fields});
        console.log("Changing state", field, "to", e.target.value)
    }

    handleValidation() {
        console.log("Validating fields")
        console.log(Object.keys(this.state.fields).length)

        Object.keys(this.state.fields).forEach(function(key) {
            try
            {    console.log("Checking field")
                if (this.state.fields[key] == "")
                    return false}
            catch {
                console.log("error")
            }
        });
        return true
    }

    handleSubmission()
    {
        let fields_json = this.state.fields

        if (this.handleValidation())
        {
            console.log("Validation passed!")
            const profile_input = {
                fullname: fields_json["fullname"],
                address1: fields_json["address1"],
                address2: fields_json["address2"],
                city: fields_json["city"],
                state: fields_json["state"],
                zipcode: fields_json["zipcode"]
            }
        }
        else {console.log("Validation failed")}
    }

    render(){
    return (
        <Form>
            <Form.Group controlId = "fullname">
                <Form.Label> Full Name </Form.Label>
                <Form.Control type = "text" maxLength = {50} placeholder = "Full Name" onChange={this.handleChange.bind(this, "fullname")}/>
            </Form.Group>

            <Form.Group controlId = "address1">
                <Form.Label> Address 1 </Form.Label>
                <Form.Control type = "text" maxLength = {100} placeholder = "1234 Sesame Street" onChange={this.handleChange.bind(this, "address1")}/>
            </Form.Group>

            <Form.Group controlId = "address2">
                <Form.Label> Address 2 </Form.Label>
                <Form.Control type = "text" maxLength = {100} placeholder = "Apartment, Suite, Etc." onChange={this.handleChange.bind(this, "address2")}/>
            </Form.Group>

            <Form.Row>
                <Form.Group as = {Col} controlId = "city">
                    <Form.Label> City </Form.Label>
                    <Form.Control type = "text" maxLength = {100} placeholder = "City" onChange={this.handleChange.bind(this, "city")}/>
                </Form.Group>

                <Form.Group as = {Col} controlId = "state">
                    <Form.Label> State </Form.Label>
                    <Form.Control as = "select" defaultValue = "" onChange={this.handleChange.bind(this, "state")}>
                        <option> AL </option>
                        <option> AK </option>
                        <option> AZ </option>
                        <option> AR </option>
                        <option> CA </option>
                        <option> CO </option>
                        <option> CT </option>
                        <option> DE </option>
                        <option> FL </option>
                        <option> GA </option>
                        <option> HI </option>
                        <option> ID </option>
                        <option> IL </option>
                        <option> IN </option>
                        <option> IA </option>
                        <option> KS </option>
                        <option> KY </option>
                        <option> LA </option>
                        <option> ME </option>
                        <option> MD </option>
                        <option> MA </option>
                        <option> MI </option>
                        <option> MN </option>
                        <option> MS </option>
                        <option> MO </option>
                        <option> MT </option>
                        <option> NE </option>
                        <option> NV </option>
                        <option> NH </option>
                        <option> NJ </option>
                        <option> NM </option>
                        <option> NY </option>
                        <option> NC </option>
                        <option> ND </option>
                        <option> OH </option>
                        <option> OK </option>
                        <option> OR </option>
                        <option> PA </option>
                        <option> RI </option>
                        <option> SC </option>
                        <option> SD </option>
                        <option> TN </option>
                        <option> TX </option>
                        <option> UT </option>
                        <option> VT </option>
                        <option> VA </option>
                        <option> WA </option>
                        <option> WV </option>
                        <option> WI </option>
                        <option> WY </option>
                    </Form.Control>
                </Form.Group>
                
                <Form.Group as = {Col} controlId = "zipcode">
                    <Form.Label htmlFor = "zipcode"> Zip Code </Form.Label>
                    <Form.Control maxLength = {9} id = "zipcode" placeholder = "Zip Code" aria-describedby = "zipcode" onChange={this.handleChange.bind(this, "zipcode")}/>
                    <Form.Text id = "zipcode" muted>
                        5 character code minimum required.
                    </Form.Text>
                </Form.Group>
            </Form.Row>

            <Button variant = "primary" type = "submit" onClick={this.handleSubmission()}>
                Submit
            </Button>
        </Form>
        )
    }
}

export default ProfileManagement
/* 
- Client Profile Management (After client registers they should login first to complete the profile). Following fields will be on Profile page / form:
- Full Name (50 characters, required)
- Address 1 (100 characters, required)
- Address 2 (100 characters, optional)
- City (100 characters, required)
- State (Drop Down, selection required) DB will store 2 character state code
- Zip code (9 characters, at least 5 character code required)
*/