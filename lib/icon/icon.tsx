import React, { FC } from 'react'
import './importIcons'
import './icon.scss'
import classPrefixMaker from '../utils/classPrefixMaker'

const scopedClass = classPrefixMaker('hit-ui-icon')
interface IProps extends React.SVGAttributes<SVGElement> {
  name: string
}

const Icon: FC<IProps> = (props) => {
  const { className, ...restProps } = props
  return (
    <svg
      className={scopedClass('', {
        extra: className,
      })}
      {...restProps}
    >
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  )
}

export default Icon
