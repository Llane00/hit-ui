import React, { FC } from 'react'

export interface IFormData {
  [key: string]: any
}

interface IProps {
  value: IFormData
  fields: Array<{ name: string; label: string; input: { type: string } }>
  buttons: React.ReactFragment
  onChange: (e: IFormData) => void
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

export const Form: FC<IProps> = (props) => {
  const formData = props.value

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    props.onSubmit(e)
  }

  const onInputChange = (name: string, value: any) => {
    const newFormData = { ...formData, [name]: value }
    props.onChange(newFormData)
  }

  return (
    <form onSubmit={onSubmit}>
      {props.fields.map((field) => (
        <div key={field.name}>
          {field.label}
          <input
            type={field.input.type}
            value={formData[field.name]}
            onChange={(e) => onInputChange(field.name, e.target.value)}
          />
        </div>
      ))}
      <div>{props.buttons}</div>
      {props.children}
    </form>
  )
}
