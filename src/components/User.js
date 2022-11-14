import React from 'react'
import {MdDelete} from 'react-icons/md'
import { useMutation, useQueryClient } from 'react-query';
import { deleteUser } from '../helper';

const User = ({id,name,email,src}) => {
  const queryClient = useQueryClient();
  const deleteuser = useMutation(deleteUser,{
    onSuccess:()=>{
      queryClient.invalidateQueries('getUsers');
    }
  })
  
  const deleteusers = ()=>{
    deleteuser.mutate({id:id})
    
  }
  
  return (
    <div className='relative flex shadow-lg gap-3  p-4 rounded-md bg-gray-500 m-4 text-gray-50'>
        <img className='w-14 h-14 rounded-full object-cover' src={src} alt="user" />
        <div className="">
            <p>{name}</p>
            <p>{email}</p>
        </div>
        <p className='absolute top-8  right-7' ><MdDelete onClick={deleteusers } className='text-2xl text-red-600 cursor-pointer active:text-red-700 hover:text-red-500' /></p>
    </div>
  )
}

export default User