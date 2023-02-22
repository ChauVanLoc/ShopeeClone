import type { RegisterOptions } from 'react-hook-form'
import FormType from 'src/types/FormType'
import * as yup from 'yup'

export type RuleType = {
  [key in keyof FormType]: RegisterOptions
}

export const Rules = (pw?: string): RuleType => ({
  email: {
    required: {
      value: true,
      message: 'Email bắt buộc!'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 5 - 160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài từ 5 - 160 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6 - 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6 - 160 ký tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Nhập lại password là bắt buộc'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6 - 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6 - 160 ký tự'
    },
    validate: (value) => value === pw || 'Confirm password không đúng!'
  }
})

const schema = yup.object({
  email: yup.string().email('Email là bắt buộc!').matches(/^\S+@\S+\.\S+$/, 'Email không đúng địng dạng!').required(),
  password: yup.number().positive().integer().required()
  confirm_password: yup.string().required()
})
