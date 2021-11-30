import React, { FC, useCallback } from 'react'
import classPrefixMaker from '../utils/classPrefixMaker'
import './button.scss'

const scopedClass = classPrefixMaker('hit-ui-btn')

const buttonTypes: string[] = ['primary', 'success', 'warn', 'danger']

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: string
}

export const Button: FC<IProps> = (props) => {
  const { type, className, children, ...restProps } = props

  const createStyleClass = useCallback(() => {
    return type && buttonTypes.includes(type) ? `btn-${type}` : 'btn-primary'
  }, [type])

  return (
    <button
      className={scopedClass('', {
        extra: [className, createStyleClass()].join(' '),
      })}
      {...restProps}
    >
      {children}
    </button>
  )
}
