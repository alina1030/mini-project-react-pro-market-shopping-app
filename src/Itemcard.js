import React from 'react';
import {useCart} from "react-use-cart";

const Itemcard = (props) =>{
    const {addItem} = useCart();
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} class="card-img-top" alt="img1" style={{height:"100px",width:"200px"}}/>
                <div class="card-body text-center">
                    <h5 class="card-title">{props.name}</h5>
                    <h4 class="card-title">Rs {props.price}</h4>
                    <p class="card-text">{props.description}</p>
                    <button class="btn btn-success" onClick={()=>addItem(props.item)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Itemcard;