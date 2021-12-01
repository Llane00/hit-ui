import { IFormData } from './form'

interface IFormRule {
  key: string
  required?: boolean
  maxLength?: number
  minLength?: number
  pattern?: RegExp
}

type IFormRules = Array<IFormRule>

interface IFormErrors {
  [key: string]: string[]
}

function isEmpty(value: any) {
  if (value === undefined || value === null || value === '') {
    return true
  }
  return false
}

export function noError(errors: IFormErrors) {
  return Object.keys(errors).length === 0
}

const validator = (formData: IFormData, formRules: IFormRules): IFormErrors => {
  let errors: any = {}

  const addError = (key: string, msg: string) => {
    if (errors[key] === undefined) {
      errors[key] = []
    }
    errors[key].push(msg)
  }

  formRules.map((rule) => {
    const key = rule.key
    const value = formData[key]

    if (rule.required && isEmpty(value)) {
      addError(key, 'required')
    }

    if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
      addError(key, 'too short')
    }

    if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
      addError(key, 'too long')
    }

    if (rule.pattern && !rule.pattern.test(value)) {
      addError(key, 'invalid value')
    }
  })
  return errors
}

export default validator
