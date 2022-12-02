import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import { FaGoogle } from 'react-icons/fa'

const Signup = () => {
    const { createUser, updateUser, verifyEmail, googleSignIn } = useContext(AuthContext)

    const handleSignup = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const image = form.image.files[0]
        const email = form.email.value
        const password = form.password.value
        //console.log(name, image, email, password);

        const formData = new FormData()
        formData.append('image', image)
        //5264a75dacc9a5a19565b12a2671f321

        const url = 'https://api.imgbb.com/1/upload?key=5264a75dacc9a5a19565b12a2671f321'

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData.data.display_url)
                createUser(email, password)
                    .then(result => {

                        //  updateUser
                        updateUser(name, imgData.data.display_url)

                            .then(
                                verifyEmail().then(() => {
                                    alert('Verify your email')
                                })
                            )
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))

            })
            .catch(err => console.log(err))
    }
    // google sign in
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => console.log(result.user.photoURL))
            .catch(err => console.log(err))
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div> */}
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="file" name='image' accept='image/*' className="input input-bordered" />
                        </div>

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
                            <button className="btn btn-primary">Sign up</button>
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

export default Signup;