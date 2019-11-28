import React from 'react';

const Home = () =>{
    return(
        <div>
            <div> I m Home Component </div>
            <button onClick={()=> console.log('Hi there !!')}>CLICK HERE</button>
        </div>
    )
}
export default Home;