import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'


const Index = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [number, setnumber] = useState('');
    const [userid, setuserId] = useState('');
    const [user, setuser] = useState({})
    const router = useRouter();




    const fetchuser = async () => {
        const userId = router.basePath;
        const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
            method: "GET"
        });
        const json = await response.json()
        setuser(json[0]);
        setname(json[0].name)
        setemail(json[0].email)
        setnumber(json[0].number)
        setuserId(json[0]._id)
        if (json) return json;
        return {}
    }

    useEffect(() => {
        fetchuser();
    }, [])



    console.log(userid)

    const updateHandle = async (e) => {
        e.preventDefault();

        // console.log(query)
        if (userid) {
            const response = await fetch(`http://localhost:3000/api/users/${userid}`, {
                method: 'PUT',
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    number,
                })

            });

            console.log("update successful")

            const json = await response.json()
            
            router.push('/')
            return json;
            // }
        }
    }



    return (
        <div classNameName='h-screen flex flex-col justify-evenly items-center'>
            <h1 classNameName='font-bold text-3xl'>Update User</h1>
            <form className="w-full max-w-sm" >
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-blue-500 -500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Full Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={(e) => setname(e.target.value)} name="name" value={name} className="bg-gray-200  appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 " id="inline-full-name" type="text" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block  text-blue-500  font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Email
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={(e) => setemail(e.target.value)} name="email" value={email} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 " id="inline-password" type="email" placeholder="*******@gmail.com" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-blue-500  font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Number
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={(e) => setnumber(e.target.value)} name="number" value={number} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 " id="inline-password" type="text" placeholder="123456789" />
                    </div>
                </div>
                <div className="md:flex md:items-end">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button onClick={updateHandle} className="shadow  bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Update User
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Index
