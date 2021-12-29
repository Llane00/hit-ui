const getScrollWidth: () => any = () => {
  const tempDiv = document.createElement('div')
  tempDiv.style.cssText =
    'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'
  document.body.append(tempDiv)
  const width = tempDiv.offsetWidth - tempDiv.clientWidth
  document.body.removeChild(tempDiv)
  return width === 0 ? 15 : width
}

export { getScrollWidth }
