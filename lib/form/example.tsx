import React, { FC, useCallback, useState } from 'react'
import { Form, IFormData } from './form'
import validator, { noError } from './validator'
import Button from '../../lib/button'

export const FormExample: FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    username: '',
    password: '',
  })

  const [fields] = useState([
    { name: 'username', label: 'username', input: { type: 'text' } },
    { name: 'password', label: 'password', input: { type: 'password' } },
  ])

  const onChange = useCallback((newValue: IFormData) => {
    setFormData(newValue)
  }, [])

  const [errors, setErrors] = useState({})
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
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
    },
    [formData, errors]
  )

  return (
    <Form
      value={formData}
      fields={fields}
      buttons={
        <>
          <Button type="submit" styleType="primary">
            submit
          </Button>
          <Button type="reset">reset</Button>
        </>
      }
      onChange={onChange}
      onSubmit={onSubmit}
      errors={errors}
    ></Form>
  )
}
