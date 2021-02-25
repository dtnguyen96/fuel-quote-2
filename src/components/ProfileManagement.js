import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel, Col } from "react-bootstrap";

const ProfileManagement = () => {
    return (
        <Form>
            <Form.Group controlId = "fullname">
                <Form.Label> Full Name </Form.Label>
                <Form.Control type = "text" maxLength = {50} placeholder = "Full Name"/>
            </Form.Group>

            <Form.Group controlId = "address1">
                <Form.Label> Address 1 </Form.Label>
                <Form.Control type = "text" maxLength = {100} placeholder = "1234 Sesame Street"/>
            </Form.Group>

            <Form.Group controlId = "address2">
                <Form.Label> Address 2 </Form.Label>
                <Form.Control type = "text" maxLength = {100} placeholder = "Apartment, Suite, Etc."/>
            </Form.Group>

            <Form.Row>
                <Form.Group as = {Col} controlId = "city">
                    <Form.Label> City </Form.Label>
                    <Form.Control type = "text" maxLength = {100} placeholder = "City"/>
                </Form.Group>

                <Form.Group as = {Col} controlId = "state">
                    <Form.Label> State </Form.Label>
                    <Form.Control as = "select" defaultValue = "">
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
                    <Form.Control maxLength = {9} id = "zipcode" placeholder = "Zip Code" aria-describedby = "zipcode"/>
                    <Form.Text id = "zipcode" muted>
                        5 character code minimum required.
                    </Form.Text>
                </Form.Group>
            </Form.Row>

            <Button variant = "primary" type = "submit">
                Submit
            </Button>
        </Form>
    )
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
