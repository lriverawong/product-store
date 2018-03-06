import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';

/* An example React component */
class Main extends Component {
    constructor() {
        // calls the functions on  a parent object
        super();

        this.state = {
            // initialize the state in the contructor
            products: [],
            // keep track of currently selected product
            currentProduct: null
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
                    <li onClick={() => this.handleClick(product)} key={product.id} >
                        { product.title }
                    </li>
            );
        })
    }//end renderProducts()

    /**
     * A handler to determine which product has been clicked.
     */
    handleClick(product) {
        // handleCick is used to set the state
        this.setState({currentProduct:product});
    }

    render () {
        const mainDivStyle =  {
            display: "flex",
            flexDirection: "row"
        }
        
        const prodListStyle = {
            justifyContent: "flex-start",
            padding: '10px',
            width: '35%',
            background: '#f0f0f0',
            padding: '20px 20px 20px 20px',
            margin: '30px 10px 10px 30px'
        }

        const prodDetailsStyle = {
            // justifyContent: "flex-start",
            padding: '10px',
            background: '#c8d9ec',
            padding: '20px 20px 20px 20px',
            margin: '30px 10px 10px 30px'
        }

        return (
            <div>
                <div style={mainDivStyle}>
                    <div style={prodListStyle}>
                        <h2>All Products</h2>
                        <ul>
                            { this.renderProducts() }
                        </ul>
                    </div>

                    <div style={prodDetailsStyle}>
                        <Product product={this.state.currentProduct} />
                    </div>
                </div>
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