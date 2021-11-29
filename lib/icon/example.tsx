import React, { useCallback } from 'react'
import Icon from '.'

import classPrefixMaker from '../../lib/utils/classPrefixMaker'

export default function () {
  const scopedClass = classPrefixMaker('hit-ui')

  const iconClickHandle = useCallback((iconName) => {
    alert('you click the ' + iconName + ' icon')
  }, [])

  return (
    <div>
      <Icon
        className={scopedClass('left')}
        name="left"
        onClick={() => iconClickHandle('left')}
      />
      <Icon
        className={scopedClass('down')}
        name="down"
        onClick={() => iconClickHandle('down')}
      />
      <Icon
        className={scopedClass('right')}
        name="right"
        onClick={() => iconClickHandle('right')}
      />
      <Icon
        className={scopedClass('up')}
        name="up"
        onClick={() => iconClickHandle('up')}
      />
      <Icon
        className={scopedClass('close')}
        name="close"
        onClick={() => iconClickHandle('close')}
      />
    </div>
  )
}
