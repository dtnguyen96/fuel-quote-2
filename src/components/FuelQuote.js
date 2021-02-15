import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

class Test extends React.Component {
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
        if(this.handleValidation()){
            alert("Form submitted");
        } else {
            alert("Form has errors")
        }
    }

    handleValidation()
    {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(!fields["gallons"])
        {
            formIsValid = false;
            errors["gallons"] = "Please enter the amount of gallons requested";
        }

        if(!fields["delivery_date"])
        {
            formIsValid = false;
            errors["delivery_date"] = "Please select a delivery date";
        }

        if(typeof fields["gallons"] !== "undefined"){
            if(!fields["gallons"].match(0-9)){
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

    _renderDate = () => () => {
        const [selectedDate, setSelectedDate] = useState(0)
        return <div>{selectedDate}</div>
    }

    render() {
        const _renderDateResult = this._renderDate();

        return (
            <div style={{}}>
                <form style={{marginTop: '5%'}} onSubmit={this.contactSubmit.bind(this)}>
                    <label for="gallons">Gallons requested: </label>
                    <input type="text" refs="gallons" id="gallons" name="gallons" onChange={this.handleChange.bind(this, "gallons")} value={this.state.fields["gallons"]}/>

                    <br></br>

                    <span className="error">{this.state.errors["gallons"]}</span>
                    
                    <br></br>

                    <label for="address">Delivery Address:</label>
                    <input type="text" refs="address" id="address" name="address"/>

                    <br></br>

                    <label for="delivery_date">Delivery Date:</label>
                    <DatePicker refs="delivery_date" id="delivery_date" name="delivery_date"
                        selected={this.state.date}
                        onChange = {(date_input) => this.setState({
                            date : date_input,
                        })} 
                        dateFormat = 'yyyy/MM/dd'
                        value={this.state.fields["delivery_date"]}
                    />
                    
                    <br></br>

                    <span className="error">{this.state.errors["delivery_date"]}</span>

                    <br></br>

                    <label for="suggested_price">Suggested Price/gallon:</label>
                    <input type="text" refs="suggested_price" id="suggested_price" name="suggested_price"/>

                    <br></br>

                    <label for="total_due">Suggested Price/gallon:</label>
                    <input type="text" refs="total_due" id="total_due" name="total_due"/>

                    <br></br>

                    <button id="submit" value="submit" value="Submit">Send Message</button>
                </form>
            </div>
        )
    }
}

export default Test