import React, { useState } from 'react';
import podfond from '../assets/Fond/register.jpg';
import loginStyles from '../styles/Login/Login_style.module.scss';
import Button from '../components/Button';
import GoogleButton from '../components/GoogleBtn';
function Login() {
  const [buttonText, setButtonText] = useState('Sign In');
  const [isFetching, setIsFetching] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    setButtonText('Fetching...');
    setIsFetching(true); 

    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('server error');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error during fetch:', error);
 
    } finally {
      setButtonText('Sign In');
      setIsFetching(false);
    }
  };

 

  return (
    <div className={loginStyles.container}>
      <div className={loginStyles.container_fond}>
        <img src={podfond} alt='Background' className={loginStyles.img} />
      </div>
      <div className={loginStyles.form_container}>
        <form className={loginStyles.form} onSubmit={handleLogin}>
          <h1 className={loginStyles.title}>Log in</h1>
          <div className={loginStyles.input_field}>
            <input 
              type='text' 
              className={loginStyles.input} 
              placeholder=" " 
              name="email" 
              id="email" 
              required 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} // Mise à jour de l'état
            />
            <label className={loginStyles.label} htmlFor="email">Username</label>
          </div>
          <div className={loginStyles.input_field}>
            <input 
              type='password' 
              className={loginStyles.input} 
              placeholder=" " 
              name="password" 
              id="password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className={loginStyles.label} htmlFor="password">Password</label>
          </div>
          <div className={loginStyles.forgot_password}>
            <a className={loginStyles.link} href='#'>Forgot password?</a>
          </div>

          <Button name={buttonText} onClick={handleLogin} disabled={isFetching} />
          <div className={loginStyles.separator}>
                <span className={loginStyles.separator_text}>Or register with Google</span>
              </div>
          <GoogleButton />
          <div className={loginStyles.footer}>
            <p className={loginStyles._text}>Don't have an account? <a href='#' className={loginStyles.link}>Sign up</a></p>
          </div>
        </form>
      </div>
   
    </div>
  );
}

export default Login;