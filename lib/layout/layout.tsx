import React, { FC } from 'react'
import { ReactElement } from 'react-router/node_modules/@types/react'
import classPrefixMaker from '../utils/classPrefixMaker'
import Aside from './aside'
import './layout.scss'

const scopedClass = classPrefixMaker('hit-ui-layout')

interface IProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}

const Layout: FC<IProps> = (props) => {
  const { className, ...rest } = props
  const children = props.children as Array<ReactElement>
  const hasAside = children.reduce((result, node) => {
    return result || node.type === Aside
  }, false)

  return (
    <div
      className={scopedClass(['', { 'has-aside': hasAside }], {
        extra: className,
      })}
      {...rest}
    >
      {props.children}
    </div>
  )
}

export default Layout
