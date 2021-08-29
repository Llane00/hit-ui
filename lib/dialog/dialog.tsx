import React from "react";
import ReactDOM from "react-dom";
import './dialog.scss';
import Icon from '../icon/icon';
import classPrefixMaker from "../utils/classPrefixMaker";

interface props {
  visible: boolean,
  title?: string,
  buttons?: Array<React.ReactElement>,
  maskClosable?: boolean,
  onOff: React.MouseEventHandler,
}

const scopedClass = classPrefixMaker("hit-ui");

const Dialog: React.FunctionComponent<props> = (props) => {
  const onOff:React.MouseEventHandler = (e) => {
    props.onOff(e);
  }

  const onClickMask:React.MouseEventHandler = (e) => {
    props.maskClosable && props.onOff(e);
  }

  return (
    ReactDOM.createPortal(
      props.visible?
      <div className={scopedClass('dialog')}>
        <div className={scopedClass('mask')} onClick={onClickMask}></div>
        <div className={scopedClass('content')}>
          <Icon className={scopedClass('close')} name="close" onClick={onOff} />
          <header className={scopedClass('header')}>
          {props.title || '提示'} 
          </header>
          <main className={scopedClass('main')}>{props.children}</main>

          {props.buttons && props.buttons.length>0?
          <footer className={scopedClass('footer')}>
            {props.buttons.map((button, index) => React.cloneElement(button, {key: index}))}
          </footer>
          : null}
        </div>
      </div>
      : null, 
      document.body
    )
  )
}

Dialog.defaultProps = {
  maskClosable: true
}

const alert = (content: string) => {
  const div = document.createElement("div");
  const onOff = () => {
    React.cloneElement(component, {visible: false}, div)
    ReactDOM.unmountComponentAtNode(div);
    div.remove()
  }
  const component = <Dialog visible={true} onOff={onOff}>{content}</Dialog>
  document.body.appendChild(div);
  ReactDOM.render(component, div)
};

export {alert}

export default Dialog;