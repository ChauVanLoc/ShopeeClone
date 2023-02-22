import type { RegisterOptions } from 'react-hook-form'
import FormType from 'src/types/FormType'

type RuleTyle = {
  [key in keyof FormType]: RegisterOptions
}

const Rule: RuleTyle = {}

export default Rule
