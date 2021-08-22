import React from "react";
import ReactDOM from "react-dom";
import './dialog.scss';

interface props {
  visible: boolean,
  title?: string,
  buttons?: Array<React.ReactElement>,
  maskClosable?: boolean,
  onOff: React.MouseEventHandler,
}

const classMaker = (prefix:string) => {
  return function(classNameString:string) {
    return [prefix, classNameString].filter(Boolean).join('-');
  }
}
const scopedClass = classMaker("hit-ui");


const Dialog: React.FunctionComponent<props> = (props) => {
  const onOff:React.MouseEventHandler = (e) => {
    props.onOff(e);
  }

  return (
    ReactDOM.createPortal(
      props.visible?
      <div className={scopedClass('dialog')}>
        <div className={scopedClass('mask')}></div>
        <div className={scopedClass('content')}>
          <div className={scopedClass('close')} onClick={onOff}>x</div>
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

export default Dialog;