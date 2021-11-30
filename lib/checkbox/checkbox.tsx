import React, { FC } from 'react'
import classPrefixMaker from '../utils/classPrefixMaker'
import './checkbox.scss'

const scopedClass = classPrefixMaker('hit-ui-checkbox')

interface IProps extends React.InputHTMLAttributes<Element> {}

export const Checkbox: FC<IProps> = (props) => {
  const { className, children, ...restProps } = props
  return (
    <input
      type="checkbox"
      className={scopedClass('', {
        extra: className,
      })}
      {...restProps}
    >
      {children}
    </input>
  )
}
