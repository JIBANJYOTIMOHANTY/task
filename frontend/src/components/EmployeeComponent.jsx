import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

function EmployeeComponent() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const { id } = useParams();
    const navigator = useNavigate()
    const [errors, setErrors] = useState(
        {
            firstName: '',
            lastName: '',
            email: ''
        }
    )

    useEffect(() => {
        if(id) {
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmail(response.data.email)
            }).catch(error => {
                console.error(error);
            })
        }
    },[id])

    function pageTitle() {
        if (id) {
            return <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"> Update Task 
            </h1>
        } else {
            return <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"> Add Tasks
            </h1>
        }
    }

    function validateEmail(email) {
        const result = email.endsWith("@gmail.com")
        return result;
    }

    const validateForm = () => {
        let valid = true;
        const errorsCopy = { ...errors }

        if (firstName.trim()) {
            errorsCopy.firstName = ''
        } else {
            errorsCopy.firstName = 'First name is required'
            valid = false
        }

        if (lastName.trim()) {
            errorsCopy.lastName = ''
        } else {
            errorsCopy.lastName = "Last Name is required"
            valid = false
        }

        if (email.trim()) {
            // Example usage:
            const email = document.getElementById('email').value;
            if (validateEmail(email)) {
                console.log('Valid Email Address');
                errorsCopy.email = ''
            } else {
                console.log('Invalid Email Address');
                errorsCopy.email = 'Please enter valid email.'
                valid = false;
            }
        } else {
            errorsCopy.email = 'Email is required'
            valid = false
        }

        setErrors(errorsCopy)
        return valid

    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const saveEmployee = (e) => {
        e.preventDefault()

        if (validateForm()) {
            const employee = { firstName, lastName, email }
            console.log(employee);

            if(id){
                updateEmployee(id, employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees')
                }).catch(error => {
                    console.error(error);
                })
            } else {
                createEmployee(employee).then((response) => {
                    console.log(response.data)
                    navigator('/employees')
                })
            }
        }

    }


    return (
        <div>
            <section className="flex flex-col items-center pt-6">
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        {
                            pageTitle()
                        }
                        <form className="space-y-4 md:space-y-6" method="POST">
                            <div>
                                <label htmlFor="FirstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter  Id</label>
                                <input type="text" value={firstName} name="FirstName" className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.firstName ? 'null' : ''}`} onChange={handleFirstName} />
                            </div>
                            {errors.firstName && <div className='text-red-500' >{errors.firstName}</div>}

                            <div>
                                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter title</label>
                                <input type="text" value={lastName} name="lastName" className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.lastName ? 'null' : ''}`}  onChange={handleLastName} />
                            </div>
                            {errors.lastName && <div className='text-red-500' >{errors.lastName}</div>}

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter  description </label>
                                <input type="email" value={email} name="email" id="email" className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.email ? 'null' : ''}`} onChange={handleEmail} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter  status </label>
                                <input type="email" value={email} name="email" id="email"  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.email ? 'null' : ''}`} onChange={handleEmail} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter  created_at </label>
                                <input type="email" value={email} name="email" id="email" className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.email ? 'null' : ''}`} onChange={handleEmail} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter  updated_at </label>
                                <input type="email" value={email} name="email" id="email"  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.email ? 'null' : ''}`} onChange={handleEmail} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter priority </label>
                                <input type="email" value={email} name="email" id="email"  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${errors.email ? 'null' : ''}`} onChange={handleEmail} />
                            </div>
                            {errors.email && <div className='text-red-500' >{errors.email}</div>}

                            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={saveEmployee}>submit</button>
                            
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EmployeeComponent
