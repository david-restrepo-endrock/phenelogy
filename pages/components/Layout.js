import Head from 'next/head'
import React from 'react'

const Layout = ({children, title}) => {
    return (
        <>
            <Head>
                <title>Phenelogy - {title} </title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
            </Head>
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout