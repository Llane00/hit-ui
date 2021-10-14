import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import './dialog.scss';
import Icon from '../icon/icon';
import classPrefixMaker from "../utils/classPrefixMaker";

interface props {
  visible: boolean,
  title?: string,
  buttons?: Array<React.ReactElement>,
  maskVisible?: boolean,
  maskClosable?: boolean,
  onOn?: React.MouseEventHandler,
  onOff: React.MouseEventHandler,
}

const scopedClass = classPrefixMaker("hit-ui");

const Dialog: React.FunctionComponent<props> = (props) => {
  const onOff: React.MouseEventHandler = (e) => {
    props.onOff(e);
  }

  const onClickMask: React.MouseEventHandler = (e) => {
    props.maskClosable && props.onOff(e);
  }

  const component = props.visible &&
    <Fragment>
      <div className={scopedClass('dialog')}>
        {
          props.maskVisible && <div className={scopedClass('mask')} onClick={onClickMask}></div>
        }
        <div className={scopedClass('content')}>
          <Icon className={scopedClass('close')} name="close" onClick={onOff} />
          <header className={scopedClass('header')}>
            {props.title || '提示'}
          </header>
          <main className={scopedClass('main')}>{props.children}</main>

          {
            props.buttons && props.buttons.length > 0 &&
            <footer className={scopedClass('footer')}>
              {props.buttons.map((button, index) => React.cloneElement(button, { key: index }))}
            </footer>
          }
        </div>
      </div>
    </Fragment>

  return ReactDOM.createPortal(component, document.body);
}

Dialog.defaultProps = {
  maskVisible: true,
  maskClosable: true
}

const modal = (
  content: React.ReactNode,
  buttons?: Array<React.ReactElement>,
  afterClose?: () => void,
) => {
  const component = (
    <Dialog
      visible={true}
      buttons={buttons}
      onOff={() => {
        close();
        afterClose && afterClose();
      }}
    >
      {content}
    </Dialog >
  )
  const div = document.createElement("div")
  const close = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }

  document.body.appendChild(div)
  ReactDOM.render(component, div)

  return close;
}

const alert = (content: string) => {
  const button = <button onClick={() => close()}>ok</button>;
  const close = modal(content, [button]);
};

const confirm = (
  content: string,
  onOnCallBack?: () => void,
  onOffCallBack?: () => void
) => {
  const onOn = () => {
    close()
    onOnCallBack && onOnCallBack()
  }

  const onOff = () => {
    close()
    onOffCallBack && onOffCallBack()
  }

  const buttons = [
    <button onClick={onOn}>yes</button>,
    <button onClick={onOff}>no</button>
  ];

  const close = modal(content, buttons, onOffCallBack);
}

export { modal, alert, confirm }

export default Dialog;