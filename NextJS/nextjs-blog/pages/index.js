import React from "react";
import Link from "next/link"

function MyComponent(){
    return(
        <div>
            <div>Hello from Next.js!!</div>
            {/* This is server-side rendering
            <a href="/about">About</a> */}

            {/**This is standard react rendering in client-side */}
            <Link href='/about'>
                <a>About</a>
            </Link>
            
        </div>
    )
}

export default MyComponent;