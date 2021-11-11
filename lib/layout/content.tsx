import React, { FC } from 'react'
import classPrefixMaker from '../utils/classPrefixMaker'

const scopedClass = classPrefixMaker('hit-ui-layout')

interface IProps extends React.HTMLAttributes<HTMLElement> {}

const content: FC<IProps> = (props) => {
  const { className, ...rest } = props

  return (
    <div className={scopedClass('content', { extra: className })} {...rest}>
      {props.children}
    </div>
  )
}

export default content
