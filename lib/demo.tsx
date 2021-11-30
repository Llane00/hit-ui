import React, { useState, FC } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

interface IProps {
  code: string
}

export const Demo: FC<IProps> = (props) => {
  const [codeVisible, setCodeVisible] = useState(false)

  const codeComponent = (
    <div className="code-box">
      <Highlight {...defaultProps} code={props.code} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )

  return (
    <div className="demo-box">
      <div className="demo-component-box">{props.children}</div>
      <button
        className="demo-code-visible-btn"
        onClick={() => setCodeVisible((codeVisible) => !codeVisible)}
      >
        {codeVisible ? '隐藏' : '查看'}事例代码
      </button>
      {codeVisible && codeComponent}
    </div>
  )
}
