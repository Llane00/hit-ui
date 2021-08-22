import React, { useState } from "react"
import Dialog from "./dialog"

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

    </div>
  )
}

export default dialogExample