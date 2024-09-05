import Image from 'next/image'
import React from 'react'

import step1 from "../../assets/step1.png"
import step2 from "../../assets/step2.png"
import step3 from "../../assets/step3.png"
import step4 from "../../assets/step4.png"

const Steps = () => {
  return (
    <section className='max-w-5xl mx-auto mt-16 bg-white p-4 space-y-5'>
      <h1 className='text-center font-extrabold text-4xl mb-16'>Four Step Process To Save You Money on Your Taxes</h1>
      <article className='flex flex-col-reverse lg:flex-row justify-between items-center my-16 gap-10'>
        <div className="w-full lg:w-1/2 space-y-5">
            <h1 className='text-3xl font-extrabold'>Step 1</h1>
            <p className='text-xl font-medium'>Submit Your Address</p>
            <p className='text-gray-500'>We make it simple. Complete our quick & easy application online and our team takes it from there.</p>
        </div>
        <div className="w-full lg:w-1/2">
            <Image
              src={step1}
              height="100"
              width="400"
              alt="step1"
              className='mx-auto'
            />
        </div>
      </article>
      <article className='flex flex-col lg:flex-row justify-between items-center my-16 gap-10'>
        <div className="w-full lg:w-1/2">
            <Image
              src={step2}
              height="100"
              width="400"
              alt="step2"
              className='mx-auto'
            />
        </div>
        <div className="w-full lg:w-1/2 space-y-5">
            <h1 className='text-3xl font-extrabold'>Step 2</h1>
            <p className='text-xl font-medium'>We Check If You Overpaid</p>
            <p className='text-gray-500'>Our proprietary software sifts through millions of data points, aggregating all relevant information. This ensures we cover every detail when submitting your case.</p>
        </div>
      </article>
      <article className='flex flex-col-reverse lg:flex-row justify-between items-center my-16 gap-10'>
        <div className="w-full lg:w-1/2 space-y-5">
            <h1 className='text-3xl font-extrabold'>Step 3</h1>
            <p className='text-xl font-medium'>We Submit an Appeal on Your Behalf</p>
            <p className='text-gray-500'>Next, our dedicated tax professionals strategize, prepare, and submit a thorough appeal with supporting evidence at our own expense.</p>
            <p className='text-gray-500'>Once your application is submitted, we maintain open communication with the county and advocate on your behalf to ensure the success of your case.</p>
        </div>
        <div className="w-full lg:w-1/2">
            <Image
              src={step3}
              height="100"
              width="400"
              alt="step3"
              className='mx-auto'
            />
        </div>
      </article>
      <article className='flex flex-col lg:flex-row justify-between items-center mt-16 gap-10'>
        <div className="w-full lg:w-1/2">
            <Image
              src={step4}
              height="100"
              width="400"
              alt="step4"
              className='mx-auto'
            />
        </div>
        <div className="w-full lg:w-1/2 space-y-5">
            <h1 className='text-4xl font-extrabold'>Step 4</h1>
            <p className='text-xl font-medium'>Once Your Appeal Gets Accepted, We Split the Profits.</p>
            <p className='text-gray-500'>If you already paid your taxes in full prior to our appeal being processed, you will receive a refund check. If your appeal was accepted prior to your due date, you will receive a final adjusted bill.</p>
            <p className='text-gray-500'><span className='font-bold text-violet-500'>Find out for free if you overpaid.</span> Only pay us if you save money! No Reduction. No Fee.</p>
        </div>
      </article>
    </section>
  )
}

export default Steps
