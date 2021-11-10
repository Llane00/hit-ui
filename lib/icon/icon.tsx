import React, { FC } from 'react'
import './importIcons'
import './icon.scss'
import classes from '../utils/classes'

interface IProps extends React.SVGAttributes<SVGElement> {
  name: string
}

const Icon: FC<IProps> = (props) => {
  const { className, ...restProps } = props
  return (
    <svg className={classes('hit-ui-icon', className)} {...restProps}>
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  )
}

export default Icon
