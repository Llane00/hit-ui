import React, { useState } from "react"
import Dialog from "./dialog"
import {alert} from "./dialog"

const dialogExample = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <div>
        <h2>example 1</h2>
        <button onClick={
          () => setVisible(!visible)
        }>弹出Dialog</button>

        <Dialog 
          visible={visible} 
          buttons={[
            <button onClick={()=>{setVisible(false)}} >Yes</button>,
            <button onClick={()=>{setVisible(false)}} >No</button>
          ]}
          onOff={()=>{setVisible(false)}}
        >
          <div>
            <div>balabala</div>
            <button onClick={()=>{setVisible(false)}}>close</button>
          </div>
        </Dialog>
      </div>
      
      <div>
        <h2>example 2 函数式调用 Dialog</h2>
        <button onClick={
          () => {alert("111")}
        }>alert</button>
      </div>
    </div>
  )
}

export default dialogExample