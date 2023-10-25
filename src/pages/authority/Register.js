import React, { useState } from 'react';
import logo from '../../image/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios'; // import axios for making HTTP requests
import { useNavigate } from 'react-router-dom';

const Register = () => {
    // States for registration
    const [username, setName] =useState('');
    const [email, setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [gender, setGender] = useState(''); // Default as empty string
    // link to login
    const navigate=useNavigate()
   
    

     // Handling name email and password changes
     const handleName =(e) => setName(e.target.value);
     const handleEmailChange = (e) => setEmail(e.target.value);
     const handlePasswordChange = (e) => setPassword(e.target.value);
     const handleGender=(e) => setGender(e.target.value);

     const handleSubmit =(e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{username,email,password,gender})
        .then(result=>{console.log(result)
        navigate('/login')})
        .catch(err=> console.log(err))
     }
    

    return (
        <div className="bg-white flex justify-center w-full pt-5">
            <div className="bg-white max-w-4xl w-full relative rounded-xl shadow-lg pt-2.5 mt-20 mb-20 flex space-x-2.5 min-h-max">
                <div className="flex-1 px-2.5 flex flex-col justify-center items-center rounded-r-xl">
                    <h2 className="font-bold text-xl sm:text-2xl text-black text-shadow mb-4 text-center">Create your account</h2>

                    <div className="flex flex-col w-full max-w-xs mx-auto">
                        <label htmlFor="username" className="font-roboto text-gray-500 mt-5 font-semibold block">
                            Username
                            <input 
                                type="text" 
                                id="username"
                                value={username} // <- bind state
                                onChange={handleName} // <- handle change
                                placeholder="Enter your username"
                                autoComplete="username" //show autofill suggestions for an input field.
                                className="mt-1 w-full p-2 border rounded focus:border-blue-500" 
                            />
                        </label>

                        <label htmlFor="Email" className="font-roboto text-gray-500 mt-5 font-semibold block">
                            Email
                                {/**Bind the new handler functions to the respective input fields: */}
                                <input 
                                    type="email" 
                                    id="Email"
                                    value={email} // bind email to state
                                    onChange={handleEmailChange} // handle change
                                    placeholder="Enter your Email"
                                    autoComplete="email"
                                    className="mt-1 w-full p-2 border rounded focus:border-blue-500" 
                                />
                        </label>

                        <label htmlFor="password" className="font-roboto text-gray-500 mt-5 font-semibold block">
                            Password
                                <input 
                                    type="password" 
                                    id="password"
                                    value={password} // bind password to state
                                    onChange={handlePasswordChange} // handle change
                                    placeholder="Enter your password"
                                    className="mt-1 w-full p-2 border rounded focus:border-blue-500" 
                                />
                        </label>

                        {/*Gender*/}
                        <div className="mt-5 flex justify-end">
                            <div className="flex items-center mt-2">
                                <input 
                                    type="radio" 
                                    id="male" 
                                    name="gender" 
                                    value="male" 
                                    checked={gender === 'male'}
                                    onChange={handleGender} 
                                    className="mr-2"
                                />
                                <label htmlFor="male" className="font-roboto text-gray-500 mr-4">Male</label>

                                <input 
                                    type="radio" 
                                    id="female" 
                                    name="gender" 
                                    value="female" 
                                    checked={gender === 'female'}
                                    onChange={handleGender} 
                                    className="mr-2"
                                />
                                <label htmlFor="female" className="font-roboto text-gray-500">Female</label>
                            </div>
                        </div>

                    </div>

                    <button onClick={handleSubmit} className="bg-gray-200 mt-8 mb-6 py-2 px-5 rounded-full shadow font-roboto text-black font-semibold">
                        Submit
                    </button>

                    <div className="font-roboto text-sky-600 ml-3 inline-flex items-center">
                        <span>Already have an account?</span>
                        <Link to="/Login">
                            <span className="font-bold underline cursor-pointer ml-2 px-2 py-1 rounded">Login!</span>
                        </Link>
                    </div>
                </div>

                <div className="flex-1 px-2.5 bg-gray-400 rounded-r-xl">
                    <div className="p-5">
                        <h1 className="font-bold text-4xl sm:text-2xl text-black text-shadow mt-12 text-center">Register Now!</h1>
                        <img src={logo} alt="Taiwan Good Stuff Logo" className="w-full rounded-full shadow-lg mt-8" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
