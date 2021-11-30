import React from 'react'
import { Demo } from '../../lib/demo'
import CheckboxListExample from './example'

const x = require('!!raw-loader!./example')

export default () => {
  return (
    <Demo code={x.default}>
      <CheckboxListExample />
    </Demo>
  )
}
