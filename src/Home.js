import React from 'react';
import Itemcard from './Itemcard';
import data from "./data";

const Home = () =>{
    
    return (
        <div>
            <h1 className="text-center mt-3">ProMarket</h1>
                <section className='py-4 container'>
                    <div className="row justify-content-center">
                        {data.productData.map((item,index)=>{
                            return (
                                <Itemcard 
                                img={item.img} 
                                title={item.name} 
                                desc={item.description} 
                                price={item.price} 
                                item={item} 
                                key={index}/>
                            )
                        })}
                        <Itemcard img="" title="title" desc="desc"/>
                    </div>

                </section>
        </div>
    );
};

export default Home;
