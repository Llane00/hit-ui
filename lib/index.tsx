import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/icon';


ReactDOM.render(<div>
  <Icon name="up" 
    className="test-icon"
    onClick={()=>{console.log("onClick")}}
    onMouseEnter={()=>{console.log("onMouseEnter")}}
    onMouseMove={()=>{console.log("onMouseMove")}}
    onMouseLeave={()=>{console.log("onMouseLeave")}}
  />
</div>, document.getElementById("root"));
