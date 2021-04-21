import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

class FuelQuote extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            fields : {},
            errors: {},
            date: "",
            profile_info: ""
        }
    }
    getPrice(e){
        e.preventDefault();
        const priceInfo = {gallons: this.state.fields["gallons"], email: this.state.fields["email"]}    
        axios.post("http://localhost:5000/fuelform/price", priceInfo);

    }
    
    contactSubmit(e)
    {
        e.preventDefault();
        
        if (this.handleValidation() == true) {
            const form_input = {
                email: this.state.fields["email"],
                gallons: this.state.fields["gallons"],
                date: this.state.date,
                addr: this.state.profile_info.d_addr,
                suggested_price: this.state.profile_info.suggested_price,
                total_amount: this.state.profile_info.total_amount
            }
            axios.post('http://localhost:5000/fuelform/submit', form_input)
        }
    }

    emailSubmit(e)
    {
        e.preventDefault();

        if (this.state.fields["email"] != "")
        {
            const email_input = {
                email: this.state.fields["email"]
            }
            fetch('http://localhost:5000/fuelform/email_submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email: this.state.fields["email"]}),
            })
            .then(response => response.json())
            .then(data => {
                this.setState({profile_info: data})
            })
        }
    }

    handleValidation()
    {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        const curr_date = new Date();

        if(!fields["email"])
        {
            formIsValid = false;
            errors["email"] = "Please enter the user's email";
        }

        if(!fields["gallons"])
        {
            formIsValid = false;
            errors["gallons"] = "Please enter the amount of gallons requested";
        }

        if(!this.state.date)
        {
            formIsValid = false;
            errors["delivery_date"] = "Please select a delivery date";
        }
        else if(this.state.date.getDate() < curr_date.getDate() &&
            this.state.date.getYear() <= curr_date.getYear() &&
            this.state.date.getMonth() <= curr_date.getMonth()){
                formIsValid = false;
                errors["delivery_date"] = "Selected date is not a deliverable date (date as pasted)";
        }

        if(typeof fields["gallons"] !== "undefined"){
            if(isNaN(Number(fields["gallons"]))){
                formIsValid = false;
                errors["gallons"] = "Value is not numeric"
            }
        }

        this.setState({errors: errors});
        return formIsValid
    }

    handleChange(field, e)
    {   
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    date_selected(input) {
        this.state.date = input;
    }

    verify_date(date) {
        var curr_date = new Date();
        if (curr_date.getFullYear() != date.getFullYear() || curr_date.getMonth() != date.getMonth() || curr_date.getDate() != date.getDate()){
            return true
        }
        return false
    }

    render() {
        const {profile_info} = this.state;
        const curr_date = new Date();
        const day = curr_date.getDay()
        const month = curr_date.getMonth()
        const year = curr_date.getFullYear()

        return (
            <div>
                <form style={{marginTop: '5%'}} onSubmit={this.contactSubmit.bind(this)}>
                <label for="email">Email: </label>
                    <br></br>
                    <input type="text" refs="email" id="email" name="email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                    <br></br>
                    <span className="error">{this.state.errors["email"]}</span>

                    <br></br>

                    <button id="email_submit" onClick={this.emailSubmit.bind(this)}>Get Email Info</button>

                    <br></br>

                    <label for="gallons">Gallons requested: </label>
                    <br></br>
                    <input type="text" refs="gallons" id="gallons" name="gallons" onChange={this.handleChange.bind(this, "gallons")} value={this.state.fields["gallons"]}/>
                    <br></br>
                    <span className="error">{this.state.errors["gallons"]}</span>
                    
                    <br></br>
                    <br></br>

                    <label for="address">Delivery Address:</label>
                    <br></br>
                
                    <input type="text" refs="address" id="address" name="address" value={profile_info.d_addr} readOnly/>

                    <br></br>
                    <br></br>

                    <label for="delivery_date">Delivery Date:</label>
                    <br></br>
                    <DatePicker refs="delivery_date" id="delivery_date" name="delivery_date"
                        selected={this.state.date}
                        onChange = {
                            (date_input) => this.setState({date: date_input})
                        }
                        dateFormat = 'yyyy/MM/dd'
                    />
                    <br></br>

                    <span className="error">{this.state.errors["delivery_date"]}</span>

                    <br></br>

                    <label for="suggested_price">Suggested Price/gallon:</label>
                    <br></br>
                    <input type="text" refs="suggested_price" id="suggested_price" name="suggested_price" value={profile_info.suggested_price} readOnly/>

                    <br></br>
                    <br></br>


                    <label for="total_due">Total Due:</label>
                    <br></br>
                    <input type="text" refs="total_due" id="total_due" name="total_due" value={profile_info.total_amount} readOnly/>

                    <br></br>
                    <br></br>
                    <button id="submit" onClick={this.getPrice.bind(this)}>Get Quote</button>
                    <button id="submit" value="submit" value="Submit">Send Message</button>
                </form>
            </div>
        )
    }
}

export default FuelQuote