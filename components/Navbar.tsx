import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    return (

        <div className="flex justify-center gap-10 mt-4">
            <Link href='/'>Bisección</Link>
            <Link href='/secant'>Secante</Link>
        </div>
    )
}
