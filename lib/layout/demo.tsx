import React from 'react'
import { Demo } from '../../lib/demo'
import LayoutExample from './example'

const x = require('!!raw-loader!./example')
export default () => {
  return (
    <Demo code={x.default}>
      <LayoutExample />
    </Demo>
  )
}
