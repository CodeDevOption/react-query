import { useEffect } from 'react';
import './App.css';
import User from './components/User';
import {useQuery, useMutation, useQueryClient} from 'react-query'
import { deleteUser, getUsers, postUser } from './helper';
import {v4 as uuidv4} from 'uuid'

function App() {

  
  const queryClient = useQueryClient();
  const {isLoading,data,error} = useQuery('getUsers',getUsers);
  const mutation = useMutation(postUser,{
    onSuccess:()=>{
      // is succsseful post Request and refesh state
        queryClient.invalidateQueries('getUsers');
    }
  })


  
  const onSubmit = async (e) =>{
    e.preventDefault();
    const name = e.target[0].value
    const email = e.target[1].value
    const imgURL = e.target[2].value
   await mutation.mutate({
      
      id:uuidv4(),
      name:name,
      email:email,
      imgURL:imgURL

    
    })
  }

//   const data = async (url)=>{
//     const res= await fetch(url)
//     const result = await res.json();
//     return result
 
//   }
// // const datas = data('https://jsonplaceholder.typicode.com/users');
// const datas = data('https://jsonplaceholder.typicode.com/todos');
// datas.then(data => {
  // })
     console.log(data);




  return (
    <div className=" bg-gray-800 h-screen w-screen flex justify-start flex-col">

          <form method='POST' onSubmit={onSubmit} >
            <div className=" mt-10 flex flex-col justify-center items-center sm:flex-row  gap-10 ">
                <input name='name' className='placeholder:pl-5 p-3 rounded-md outline-indigo-500 w-2/3 sm:w-1/4' type="text" placeholder='Username'/>
                <input name='email' className='placeholder:pl-5 p-3 rounded-md  outline-indigo-500 w-2/3 sm:w-1/4' type="text" placeholder='Email' />
                <input name='imgURL' className='placeholder:pl-5 p-3 rounded-md  outline-indigo-500 w-2/3 sm:w-1/4' type="text" placeholder='Image URL' />
                <button type='submit' className='bg-blue-500 py-2 rounded-md text-white shadow-md px-5'>Send</button>
            </div>
          </form>
          <section className=" sm:grid  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {
          data?.map((datas,index)=>(

            <User key={index} id={datas.id} name={datas.name} email={datas.email} src={datas.imgURL} />
          ))
        }

          </section>
            
    </div>
  );
}

export default App;
