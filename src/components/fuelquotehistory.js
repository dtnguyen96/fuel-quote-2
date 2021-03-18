import axios from 'axios';
import React from 'react'

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
        const response = await fetch('http://localhost:5000/fuelform/history');
        console.log(response);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    }

    componentDidMount () {
        this.getResponse()
            .then(res => {
                const someData = res;
                this.setState({renderedResponse: someData});
            })
    }

    render() {
        const { renderedResponse} = this.state;
        return (
            <div>
                <table className='fuelquotehistory_table'>
                    <tbody>
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
                                {renderedResponse.gallons}
                            </th>
                            <th>
                                {renderedResponse.delivery_add}
                            </th>
                            <th>
                                {renderedResponse.delivery_date}
                            </th>
                            <th>
                                {renderedResponse.suggested_price}
                            </th>
                            <th>
                                {renderedResponse.amount_due}
                            </th>
                        </tr>
                     </tbody>
                </table>
            </div>
        )
    }
}

export default FuelQuoteHistory