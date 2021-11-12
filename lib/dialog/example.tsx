import React, { FC, useState } from 'react'
import Dialog, { alert, confirm, modal } from './index'

const DialogExample: FC = () => {
  const [visible, setVisible] = useState(false)

  const openModal = () => {
    const close = modal(
      <div>
        <h1>你好</h1>
        <button onClick={() => close()}>关闭</button>
      </div>,
      [],
      () => {
        console.log('no')
      }
    )
  }

  return (
    <div>
      <div>
        <h2>example 1</h2>
        <button onClick={() => setVisible(!visible)}>弹出Dialog</button>

        <Dialog
          visible={visible}
          buttons={[
            <button
              onClick={() => {
                setVisible(false)
              }}
            >
              Yes
            </button>,
            <button
              onClick={() => {
                setVisible(false)
              }}
            >
              No
            </button>,
          ]}
          maskClosable={false}
          onNo={() => {
            setVisible(false)
          }}
        >
          <div>
            <div>balabala</div>
            <button
              onClick={() => {
                setVisible(false)
              }}
            >
              close
            </button>
          </div>
        </Dialog>
      </div>

      <div>
        <h2>example 2 alert函数式调用 Dialog</h2>
        <button
          onClick={() => {
            alert('111')
          }}
        >
          alert
        </button>
      </div>

      <div>
        <h2>example 3 confirm函数式调用 Dialog</h2>
        <button
          onClick={() => {
            confirm(
              '111',
              () => {
                console.log('yes')
              },
              () => {
                console.log('no')
              }
            )
          }}
        >
          confirm
        </button>
      </div>

      <div>
        <h2>example 4 modal函数式调用 Dialog</h2>
        <button onClick={() => openModal()}>modal</button>
      </div>
    </div>
  )
}

export default DialogExample
