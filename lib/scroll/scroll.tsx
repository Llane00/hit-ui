import React, {
  HTMLAttributes,
  MouseEventHandler,
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
  const [barScrollTop, _setBarScrollTop] = useState(0) //自定义滚动条top距离
  const setBarScrollTop = (value: number) => {
    if (value < 0) return
    const scrollHeight = containerRef.current!.scrollHeight
    const viewHeight = containerRef.current!.getBoundingClientRect().height
    let maxBarTopValue =
      ((scrollHeight - viewHeight) * viewHeight) / scrollHeight
    if (value > maxBarTopValue) {
      return
    }
    _setBarScrollTop(value)
  }

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

  const draggingRef = useRef(false)
  const barFirstYRef = useRef(0)
  const barFirstTopRef = useRef(0)
  const onMouseDownBar: MouseEventHandler = (e) => {
    draggingRef.current = true
    barFirstYRef.current = e.clientY
    barFirstTopRef.current = barScrollTop
  }
  const onMouseMoveBar = (e: MouseEvent) => {
    if (draggingRef.current) {
      const delta = e.clientY - barFirstYRef.current
      const newBarTop = barFirstTopRef.current + delta
      setBarScrollTop(newBarTop)
      const scrollHeight = containerRef.current!.scrollHeight
      const viewHeight = containerRef.current!.getBoundingClientRect().height
      containerRef.current!.scrollTop = (newBarTop * scrollHeight) / viewHeight
    }
  }
  const onMouseUpBar = (e: MouseEvent) => {
    draggingRef.current = false
  }

  const onSelect = (e: Event) => {
    if (e.type === 'selectstart' && draggingRef.current) {
      e.preventDefault()
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMoveBar)
    document.addEventListener('mouseup', onMouseUpBar)
    document.addEventListener('selectstart', onSelect)
    return () => {
      document.removeEventListener('mousemove', onMouseMoveBar)
      document.removeEventListener('mouseup', onMouseUpBar)
      document.removeEventListener('selectstart', onSelect)
    }
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
          onMouseDown={onMouseDownBar}
        ></div>
      </div>
    </div>
  )
}

export default Scroll
