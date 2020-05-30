import React from 'react'
import { useForm } from "react-hook-form";
import styles from './styles.module.scss'

export default function Form() {
  /** implement form submission and write data to file or other */
  const { handleSubmit } = useForm()
  return (
    <div className={styles['form-container']}>
      <div className={styles['inner-wrapper']}>
        <h1 className={styles['title']}> Create Your Account </h1>
        <form className={styles['form']} onSubmit={handleSubmit()}>
          <div className={styles['form-section']}>
            <label htmlFor="company-name">Company Name</label>
            <input type="text" name='company-name' />
          </div>
          <div className={styles['form-section']}>
            <label htmlFor="your-name">Your Name</label>
            <input type="text" name='your-name' />
          </div>
          <div className={styles['form-section']}>
            <label htmlFor="email-address">Email Address</label>
            <input type="text" name='email-address' />
          </div>
          <div className={styles['form-section']}>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' />
          </div>
          <div className={styles['form-section']}>
            <input type="checkbox" name="register-checkbox" />
            <label htmlFor="register-checkbox">To register with us please tick to agree to our <a>Terms and conditions</a></label>
          </div>
          <button>Register</button>
        </form>
        <div>
        </div>
      </div>
      <p className={styles['sign-in-link']}>Already have an account? <a href="">Sign in</a> </p>
    </div>
  )
}