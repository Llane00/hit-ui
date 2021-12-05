import React, { FC, useCallback, useState } from 'react'
import { Form, IFormData } from './form'
import validator, { noError } from './validator'
import Button from '../../lib/button'

const usenameList = ['neo', 'ben']
const checkUsernameUnique = (
  username: string,
  succeed: () => void,
  fail: () => void
) => {
  setTimeout(() => {
    console.log('get async result', !usenameList.includes(username))
    if (!usenameList.includes(username)) {
      succeed()
    } else {
      fail()
    }
  }, 1500)
}

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

  const usernameValidator = (username: string) => {
    return new Promise<string>((resolve, reject) => {
      checkUsernameUnique(username, resolve, () => reject('username is taken'))
    })
  }

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      // check data
      const rules = [
        {
          key: 'username',
          required: true,
          maxLength: 12,
          minLength: 3,
          pattern: /^[A-aZ-z0-9]+$/,
          validator: usernameValidator,
        },
        {
          key: 'password',
          required: true,
          maxLength: 8,
          minLength: 8,
          pattern: /^[A-aZ-z0-9!@#$%^&*()-+]+$/,
        },
      ]

      validator(formData, rules, (errors) => {
        setErrors(errors)
        console.log('check completed', errors)

        // post data
        if (noError(errors)) {
          console.log('post data', formData, errors)
        } else {
          console.log('error', errors)
        }
      })
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
