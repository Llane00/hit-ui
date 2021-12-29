import React, { HTMLAttributes } from 'react'
import classPrefixMaker from '../../lib/utils/classPrefixMaker'
import './scroll.scss'

const scopedClass = classPrefixMaker('hit-ui-scroll')

interface IProps extends HTMLAttributes<HTMLDivElement> {}

const Scroll: React.FC<IProps> = (props) => {
  const { className, children, ...restProps } = props
  return (
    <div
      className={scopedClass('', {
        extra: className,
      })}
      {...restProps}
    >
      <div className={scopedClass('inner')}>{children}</div>
    </div>
  )
}

export default Scroll
