import {useForm} from 'react-hook-form'
import {useState} from 'react'
import { useNavigate } from 'react-router';

function CreateEmp() {

 const [loading,setLoading]=useState(false);
 const [error,setError]=useState("");
 const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm()

  const onFormSubmit = async(newEmpObj)=> {
    try {
      console.log(newEmpObj)
      setLoading(true)
      //Make HTTP request
   let res = await fetch("https://empapp-backend.onrender.com/employee-api/employees",{
    method:"POST",
    headers:{"Content-type":"application/json"},     
    body:JSON.stringify(newEmpObj),
   });

   if(res.status===201)
   {
    //Navigate to employees component programatically
    navigate("/list") //give path to which we want to navigate
   } else {
    let errorRes = await res.json()
    console.log("Error response is",errorRes)
    throw new Error(errorRes.reason)
   }
   }catch(err) 
   {
    console.log("Error in catch",err)
    setError(err.msg)
   } finally{
   setLoading(false)
   }

  }
  if(loading)
  {
    return <p className='text-center text-4xl text-pink-800'> Loading..Please Wait</p>
  }
  if(error)
  {
   return <p className='text-center text-4xl text-red-600'></p>
  }
  return (
    <div>
        <h1 className='text-5xl text-center text-pink-800'>Create New Employee</h1>
        {/* form */}
        <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" 
        {...register("name")} 
        placeholder='Enter the name' 
        className='mb-5 border p-3 w-full rounded-2xl'/>

        <input type="text" 
        {...register("email")} 
        placeholder='Enter the email id' 
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

        <button type = "submit" className = "text-2xl rounded-2xl bg-pink-200 text-pink-800 block mx-auto p-4"> Add Employee </button>
        
        </form>
    </div>
  )
}

export default CreateEmp