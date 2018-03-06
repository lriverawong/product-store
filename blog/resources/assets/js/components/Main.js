import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* An example React component */
class Main extends Component {
    constructor() {
        super();
        // initialize the state in the contructor
        this.state = {
            products: [],
        }
    }//end constructor

    /** 
     * componentDidMount() is a lifecycle method
     * that gets called after the component is rendered
    */
    componentDidMount() {
       /* fetch API in action */
        fetch('/api/products')
            .then(response => {
                // return a json representation of the response
                console.log("componentDidMount response = ", response)
                return response.json();
            })
            .then(products => {
                // fetched product is stored in the state
                this.setState({ products });
            })
   }//end componentDidMount()

    /**
    * A render method for the products.
    */
    renderProducts() {
        return this.state.products.map(product => {
            return (
                /**
                    * when using list you need to specify a key
                    * attribute that is unique for each list item
                    */
                    <li key={product.id} >
                        { product.title }
                    </li>
            );
        })
    }//end renderProducts()

    render () {
        return (
            <div>
                <h3>All Products</h3>
                <ul>
                    { this.renderProducts() }
                </ul>
            </div>
        );
    }//end render()
}

export default Main;

/*
The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/
if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}