import React, { FC } from 'react'
import classPrefixMaker from '../utils/classPrefixMaker'

const scopedClass = classPrefixMaker('hit-ui-layout')

interface IProps extends React.HTMLAttributes<HTMLElement> {}

const header: FC<IProps> = (props) => {
  const { className, ...rest } = props

  return (
    <div className={scopedClass('header', { extra: className })} {...rest}>
      {props.children}
    </div>
  )
}

export default header
