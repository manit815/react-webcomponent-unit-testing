import React, { Component } from "react";
import '@vaadin/vaadin-date-picker';

class AppForm extends Component {

    constructor(props) {
        super(props);
        this.state = { dob: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dobRef = React.createRef();
    }

    handleChange = name => event => {
        console.log(this.dobRef);

        this.setState({
            [name]: event.target.value,
        });

    };

    dobChanged(value) {
        console.log('inside dob changed', value, this.dobRef);
    }

    valueChanged(value) {
        console.log(value);
    }

    handleSubmit(event) {
        console.log(event);
        // console.log(this.props);
        alert('A name was submitted:' + JSON.stringify(this.state));
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(this.state)
        })
        event.preventDefault();
    }

    componentDidMount() {
        this.refs.dobRef.addEventListener('change', e=> {
            console.log('componentDidMount', e.target.value);
        })
    }

    render() {
        // const { classes } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <div onChange={this.dobChanged}>
                        <vaadin-date-picker label="When were you born?" ref="dobRef" onClick={this.dobChanged('dob')}></vaadin-date-picker>
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </div>

            </form>
        )
    }
}

export default AppForm;