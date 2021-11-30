import React, { useState } from 'react'
import Dialog, { alert, confirm, modal } from './index'

export default function () {
  const [visible, setVisible] = useState(false)

  const openModal = () => {
    const close = modal(
      <div>
        <h1>hello</h1>
        <button onClick={() => close()}>close</button>
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
        <button onClick={() => setVisible(!visible)}>show Dialog</button>

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
        <h2>example 2 alert use function to show Dialog</h2>
        <button
          onClick={() => {
            alert('111')
          }}
        >
          alert
        </button>
      </div>

      <div>
        <h2>example 3 confirm use function to show Dialog</h2>
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
        <h2>example 4 modal use function to show Dialog</h2>
        <button onClick={() => openModal()}>modal</button>
      </div>
    </div>
  )
}
