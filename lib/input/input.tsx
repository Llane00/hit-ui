import React, { FC, InputHTMLAttributes } from 'react'
import classPrefixMaker from '../../lib/utils/classPrefixMaker'
import './input.scss'

const scopedClass = classPrefixMaker('hit-ui-input')

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<IProps> = ({ className, ...restProps }) => {
  return (
    <input
      className={scopedClass('', {
        extra: className,
      })}
      {...restProps}
    />
  )
}
