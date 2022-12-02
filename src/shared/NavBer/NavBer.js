import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import { FaUser } from 'react-icons/fa'

const NavBer = () => {
    const { logOut, user } = useContext(AuthContext)
    const menuItem = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/signup'>Sign up</Link></li>
        <li><Link to='/login'>Login</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Vision</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full border-blue-500 border-4">
                            {
                                user ?
                                    <img src={user?.photoURL} alt='user' />
                                    :
                                    <FaUser className='text-3xl pl-1' />
                            }

                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='text-xl font-semibold'>
                            <a>{user?.displayName}</a>
                        </li>
                        <li>
                            <a>{user?.email}</a>
                        </li>

                        <li>
                            <button onClick={logOut} className='btn btn-info'>Log out</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default NavBer;