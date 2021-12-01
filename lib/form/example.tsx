import React, { FC, useState } from 'react'
import { Form, IFormData } from './form'
import validator, { noError } from './validator'

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

  const [errors, setErrors] = useState({})
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // check data
    const rules = [
      {
        key: 'username',
        required: true,
        maxLength: 12,
        minLength: 8,
        pattern: /^[A-aZ-z0-9]+$/,
      },
      {
        key: 'password',
        required: true,
        maxLength: 8,
        minLength: 8,
        pattern: /^[A-aZ-z0-9!@#$%^&*()-+]+$/,
      },
    ]
    setErrors(validator(formData, rules))

    // post data
    if (noError(errors)) {
      console.log('post data', formData, errors)
    } else {
      console.log('error', errors)
    }
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
      errors={errors}
    ></Form>
  )
}
