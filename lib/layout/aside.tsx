import React, { FC } from 'react'
import classPrefixMaker from '../utils/classPrefixMaker'

const scopedClass = classPrefixMaker('hit-ui-layout')

interface IProps extends React.HTMLAttributes<HTMLElement> {}

const aside: FC<IProps> = (props) => {
  const { className, ...rest } = props

  return (
    <div className={scopedClass('aside', { extra: className })} {...rest}>
      {props.children}
    </div>
  )
}

export default aside
