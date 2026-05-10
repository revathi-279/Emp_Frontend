import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router'
import axios from 'axios'

function ListOfEmps() {

    const [emps, setEmps] = useState([])
    const navigate = useNavigate()
    const location = useLocation()

    const goToEmployee = (empObj) => {
        navigate("/employee", { state: empObj })
    }

    const goToEditEmployee = (empObj) => {
        navigate("/edit-emp", { state: empObj })
    }

    const deleteEmpById = async (id) => {
        let res = await axios.delete(`https://empapp-backend.onrender.com/employee-api/employees/${id}`)

        if (res.status === 200) {
            getEmps()
        }
    }

    async function getEmps() {
        let res = await axios.get('https://empapp-backend.onrender.com/employee-api/employees')

        if (res.status === 200) {
            let resObj = res.data
            setEmps(resObj.payload)
        }
    }

    useEffect(() => {
        getEmps()
    }, [location])

    return (
        <div className='px-4 sm:px-6 md:px-10 py-6'>

            <h1 className='text-3xl sm:text-4xl text-pink-800 text-center pb-10 font-bold'>
                List Of Employees
            </h1>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

                {
                    emps.map((empObj) => (
                        <div
                            key={empObj._id}
                            className='bg-pink-100 p-5 rounded-3xl text-center shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between'
                        >

                            <div>
                                <p className='mb-3 text-gray-700 break-words'>
                                    {empObj.email}
                                </p>

                                <p className='mb-6 text-xl font-semibold text-pink-900 break-words'>
                                    {empObj.name}
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className='flex flex-col sm:flex-row gap-3 justify-center items-center'>

                                <button
                                    onClick={() => goToEmployee(empObj)}
                                    className='bg-pink-200 hover:bg-pink-300 text-pink-900 px-4 py-2 rounded-2xl w-full sm:w-auto transition duration-300'
                                >
                                    View
                                </button>

                                <button
                                    onClick={() => goToEditEmployee(empObj)}
                                    className='bg-pink-200 hover:bg-pink-300 text-pink-900 px-4 py-2 rounded-2xl w-full sm:w-auto transition duration-300'
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => deleteEmpById(empObj._id)}
                                    className='bg-pink-200 hover:bg-pink-300 text-pink-900 px-4 py-2 rounded-2xl w-full sm:w-auto transition duration-300'
                                >
                                    Delete
                                </button>

                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default ListOfEmps