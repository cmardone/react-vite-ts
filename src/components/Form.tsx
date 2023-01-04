import { useForm } from '../hooks/useForm';

interface FormData {
  email: string,
  name: string
}
export const Form = () => {
  const { form, formChangeHandle, email, name } = useForm<FormData>({
    email: '',
    name: '',
  });
  return (
    <>
      <form autoComplete='off'>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='text'
            className='form-control'
            name='email'
            title='email'
            value={email}
            onChange={formChangeHandle}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            name='name'
            title='name'
            value={name}
            onChange={formChangeHandle}
          />
        </div>
      </form>
      <pre>{JSON.stringify(form)}</pre>
    </>
  )
}
