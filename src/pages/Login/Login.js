import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import { FaGoogle } from 'react-icons/fa'
import toast from 'react-hot-toast'
import { setAuthToken } from '../../token/setAuthToken';


const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)

    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(result => {
                toast.success('Login successful')
                setAuthToken(result.user)
            })
            .catch(err => console.log(err))
    }
    // 
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => setAuthToken(result.user))
            .catch(err => console.log(err))
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" />


                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Log in</button>
                        </div>
                    </form>


                    <div className="divider"></div>
                    <div onClick={handleGoogleSignIn} className="grid h-20 card
                     rounded-box place-items-center"><FaGoogle /></div>
                </div>
            </div>
        </div>
    );
};

export default Login;