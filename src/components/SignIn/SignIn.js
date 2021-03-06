import './SignIn.css'
import React, { useState } from 'react';
import { BsGoogle } from 'react-icons/bs'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
    const { error, setError, setIsLoading, signInWithGoogle, signInWithEmail } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const redirectURI = location.state?.from.pathname || '/'

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => history.push(redirectURI))
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false))
    }

    const handleSignInWithEmailPass = e => {
        e.preventDefault();
        if (pass.length >= 6) {
            signInWithEmail(email, pass)
                .then(result => {
                    setError('');
                    history.push(redirectURI);
                })
                .catch(err => {
                    if (err.message === 'Firebase: Error (auth/user-not-found).') {
                        setError("You don't have any account with this email.")
                    }
                    else {
                        setError(err.message)
                    }

                })
                .finally(() => setIsLoading(false))

        }
        else {
            setError('Password must be atleast 6 character long')
        }
    }

    return (
        <div className='signin'>
            <div className="signin-containner">
                <h2>Sign In</h2>
                <form onSubmit={handleSignInWithEmailPass}>
                    <p>Email : </p>
                    <input onChange={e => setEmail(e.target.value)} required type="email" placeholder='Enter your email' />
                    <br />
                    <p>Password : </p>
                    <input onChange={e => setPass(e.target.value)} required type="password" placeholder='Enter password' />
                    <br />
                    <p>{error}</p>
                    <br />
                    <input type="submit" value="Sign In" className='mt-3 btn btn-danger px-4 text-light' />
                </form>
                <button onClick={() => handleGoogleLogin()}><BsGoogle /> Sign in with Google </button>
                <Link to='/signup'>Create new account.</Link>
            </div>
        </div>
    );
};

export default SignIn;