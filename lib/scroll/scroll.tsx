import React, {
  HTMLAttributes,
  UIEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react'
import classPrefixMaker from '../../lib/utils/classPrefixMaker'
import { getScrollWidth } from './utils'
import './scroll.scss'

const scopedClass = classPrefixMaker('hit-ui-scroll')

interface IProps extends HTMLAttributes<HTMLDivElement> {}

const Scroll: React.FC<IProps> = (props) => {
  const { className, children, ...restProps } = props
  const [scrollWidth, setScrollWidth] = useState(0) //滚动条宽度
  const [barHeight, setBarHeight] = useState(0) //自定义滚动条高度
  const [barScrollTop, setBarScrollTop] = useState(0) //自定义滚动条top距离

  const containerRef = useRef<HTMLDivElement>(null)
  const onScroll: UIEventHandler = (e) => {
    const scrollHeight = containerRef.current!.scrollHeight
    const viewHeight = containerRef.current!.getBoundingClientRect().height
    setBarScrollTop(
      (containerRef.current!.scrollTop * viewHeight) / scrollHeight
    )
  }
  useEffect(() => {
    const scrollHeight = containerRef.current!.scrollHeight
    const viewHeight = containerRef.current!.getBoundingClientRect().height
    setScrollWidth(getScrollWidth())
    setBarHeight((viewHeight * viewHeight) / scrollHeight)
  }, [])

  return (
    <div
      className={scopedClass('', {
        extra: className,
      })}
      {...restProps}
    >
      <div
        className={scopedClass('inner')}
        style={{ right: -scrollWidth }}
        ref={containerRef}
        onScroll={onScroll}
      >
        {children}
      </div>
      <div className={scopedClass('track')}>
        <div
          className={scopedClass('bar')}
          style={{
            height: barHeight,
            transform: `translateY(${barScrollTop}px)`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default Scroll
