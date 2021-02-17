import React from 'react'

class FuelQuoteHistory extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            fields : {},
            errors: {},
            date: ""
        }
    }
    
    render() {
        return (
            <div>
                <table className='fuelquotehistory_table'>
                     <tr>
                        <th>
                           Gallons Requested 
                        </th>
                        <th>
                            Delivery Address
                        </th>
                        <th>
                            Delivery Date
                        </th>
                        <th>
                            Suggested Price
                        </th>
                        <th>
                            Total Amount Due
                        </th>
                     </tr>
                     <tr>

                     </tr>
                </table>
            </div>
        )
    }
}

export default FuelQuoteHistory