import React, { Component } from 'react';


import './App.css';

class  App  extends  Component {
  constructor(props){
      super(props);
      this.state  = {
          products: [],
          dataRoute:  "https://emeraldchen.000webhostapp.com/wp-json/wp/v2/posts"
      }
  }
  render() {
 
    return (
      <div className="App">
        <div className="App-header">
          <nav>
          <a href="http://emerald.rf.gd/" target="_blank" rel="noopener noreferrer" style={{color: "white",
          textDecorationLine: 'none'}}> Home | </a> 
          <a href="http://emerald.rf.gd/about-us/" target="_blank" rel="noopener noreferrer" style={{color: "white",
          textDecorationLine: 'none'}}>  About   | </a>
          <a href="http://emerald.rf.gd/help-for-refugees/" target="_blank" rel="noopener noreferrer" style={{color: "white", 
          textDecorationLine: 'none'}}>Help for Refugees | </a>
          <a href="http://emerald.rf.gd/get-involved/" target="_blank" rel="noopener noreferrer" style={{color: "white", 
          textDecorationLine: 'none'}}>Get Involved  | </a>
          <a href="http://emerald.rf.gd/contact/" target="_blank" rel="noopener noreferrer" style={{color: "white", 
          textDecorationLine: 'none'}}>Contact   </a>
          </nav>
          {/* <br></br><br></br><br></br><br></br><br></br><br></br><br></br> */}
          <h1>ChangeMakers Refugee Forum</h1>
          
        <h3>New Zealanders from refugee backgrounds participating fully in NZ life</h3>
        {/* <br></br><br></br><br></br><br></br> */}
        <ul>
            <a href="https://givealittle.co.nz/cause/turning-the-curve-teaching-refugee-background#" 
              target="_blank" rel="noopener noreferrer" ><b style={{color: "yellow",textDecoration: 'underline overline',fontSize:28}}>DONATE NOW</b></a>
        </ul>
    
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="products">

          {this.state.products.map((product) => 
            <div className="product" key={`product-${product.id}}`}>

              <img src={ product.image } alt={ product.name } className="product-image"/>
              <p>{ product.name }</p>

              {/* <p className="snipcart-add-item"
                data-item-name={ product.name }
                data-item-id={ product.id }
                data-item-image={ product.image }
                data-item-description={ product.description }
                data-item-url= { `${this.state.dataRoute}/${product.id}`}
                data-item-price={ product.price }>
                { product.price } 
              </p> */}
              <a href="https://givealittle.co.nz/cause/turning-the-curve-teaching-refugee-background#" 
              target="_blank" rel="noopener noreferrer"><button>Read More </button></a>
            <hr></hr>
            <br></br>
            </div>
          )}
          
        </div>
        <nav>            
        <a href="http://emerald.rf.gd/" target="_blank" rel="noopener noreferrer"> Home  </a> | 
        <a href="http://emerald.rf.gd/about-us/" target="_blank" rel="noopener noreferrer"> About Us </a> | 
        <a href="http://emerald.rf.gd/help-for-refugees/" target="_blank" rel="noopener noreferrer"> Help for Refugees </a> | 
        <a href="http://emerald.rf.gd/get-involved/" target="_blank" rel="noopener noreferrer"> Get Involved  </a> | 
        <a href="http://emerald.rf.gd/contact/" target="_blank" rel="noopener noreferrer"> Contact Us   </a> 
      
        </nav>
    
        <br></br>
      </div>
    );
}

componentDidMount(){
    fetch(this.state.dataRoute)
      .then(res => res.json())
      .then(products => this.setState((prevState, props) => {
        return { products: products.map(this.mapProduct)};
      }));
  }

  mapProduct(product){
    return {
      id: product.id,
      price: product.price,
      image: product.image,
      name: product.title.rendered,
      description: product.description
    }
}
}
export  default  App;

