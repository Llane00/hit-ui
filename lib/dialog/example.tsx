import React, { useState } from 'react'
import Dialog, { alert, confirm, modal } from './index'
import Button from '../../lib/button'

export default function () {
  const [visible, setVisible] = useState(false)

  const openModal = () => {
    const close = modal(
      <div>
        <h1>hello</h1>
        <Button onClick={() => close()}>close</Button>
      </div>,
      [],
      () => {
        console.log('no')
      }
    )
  }

  return (
    <div className="dialog-example-content">
      <div className="example-item-content">
        <h2># example 1</h2>
        <Button onClick={() => setVisible(!visible)}>show Dialog</Button>

        <Dialog
          visible={visible}
          buttons={[
            <Button
              onClick={() => {
                setVisible(false)
              }}
            >
              Yes
            </Button>,
            <Button
              onClick={() => {
                setVisible(false)
              }}
            >
              No
            </Button>,
          ]}
          maskClosable={false}
          onNo={() => {
            setVisible(false)
          }}
        >
          <div>
            <div>balabala</div>
            <Button
              onClick={() => {
                setVisible(false)
              }}
            >
              close
            </Button>
          </div>
        </Dialog>
      </div>

      <div className="example-item-content">
        <h2># example 2 alert use function to show Dialog</h2>
        <Button
          onClick={() => {
            alert('111')
          }}
        >
          alert
        </Button>
      </div>

      <div className="example-item-content">
        <h2># example 3 confirm use function to show Dialog</h2>
        <Button
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
        </Button>
      </div>

      <div className="example-item-content">
        <h2># example 4 modal use function to show Dialog</h2>
        <Button onClick={() => openModal()}>modal</Button>
      </div>
    </div>
  )
}
