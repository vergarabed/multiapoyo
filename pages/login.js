import React, { useEffect } from 'react'

import styles from '../styles/Home.module.css'
import Styled from 'styled-components'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {Helmet} from 'react-helmet';

import { fetchAlllogin } from './store/slices/login'
import { useDispatch, useSelector } from 'react-redux';


import { useRouter } from 'next/router';


const schema = yup.object({
  email: yup.string().email('Email incorrecto').required('Email incorrecto'),
  password: yup.string().required('Password incorrecto'),
}).required();

export default function login() {

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(fetchAlllogin(data));
  };

  const { error, token } = useSelector(state => state.login)

  const router = useRouter()

  useEffect(() => {
    if (token !== '') {
      router.push('/users/list')
    }
  }, [token])

  const AlertError = Styled.p`
    color:red;
  `;

  const ForgotPassword = Styled.a`
    text-decoration: none;
    color:gray;
    align-items: center;
    justify-content: center;
  `;


  return (
    <div className={styles.container}>
      <Helmet>
          <style>{'body { background: #326396!important; }'}</style>
      </Helmet>
      <main className="vh-100 d-flex justify-content-center align-items-center">
        {/* <MyH3>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </MyH3> */}

        <div className={styles.login_box + ''}>
          <h1 className="display-6 text-dark mb-3 text-center"><strong>Sign in</strong></h1>

          <p className="text-muted text-center">Occaecat anim cillum culpa excepteur magna excepteur nostrud...</p>
          
          <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input id="email" className="form-control" name="email" placeholder="Email" {...register("email")}/>
              <AlertError>{errors.email?.message}</AlertError>
              <AlertError>{error}</AlertError>
            </div>
            <div className="mb-3">
              <input id="password" className="form-control" name="password" placeholder="Password" {...register("password")} type="password"/>
              <AlertError>{errors.password?.message}</AlertError>
            </div>
            <button type="submit" className={styles.button_large + ' btn btn-secondary'}>Sign in</button>
          </form>

          <p className="text-center"><ForgotPassword href="#">Forgot yout password?</ForgotPassword></p>
        </div>
      </main>
    </div>
  )
}
