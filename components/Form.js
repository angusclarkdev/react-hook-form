import React from 'react'
import { useForm } from "react-hook-form";
import styles from './styles.module.scss'

const PATTERNS = {
  NAME: /^[A-Za-z]+$/i,
  PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4, 8}$/,
  EMAIL: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
}

export default function Form() {
  /** implement form submission and write data to file or other */
  const { register, errors, handleSubmit } = useForm()
  
  return (
    <div className={styles['form-container']}>
      <div className={styles['inner-wrapper']}>
        <h1 className={styles['title']}> Create Your Account </h1>
        <form className={styles['form']} onSubmit={handleSubmit()}>
          <div className={styles['form-section']}>
            <label htmlFor="company-name">Company Name</label>
            <input type="text" name='companyName' ref={register({ required: 'You need to specify a company', maxLength: 20 })} />
            {errors.companyName && <p className={styles['error-message']}> {errors.companyName.message} </p>}
          </div>
          <div className={styles['form-section']}>
            <label htmlFor="your-name">Your Name</label>
            <input type="text" name='name' ref={register({ required: 'Please enter your name', pattern: PATTERNS.NAME })} />
            {errors.name && <p className={styles['error-message']}> {errors.name.message} </p>}
          </div>
          <div className={styles['form-section']}>
            <label htmlFor="email-address">Email Address</label>
            <input type="text" name='emailAddress' ref={register({ required: 'Please enter a valid email address', pattern: PATTERNS.EMAIL })} />
            {errors.emailAddress && <p className={styles['error-message']}> {errors.emailAddress.message} </p>}
          </div>
          <div className={styles['form-section']}>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' ref={register({ required: 'Please enter a valid email address', pattern: PATTERNS.PASSWORD })} />
            {errors.password && <p className={styles['error-message']}> {errors.password.message} </p>}
          </div>
          <div className={styles['form-section']}>
            <input type="checkbox" name="checkbox" ref={register({ required: 'You must agree to our terms and conditions to continue' })} />
            <label htmlFor="register-checkbox">To register with us please tick to agree to our <a>Terms and conditions</a></label>
            {errors.checkbox && <p className={styles['error-message']}> {errors.checkbox.message} </p>}
          </div>
          <button type='submit'>Register</button>
        </form>
        <div>
        </div>
      </div>
      <p className={styles['sign-in-link']}>Already have an account? <a href="">Sign in</a> </p>
    </div>
  )
}