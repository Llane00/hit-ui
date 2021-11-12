import React from 'react'
import ReactDOM from 'react-dom'
import './dialog.scss'
import Icon from '../icon'
import classPrefixMaker from '../utils/classPrefixMaker'

interface IProps {
  visible: boolean
  title?: string
  buttons?: Array<React.ReactElement>
  maskVisible?: boolean
  maskClosable?: boolean
  onYes?: React.MouseEventHandler
  onNo: React.MouseEventHandler
}

const scopedClass = classPrefixMaker('hit-ui-dialog')

const Dialog: React.FC<IProps> = (props) => {
  const onNo: React.MouseEventHandler = (e) => {
    props.onNo(e)
  }

  const onClickMask: React.MouseEventHandler = (e) => {
    props.maskClosable && props.onNo(e)
  }

  const component = props.visible && (
    <>
      <div className={scopedClass('dialog')}>
        {props.maskVisible && (
          <div className={scopedClass('mask')} onClick={onClickMask}></div>
        )}
        <div className={scopedClass('content')}>
          <Icon className={scopedClass('close')} name="close" onClick={onNo} />
          <header className={scopedClass('header')}>
            {props.title || '提示'}
          </header>
          <main className={scopedClass('main')}>{props.children}</main>

          {props.buttons && props.buttons.length > 0 && (
            <footer className={scopedClass('footer')}>
              {props.buttons.map((button, index) =>
                React.cloneElement(button, { key: index })
              )}
            </footer>
          )}
        </div>
      </div>
    </>
  )

  return ReactDOM.createPortal(component, document.body)
}

Dialog.defaultProps = {
  maskVisible: true,
  maskClosable: true,
}

const modal = (
  content: React.ReactNode,
  buttons?: Array<React.ReactElement>,
  afterClose?: () => void
) => {
  const component = (
    <Dialog
      visible={true}
      buttons={buttons}
      onNo={() => {
        close()
        afterClose && afterClose()
      }}
    >
      {content}
    </Dialog>
  )
  const div = document.createElement('div')
  const close = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }

  document.body.appendChild(div)
  ReactDOM.render(component, div)

  return close
}

const alert = (content: string) => {
  const button = <button onClick={() => close()}>ok</button>
  const close = modal(content, [button])
}

const confirm = (
  content: string,
  onYesCallBack?: () => void,
  onNoCallBack?: () => void
) => {
  const onYes = () => {
    close()
    onYesCallBack && onYesCallBack()
  }

  const onNo = () => {
    close()
    onNoCallBack && onNoCallBack()
  }

  const buttons = [
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>,
  ]

  const close = modal(content, buttons, onNoCallBack)
}

export { Dialog, modal, alert, confirm }
