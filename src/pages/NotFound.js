import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return(
        <div>
            <div className='notFound'>
                <div>
                    <h1 className='title is-1'>Upps!! 404, page not found</h1>
                </div>
                <div>
                    <Link to='/' className='button'>Return to home</Link>
                </div>
            </div>
        </div>
    )
}