import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import axios from 'axios'

class FuelQuote extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            fields : {},
            errors: {},
            date: ""
        }
    }

    contactSubmit(e)
    {
        e.preventDefault();
        
        if (this.handleValidation() == true) {
            const form_input = {
                gallons: this.state.fields["gallons"],
                date: this.state.date
            }
        
            axios.post('http://localhost:5000/fuelform/submit', form_input)
        }
    }

    handleValidation()
    {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        const curr_date = new Date();

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
        const curr_date = new Date();
        const day = curr_date.getDay()
        const month = curr_date.getMonth()
        const year = curr_date.getFullYear()


        return (
            <div>
                <form style={{marginTop: '5%'}} onSubmit={this.contactSubmit.bind(this)}>
                    <label for="gallons">Gallons requested: </label>
                    <br></br>
                    <input type="text" refs="gallons" id="gallons" name="gallons" onChange={this.handleChange.bind(this, "gallons")} value={this.state.fields["gallons"]}/>
                    <br></br>
                    <span className="error">{this.state.errors["gallons"]}</span>
                    
                    <br></br>
                    <br></br>

                    <label for="address">Delivery Address:</label>
                    <br></br>
                
                    <input type="text" refs="address" id="address" name="address" value="Stored address" readOnly/>

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
                    <input type="text" refs="suggested_price" id="suggested_price" name="suggested_price" value="$0.00" readOnly/>

                    <br></br>
                    <br></br>


                    <label for="total_due">Suggested Price/gallon:</label>
                    <br></br>
                    <input type="text" refs="total_due" id="total_due" name="total_due" value="$0.00" readOnly/>

                    <br></br>
                    <br></br>

                    <button id="submit" value="submit" value="Submit">Send Message</button>
                </form>
            </div>
        )
    }
}

export default FuelQuote