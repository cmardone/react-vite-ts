import { ChangeEvent, useState } from 'react'

 export const useForm = <T extends object>(initialState: T ) => {
  const [form, setForm] = useState(initialState)

  const formChangeHandle = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setForm({ ...form, [name]: value })
  }
  return {
    form,
    formChangeHandle,
    ...form
  }
}
