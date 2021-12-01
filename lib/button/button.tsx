import React, { FC } from 'react'
import classPrefixMaker from '../utils/classPrefixMaker'
import './button.scss'

const scopedClass = classPrefixMaker('hit-ui-btn')
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: 'no-style' | 'primary' | 'success' | 'warn' | 'danger'
}

export const Button: FC<IProps> = (props) => {
  const { styleType, type, className, children, ...restProps } = props

  return (
    <button
      className={scopedClass(['', styleType], {
        extra: className,
      })}
      {...restProps}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  styleType: 'no-style',
}
