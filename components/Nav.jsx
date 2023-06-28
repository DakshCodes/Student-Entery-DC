import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Nav = () => {

    const [path, setpath] = useState("");
    const router = useRouter();
    useEffect(() => {
        setpath(router.asPath);
    }, [router])

    return (
        <>
            <ul className="flex">
                <Link href={'/'}>
                    <li className="flex-1 mr-2">
                        <a className={`text-center block border -500 rounded py-2 px-4 ${path === "/" && "bg-blue-500 border-blue-500 !text-white"}   text-black`} href="#">All Users</a>
                    </li>
                </Link>

                <Link href={'/createuser'}>
                    <li className="flex-1 mr-2">
                        <a className={`text-center block border  rounded py-2 px-4 ${path === "/createuser" && "bg-blue-500 border-blue-500 !text-white"} text-black`} href="#">Create User</a>
                    </li>
                </Link>
                <Link href={'/login'}>
                    <li className="flex-1 mr-2">
                        <a className={`text-center block border  rounded py-2 px-4 ${path === "/login" && "bg-blue-500 border-blue-500 !text-white"} text-black`} href="#">Login</a>
                    </li>
                </Link>

            </ul>
        </>
    )
}

export default Nav
