import React, { FC, useState } from 'react'
import { Form, IFormData } from './form'

export const FormExample: FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    username: '',
    password: '',
  })

  const [fields] = useState([
    { name: 'username', label: '用户名', input: { type: 'text' } },
    { name: 'password', label: '密码', input: { type: 'password' } },
  ])

  const onChange = (newValue: IFormData) => {
    setFormData(newValue)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // check data

    // post data
    console.log(formData)
  }
  return (
    <Form
      value={formData}
      fields={fields}
      buttons={
        <>
          <button type="submit">提交</button>
          <button>返回</button>
        </>
      }
      onChange={onChange}
      onSubmit={onSubmit}
    >
      {JSON.stringify(formData)}
    </Form>
  )
}
