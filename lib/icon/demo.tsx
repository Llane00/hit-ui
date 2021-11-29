import React from 'react'
import { Demo } from '../../lib/demo'
import IconExample from './example'

const x = require('!!raw-loader!./example')

export default () => {
  return (
    <Demo code={x.default}>
      <IconExample />
    </Demo>
  )
}
