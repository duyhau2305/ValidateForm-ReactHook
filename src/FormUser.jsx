import React from 'react'
import { useForm } from 'react-hook-form'

const RegisterForm = {
  fullName: "",
  gender: "",
  bio: "",
  status: "",
  password: "",
  email: "",
  confirmPass: ""
};



const  FormUser = (dataList, setDataList ) =>{
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
 
  const onSubmit = (data) => {
    if (data) {
      const existEmail = dataList?.find((item) => item.email === data.email);
      if (existEmail) {
        return alert("Email da ton tai");
      }
      setDataList([...dataList, data]);
      reset({
        fullName: "",
        bio: "",
        password: "",
        email: "",
        confirmPass: ""
      });
    }
  };
  
  return (
    <div className='container'>
      <h1 className='text-5xl font-medium py-4'> Form User</h1>
      <div>
      <form action="" className='my-6 w-[70%]'>          
        <div className='mb-3 flex flex-wrap '>
          <label htmlFor="ForName" className='basis-1/6 flex font-normal'>Name</label>
          <div className='basis-5/6'> 
            <input  {...register("fullName", {
                required: {
                  value: true,
                  message: "Please enter a FullName"
                }
              })}
              isInvalid={errors && errors.fullName && errors.fullName.message}
            type="text" placeholder='Name' className='w-full mx-8 block p-2 border-solid border-[1px] border-slate-400 rounded-md hover:border-cyan-700' 
              />     
          </div>          
        </div>
        <div className='mb-3 flex flex-wrap '>
          <label htmlFor="ForName" className='basis-1/6 flex font-normal'>Gender</label>
          <div className='basis-5/6 '> 
            <input {...register("gender")}
              defaultChecked="male" type="radio" className='ml-8 border-solid border-[1.5px] border-slate-500 rounded-[50px] '/> Male 
            <input  {...register("gender")} type="radio" className='rounded-50 ml-8'/> Female
          </div>          
        </div>
        <div className='mb-3 flex flex-wrap '>
          <label htmlFor="ForName" className='basis-1/6 flex font-normal'>Bio</label>
          <div className='basis-5/6'> 
            <input {...register("bio", {
                required: {
                  value: true,
                  message: "Please enter a Bio"
                },
                maxLength: {
                  value: 100,
                  message: "Required to enter less than 100 characters"
                }
              })}
              isInvalid={errors && errors.bio && errors.bio.message}
            type="text" placeholder='Bio' className='w-full mx-8 block px-2 h-16 border-solid border-[1px] border-slate-500 rounded-md hover:border-cyan-700' />
          </div>          
        </div>
        <div className='mb-3 flex flex-wrap'>
          <label htmlFor="ForName" className='basis-1/6 flex font-normal'>Email</label>
          <div className='basis-5/6'> 
            <input {...register("email", {
                required: {
                  value: true,
                  message: "Please enter email"
                },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email address"
                }
              })}
              isInvalid={errors && errors.email && errors.email.message}
            className=" w-full block mx-8 p-2 shadow appearance-none border border-slate-500 rounded  hover:border-cyan-700
             text-gray-700  leading-tight focus:outline-none focus:shadow-outline" id="password" type="email" placeholder="yourmail@email.com"/>
          </div>          
        </div>
        <div className='mb-3 flex flex-wrap'>
          <label htmlFor="ForName" className='basis-1/6 flex font-normal'>Status</label>
          <div className='basis-5/6'> 
          <select {...register("status")}
            aria-label="Default select example"
           id="countries" class="w-full block mx-8 p-2 shadow border-solid border-slate-500 border-[1px] rounded-md hover:border-cyan-700">            
            <option value="pending">Pending</option>
            <option value="compelete">Complete</option>
      </select>
            
          </div>          
        </div>
        <div className='mb-3 flex flex-wrap'>
          <label htmlFor="ForName" className='basis-1/6 flex font-normal'>Password</label>
          <div className='basis-5/6'> 
            <input class="w-full block p-2 mx-8 shadow appearance-none border border-slate-500 rounded 
              text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
          </div>          
        </div>
        <div className='mb-3 flex flex-wrap'>
          <label htmlFor="ForName" className='basis-1/6 flex font-normal'>Confirm Password</label>
          <div className='basis-5/6'> 
            <input {...register("password", {
                required: {
                  value: true,
                  message: "Please enter password"
                },
                minLength: {
                  value: 3,
                  message: "Password must be at least 3 characters long"
                }
              })}
              isInvalid={errors && errors.password && errors.password.message}
            class="w-full block p-2 mx-8 shadow  border-slate-500 rounded-md border-[1px] hover:border-cyan-700
              text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
          </div>          
        </div>

      </form>
      </div>     
      
      <div className='flex flex-wrap justify-end w-[75%]'>
          <button className='py-2 px-4  bg-blue-500  text-white rounded-md hover:bg-blue-700' onClick={handleSubmit(onSubmit)} >Register</button>
      </div>
      <div className='w-[75%] my-5 grid grid-flow-row border-solid border-white'>
      <table className='table-auto w-full ml-8 bg-slate-950 text-white border-white caption-bottom mx-auto'>
        <thead>
          <tr>
            <th className=''>fullName</th>
            <th className=''>Gender</th>
            <th className=''>Bio</th>
            <th className=''>Status</th>
            <th className=''>Email</th>
            <th className=''>password</th>
          </tr>

        </thead>
        <tbody>

        </tbody>
      </table>

      </div>
      


     

    </div>
    
  )
}

export default FormUser