import React from 'react';
import { throttle } from "lodash";
// import catImage from"../img/user/Daco_1546531.png";

const ReactThrottle =()=>{
  const throttleFunc = throttle(() => {
    console.log("Throttle API Call");
  }, 1000);

    return (
      <>
        <div className ='FPS'>
          <h3>이름</h3>
          <input className='num1' type="text" onChange={throttleFunc}/>
          <h3>연령</h3>
          <input type="text" onChange={throttleFunc}/>
          <h3>성별</h3>
          <input type="text" onChange={throttleFunc}/>
          <h3>주무기</h3>
          <input type="text" onChange={throttleFunc}/>
          <h3>보조무기</h3>
          <input type="text" onChange={throttleFunc}/>
        </div>
      </>
    )
  }


export default ReactThrottle;