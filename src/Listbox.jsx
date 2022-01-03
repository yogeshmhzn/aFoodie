import React from 'react';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css'
import Listbox from './Listbox';
import './Listbox.css';

const options = [
    { value: 'Chicken Tikka Sauce', label: 'Chicken Tikka Sauce' },
    { value: 'Tandoori Chicken', label: 'Tandoori Chicken' },
    { value: 'Yogurt Sauce', label: 'Yogurt Sauce' },
    
];

class Widget extends React.Component {
    constructor() {
        super();

        this.state = {
            selected: ['one'],
        }
    }

    render() {
        return (
            <div className='container'>
            <DualListBox
                options={options}
                selected={this.state.selected}
                onChange={(selected) => {
                    this.setState({ selected });
                }}
            />
            </div>
        );
    }
}
ReactDOM.render(<Widget/>, document.getElementById('root'));
export default Listbox;