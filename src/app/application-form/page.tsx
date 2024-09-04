import React from 'react'
import ApplicationForm from './components/ApplyForm'

const page = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-[#390481] to-[#fe3976]  px-14 py-24'>
                <h1 className='text-5xl text-center font-semibold mt-14 text-white'>Let's get your savings started</h1>
            </div>
            <ApplicationForm />
        </div>
    )
}

export default page