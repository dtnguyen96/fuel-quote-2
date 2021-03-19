import React, {useState} from 'react';
import axios from 'axios';

class Pricing extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            fields : {},
            errors: {}
        }
    }

    render() {
        return (
            <div>
                Pricing module goes here
            </div>
        )
    }
}