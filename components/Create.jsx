import { useRouter } from 'next/router';
import React, { useState } from 'react'


const Create = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [number, setnumber] = useState('');
    const router = useRouter();

    const createHandle = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify({
                   name,
                   email,
                   number
                })
            });
            const json = await response.json()
            console.log("succesfully done create")
            setname("")
            setemail("")
            setnumber("")
            router.push('/')
            return json;
        } catch (e) {
            console.log(e.message);
        }
    }

 



    return (
        <>
            <form class="w-full max-w-sm" >
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-blue-500 -500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Full Name
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input onChange={(e)=> setname(e.target.value)} name="name" value={name} class="bg-gray-200  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 " id="inline-full-name" type="text"  />
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block  text-blue-500  font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Email
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input onChange={(e)=> setemail(e.target.value)} name="email" value={email} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 " id="inline-password" type="email" placeholder="*******@gmail.com" />
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-blue-500  font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Number
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input onChange={(e)=> setnumber(e.target.value)} name="number" value={number} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 " id="inline-password" type="text" placeholder="123456789" />
                    </div>
                </div>
                <div class="md:flex md:items-end">
                    <div class="md:w-1/3"></div>
                    <div class="md:w-2/3">
                        <button onClick={createHandle} class="shadow  bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Create User
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Create
