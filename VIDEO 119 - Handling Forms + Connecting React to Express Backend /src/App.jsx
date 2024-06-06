import { useState } from 'react'
import { useForm } from 'react-hook-form'

import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()


  const delay = (d) =>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }


  const onSubmit = async (data) => {
    await delay(2)                    // Simulating Network Delay !
    console.log(data)
  }



  return (
    <>
    {isSubmitting && <div>Please Wait... Submitting your form !</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", { required: {value: true, message: "This field is required."}, minLength: {value: 5, message: "Minimum length is 5"}, maxLength: {value: 10, message: "Maximum length is 10"} })} type="text" />
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <br />
          <input placeholder='password' {...register("password", { required: {value: true, message: "This field is required."}, minLength: {value: 5, message: "Minimum length of password is 5"}, maxLength: {value: 10, message: "Maximum length is 10"},})} type="password" />
          {errors.password && <div className='white'>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default App
