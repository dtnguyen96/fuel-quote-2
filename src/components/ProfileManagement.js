import React, { Component, useContext, useState } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel, Col } from "react-bootstrap";
import axios from 'axios'
import { EmailContext } from './Context/EmailContext';

const ProfileManagement = () => {

    const [email, setEmail] = useState("");
    const [fullname, setFullName] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [submitStatus, setSubmitStatus] = useState("");


    function handleValidation()
    {
        if (email == "" || fullname == "" || address1 == "" || city == "" || state == "" || zipcode == "")
            return false
        return true
    }

    async function handleSubmission(e)
    {
        e.preventDefault();

        if (handleValidation())
        {
            console.log("Validation passed!")
            const profile_input = {
                email: email,
                fullname: fullname,
                address1: address1,
                address2: address2,
                city: city,
                state: state,
                zipcode: zipcode
            }
            axios.post('http://localhost:5000/profile-management/profile_submit', profile_input)
            setSubmitStatus("Profile information submitted!")
        }
        else 
        {
            console.log("Validation failed")
            setSubmitStatus("Profile information could not be submitted!")
        }
    }

    return (
        <Form onSubmit={handleSubmission}>
            <Form.Group controlId = "email">
                <Form.Label> Email </Form.Label>
                <Form.Control type = "text" maxLength = {50} placeholder = "Email" onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId = "fullname">
                <Form.Label> Full Name </Form.Label>
                <Form.Control type = "text" maxLength = {50} placeholder = "Full Name" onChange={(e) => setFullName(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId = "address1">
                <Form.Label> Address 1 </Form.Label>
                <Form.Control type = "text" maxLength = {100} placeholder = "1234 Sesame Street" onChange={(e) => setAddress1(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId = "address2">
                <Form.Label> Address 2 </Form.Label>
                <Form.Control type = "text" maxLength = {100} placeholder = "Apartment, Suite, Etc." onChange={(e) => setAddress2(e.target.value)}/>
            </Form.Group>

            <Form.Row>
                <Form.Group as = {Col} controlId = "city">
                    <Form.Label> City </Form.Label>
                    <Form.Control type = "text" maxLength = {100} placeholder = "City" onChange={(e) => setCity(e.target.value)}/>
                </Form.Group>

                <Form.Group as = {Col} controlId = "state">
                    <Form.Label> State </Form.Label>
                    <Form.Control as = "select" defaultValue = "" onChange={(e) => setState(e.target.value)}>
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
                    <Form.Control maxLength = {9} id = "zipcode" placeholder = "Zip Code" aria-describedby = "zipcode" onChange={(e) => setZipcode(e.target.value)}/>
                    <Form.Text id = "zipcode" muted>
                        5 character code minimum required.
                    </Form.Text>
                </Form.Group>
            </Form.Row>

            <div style={{color: "blue"}}>{submitStatus}</div>

            <br></br>

            <Button variant = "primary" type = "submit">
                Submit
            </Button>
        </Form>
    )
}

export default ProfileManagement
