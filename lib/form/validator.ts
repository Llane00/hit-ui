import { IFormData } from './form'

interface IFormRule {
  key: string
  required?: boolean
  maxLength?: number
  minLength?: number
  pattern?: RegExp
  validator?: (value: string) => Promise<string>
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

type ErrorType = string | Promise<string>

const validator = (
  formData: IFormData,
  formRules: IFormRules,
  callback: (errors: any) => void
): void => {
  let errors: any = {}

  const addError = (key: string, error: ErrorType) => {
    if (errors[key] === undefined) {
      errors[key] = []
    }
    errors[key].push(error)
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

    if (rule.validator) {
      addError(key, rule.validator(value))
    }
  })

  const flattenErrors = flat(
    Object.keys(errors).map((key) =>
      errors[key].map((promise: ErrorType) => [key, promise])
    )
  )

  const newPromises = flattenErrors.map(([key, promiseOrString]) =>
    (promiseOrString instanceof Promise
      ? promiseOrString
      : Promise.reject(promiseOrString)
    ).then(
      () => [key, undefined],
      (reason: string) => [key, reason]
    )
  )

  Promise.all(newPromises).then((results) => {
    callback(zip(results.filter((item) => item[1])))
  })
}

export default validator

function flat(array: Array<any>) {
  let result: Array<any> = []
  array.map((item) => {
    if (item instanceof Array) {
      result.push(...item)
    } else {
      result.push(item)
    }
  })
  return result
}

function zip(keyValueList: Array<[string, string]>) {
  const result: { [key: string]: string[] } = {}
  keyValueList.map(([key, value]) => {
    result[key] = result[key] || []
    result[key].push(value)
  })
  return result
}
