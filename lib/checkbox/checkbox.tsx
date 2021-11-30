import React, { FC, useCallback } from 'react'
import classPrefixMaker from '../utils/classPrefixMaker'
import './checkbox.scss'

const scopedClass = classPrefixMaker('hit-ui-checkbox')

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox: FC<IProps> = ({ className, children, ...restProps }) => {
  const createText = useCallback(() => {
    if (typeof children !== 'string') {
      return ''
    }

    return <span className={scopedClass('label')}>{children}</span>
  }, [children])

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
