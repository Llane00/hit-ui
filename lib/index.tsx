// export { default as Icon } from './icon/icon'

import React from 'react'
import ReactDOM from 'react-dom'
import DialogExample from './dialog/dialog.example'
import LayoutExample from './layout/layout.example'

ReactDOM.render(
  <div>
    <LayoutExample></LayoutExample>
    <DialogExample></DialogExample>
  </div>,
  document.getElementById('root')
)
