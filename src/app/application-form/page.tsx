import React from 'react'
import ApplicationForm from './components/ApplyForm'

const page = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-[#9b65e7] to-[#39cbce]  px-14 py-24'>
                <h1 className='text-5xl text-center font-semibold mt-24 text-white'>Get your savings started</h1>
            </div>
            <ApplicationForm />
        </div>
    )
}

export default page
