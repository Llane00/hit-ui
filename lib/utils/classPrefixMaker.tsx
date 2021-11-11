/**
 * classPrefixMaker 接收一个className的前缀 prefix
 * @param prefix string 前缀
 * @return function scpoedClass
 *
 * scopedClass 可以返回最终className
 * @param classNameValue 需要带前缀的className
 * @param IOptions 不需要带前缀的className
 *
 */
interface IOptions {
  extra: string | undefined
}

type classTogglers = string | { [className: string]: boolean } | undefined

function classPrefixMaker(prefix: string) {
  return (classNameValue: string | Array<classTogglers>, options?: IOptions) =>
    (classNameValue instanceof Array
      ? classNameValue
      : [{ [classNameValue]: classNameValue !== undefined }]
    )
      .map((item) => {
        if (item && Object.values(item)[0] === true) {
          return Object.keys(item)[0]
        } else if (typeof item === 'string') {
          return item
        } else {
          return undefined
        }
      })
      .filter((v) => v !== undefined)
      .map((item) => [prefix, item].filter(Boolean).join('-'))
      .concat((options && options.extra) || [])
      .join(' ')
}

export default classPrefixMaker
