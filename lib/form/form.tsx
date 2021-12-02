import React, { FC } from 'react'
import { Input } from '../input/input'
import classPrefixMaker from '../../lib/utils/classPrefixMaker'
import './form.scss'

const scopedClass = classPrefixMaker('hit-ui-form')
export interface IFormData {
  [key: string]: any
}

interface IProps {
  value: IFormData
  fields: Array<{ name: string; label: string; input: { type: string } }>
  buttons: React.ReactFragment
  onChange: (e: IFormData) => void
  onSubmit: React.FormEventHandler<HTMLFormElement>
  errors: { [key: string]: string[] }
  errorsDisplayMode?: 'first' | 'all'
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
    <form className={scopedClass('')} onSubmit={onSubmit}>
      {props.fields.map((field) => (
        <div className={scopedClass('row')} key={field.name}>
          <div className={scopedClass('label')}>{field.label}&nbsp;:</div>
          <div className={scopedClass('input-item')}>
            <Input
              type={field.input.type}
              value={formData[field.name]}
              onChange={(e) => onInputChange(field.name, e.target.value)}
            />
            <div className={scopedClass('error-msg')}>
              {props.errors[field.name]
                ? props.errorsDisplayMode === 'first'
                  ? props.errors[field.name][0]
                  : props.errors[field.name].join(', ')
                : ''}
            </div>
          </div>
        </div>
      ))}
      <div>{props.buttons}</div>
    </form>
  )
}

Form.defaultProps = {
  errorsDisplayMode: 'first',
}
