import React, { FC } from 'react'
import classPrefixMaker from '../utils/classPrefixMaker'
import './checkbox.scss'

const scopedClass = classPrefixMaker('hit-ui-checkbox')

interface IProps extends React.HTMLAttributes<Element> {}

export const Checkbox: FC<IProps> = (props) => {
  const { className, children, ...restProps } = props

  const createText = () => {
    if (typeof children !== 'string') {
      return ''
    }

    return <span className={scopedClass('label')}>{children}</span>
  }

  return (
    <div className={scopedClass('')}>
      <input
        type="checkbox"
        className={scopedClass('input', {
          extra: className,
        })}
        {...restProps}
      />
      {createText()}
    </div>
  )
}
