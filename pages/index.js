import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {

  const [users, setusers] = useState([]);
  const router = useRouter();


  const Deletehandle = async (_id) => {
    const response = await fetch(`http://localhost:3000/api/users/${_id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': "application/json" },
    });
    const json = await response.json()
    router.reload()
    console.log("Delete Successfully")
    return json;
  }
  const Updatehandle = (_id)=>{
    router.push(`/edit/${_id}`)
  }


  const FetchData = async () => {
    const response = await fetch('http://localhost:3000/api/users', {
      method: "GET"
    })
    const json = await response.json()
    console.log(json)
    setusers(json)
    console.log("Successfully Done");
    return json;
  }

  useEffect(() => {
    FetchData()
  }, [])

  console.log(users);

  return (
    <section>
      <Head>
        <title>CRUD Application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="inline-block  h-screen w-full py-2 sm:px-6 lg:px-8">
        <table class="w-full text-left text-sm font-light">
          <thead class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
            <tr>
              <th scope="col" class="px-6 py-4">id</th>
              <th scope="col" class="px-6 py-4">Name</th>
              <th scope="col" class="px-6 py-4">Email</th>
              <th scope="col" class="px-6 py-4">Number</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((data, index) => {
                return (
                  <tr
                    class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                    <td class="whitespace-nowrap px-6 py-4">{data.name}</td>
                    <td class="whitespace-nowrap px-6 py-4">{data.email}</td>
                    <td class="whitespace-nowrap px-6 py-4">{data.number}</td>
                    <div className=' w-52 h-20 flex justify-between items-center'>
                      <button onClick={()=> Updatehandle(data._id)} className=' rounded bg-green-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]'>Edit</button>
                      <button className=' rounded bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]' onClick={() => Deletehandle(data._id)}>Delete</button>
                    </div>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}
