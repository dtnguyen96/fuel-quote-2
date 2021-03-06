import axios from 'axios';
import React from 'react'

let temp_history = [
    {
        gallons: 0,
        addr: "",
        date: "",
        suggested_price: ""
    },
    {
        gallons: 0,
        addr: "",
        date: "",
        suggested_price: ""
    },
    {
        gallons: 0,
        addr: "",
        date: "",
        suggested_price: ""
    }
]

class FuelQuoteHistory extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            fields : {},
            errors: {},
            date: "",
            renderedResponse: ""
        }
    }

    getResponse = async() => {
        const response = await fetch('http://localhost:5000/fuelform/history', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: this.state.fields["email"]}),
        }).then(response => response.json())
        .then(data => {
            this.setState({renderedResponse: data})
            console.log(this.state.renderedResponse)
            this.uploadToArray()
        })
    }

    uploadToArray() {
        try {
            const someData = this.state.renderedResponse;

            for (let i = 0; i < 3; i++) {
                temp_history[i].gallons = someData[i].gallons
                temp_history[i].addr = someData[i].addr
                temp_history[i].date = someData[i].date
                temp_history[i].suggested_price = someData[i].suggested_price
                temp_history[i].total_amount = someData[i].total_amount
            }
            this.forceUpdate();
        } catch {console.log("error")}
    }

    handleChange(field, e)
    {   
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    render() {
        const { renderedResponse } = this.state;
        return (
            <div>

                <div>
                    <label for="email">Email: </label>

                    <br></br>
                    
                    <input type="text" refs="email" id="email" name="email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                    
                    <button class = "btn btn-primary" id="submit" onClick={this.getResponse.bind(this)}>Fetch History</button>
                </div>

                <br></br>

                <table className='fuelquotehistory_table'>
                    <tbody id="array_results">
                        <tr>
                            <th id='gallons'>
                            Gallons Requested 
                            </th>
                            <th id='addr'>
                                Delivery Address
                            </th>
                            <th id='d_date'>
                                Delivery Date
                            </th>
                            <th id='price'>
                                Suggested Price
                            </th>
                            <th id='amount_due'>
                                Total Amount Due
                            </th>
                        </tr>
                        <tr>
                            <th>
                                {temp_history[0].gallons}
                            </th>
                            <th>
                                {temp_history[0].addr}
                            </th>
                            <th>
                                {temp_history[0].date}
                            </th>
                            <th>
                                {temp_history[0].suggested_price}
                            </th>
                            <th>
                                {temp_history[0].total_amount}
                            </th>
                        </tr>

                        <tr>
                            <th>
                                {temp_history[1].gallons}
                            </th>
                            <th>
                                {temp_history[1].addr}
                            </th>
                            <th>
                                {temp_history[1].date}
                            </th>
                            <th>
                                {temp_history[1].suggested_price}
                            </th>
                            <th>
                                {temp_history[1].total_amount}
                            </th>
                        </tr>

                        <tr>
                            <th>
                                {temp_history[2].gallons}
                            </th>
                            <th>
                                {temp_history[2].addr}
                            </th>
                            <th>
                                {temp_history[2].date}
                            </th>
                            <th>
                                {temp_history[2].suggested_price}
                            </th>
                            <th>
                                {temp_history[2].total_amount}
                            </th>
                        </tr>
                     </tbody>
                </table>
            </div>
        )
    }
}

export default FuelQuoteHistory