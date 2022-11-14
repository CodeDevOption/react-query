export const getUsers = async () =>
   await fetch('http://localhost:3000/users').then((res)=> 
    res.json()
);

export const postUser = async ({id,name,email,imgURL})=>{
    const data = {
        id:id,
        name:name,
        email:email,
        imgURL:imgURL
    }
    await fetch('http://localhost:3000/users',{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}


export const deleteUser = async({id})=>{
    await fetch(`http://localhost:3000/users/${id}`,{
        method:"DELETE",
        headers:{
            'Content-Type': 'application/json'
        },
        
    })    
}