import {useForm} from 'react-hook-form'
import { useLocation,useNavigate } from 'react-router'
import { useEffect} from 'react'
import axios from 'axios'


function EditEmployee() {
  const {register,
    handleSubmit,
    formState:{errors},
    setValue
  } = useForm()
  const navigate = useNavigate()

  const {state} = useLocation()
  useEffect(()=>{
    setValue("name",state.name)
    setValue("email",state.email)
    setValue("mobile",state.mobile)
    setValue("designation",state.designation)
    setValue("companyName",state.companyName)
  },[]);

  const saveModifiedEmp = async (modifiedEmp) =>{
    console.log(modifiedEmp)
    //Make http put req
    const res = await axios.put(`https://empapp-backend.onrender.com/employee-api/employees/${state._id}`,modifiedEmp)
    if(res.status === 200)
    {
      //Navigate back to List Of employees
      navigate("/list")
    }
  }
  return (
    <div>
        <h1 className='text-5xl text-center text-red-900'>Edit Employee</h1>
        {/* form */}
        <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(saveModifiedEmp)}>
        <input type="text" 
        {...register("name")} 
        placeholder='Enter the name' 
        className='mb-5 border  p-3 w-full rounded-2xl'/>

        <input type="text" 
        {...register("email")} 
        placeholder='Enter the email id' 
         disabled //Doesnt let to edit this field
        className='mb-5 border p-3 w-full rounded-2xl'/>

        <input type="number" 
        {...register("mobile")} 
        placeholder='Enter the mobile number' 

        className='mb-5 border p-3 w-full rounded-2xl'/>

        <input type="text" 
        {...register("designation")} 
        placeholder='Enter the designation' 
        className='mb-5 border p-3 w-full rounded-2xl'/>

        <input type="text" 
        {...register("companyName")} 
        placeholder='Enter the company name' 
        className='mb-5 border p-3 w-full rounded-2xl'/>

        <button type = "submit" className = "text-2xl rounded-2xl bg-red-200 text-red-900 block mx-auto p-3">Save</button>
        
        </form>
    </div>
     
  )
}
export default EditEmployee