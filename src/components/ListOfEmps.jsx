import {useState,useEffect} from 'react' 
import {useNavigate,useLocation} from 'react-router'
import axios from 'axios'

function ListOfEmps() {
    const [emps,setEmps] = useState([])
    const navigate = useNavigate()
    const location = useLocation()


    const goToEmployee = (empObj) => {
        //Navigate to employee when user clicks View option in List of Employees
        //Navigate to employee while holding that employee object
        navigate("/employee",{state:empObj}) //state: takes the object while navigating 
    }

    const goToEditEmployee = (empObj) =>
    {
        navigate("/edit-emp",{state:empObj})
    }
    const deleteEmpById = async (id) => {
        let res = await axios.delete(`https://empapp-backend.onrender.com/employee-api/employees/${id}`)
        if(res.status===200) //After deleting what we have to display
        {
          //Get latest employee data
          getEmps()
        }
    }
     //Get all emps - kept outiside useEffect()
    async function getEmps() {
            let res = await axios.get('https://empapp-backend.onrender.com/employee-api/employees')
            if(res.status===200)
            {
                let resObj = res.data
                setEmps(resObj.payload)
            }
        }//Write all loading try-catch and error handlng

    useEffect(() => {
        getEmps()
    },[location])

  return (
    <div>
        <h1 className='text-4xl text-pink-800 text-center pb-10'>List Of Employees</h1>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
            {
                emps.map((empObj) => (
                    <div key={empObj._id} className='bg-pink-100 p-5 rounded-3xl text-center'>
                    <p className='mb-4'>{empObj.email}</p>
                    <p className='mb-6'>{empObj.name}</p>
                        {/* buttons */}
                      <div className='flex justify-around'>
                    <button onClick = {()=>goToEmployee(empObj)} className='bg-pink-200 text-pink-900 p-3 rounded-2xl'>View</button>
                    <button onClick = {()=>goToEditEmployee(empObj)} className='bg-pink-200 text-pink-900 p-3 rounded-2xl'>Edit</button>
                     <button onClick = {()=>deleteEmpById(empObj._id)} className='bg-pink-200 text-pink-900 p-3 rounded-2xl'>Delete</button>
                      </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
export default ListOfEmps