import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import { useNavigate } from 'react-router-dom'

function ListEmployeeComponent() {

    const [employee, setEmployee] = useState([])
    const navigator = useNavigate('')

    const addEmployee = () => {
        navigator('/add-Employee')
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id) {
        console.log(id);
        deleteEmployee(id).then((response) => {
            getAllEmployees()
        }).catch((error) => {
            console.log(error);
        })
    }

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployee(response.data)
            // console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
    
    useEffect(()=>{
        getAllEmployees();
    },[])
    
    return (
        <div className='w-full h-screen bg-gray-700'>
            <HeaderComponent/>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <h2 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl '>List of Tasks : </h2>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[1.3rem] px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-1" onClick={addEmployee}>Add Tasks</button>
                
                <table className='w-full cursor-pointer text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead className='text-xs border border-black text-black uppercase bg-gray-50 dark:bg-gray-700 '>
                        <tr>
                            <th className='px-6 py-3'> Id</th>
                            <th className='px-6 py-3'>title</th>
                            <th className='px-6 py-3'>description</th>
                            <th className='px-6 py-3'>status</th>
                            <th className='px-6 py-3'>due_date</th>
                            <th className='px-6 py-3'>priority</th>
                            <th className='px-6 py-3'>created_at</th>
                            <th className='px-6 py-3'>updated_at</th>
                            <th className='px-6 py-3'>user_id</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            employee.map(e =>
                                <tr key={e.id} className='bg-white dark:bg-gray-600 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                    <td className='px-6 py-4 text-black text-[1rem]'>{e.id}</td>
                                    <td className='px-6 py-4 text-black text-[1rem]'>{e.firstName}</td>
                                    <td className='px-6 py-4 text-black text-[1rem]'>{e.lastName}</td>
                                    <td className='px-6 py-4 text-black text-[1rem]'>{e.email}</td>
                                    <td className='px-6 py-4 text-black text-[1rem] '>
                                        <button onClick={() => updateEmployee(e.id)} className='text-white text-[1rem] bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                                            update
                                        </button>

                                        <button type="button" onClick={() => removeEmployee(e.id)} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                        delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className=''>
                <FooterComponent/>
            </div>
        </div>
    )
}
export default ListEmployeeComponent