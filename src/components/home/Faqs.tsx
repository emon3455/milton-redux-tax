"use client"
import React, { useState } from 'react'
import AccordionLayout from '@/utils/AccordianLayout/AccordianLayout';
import Image from 'next/image';
import faq from "../../assets/faq.png"

const accordionoptions = [
  { title: "When Should I Pay My Property Taxes?", des: "You should treat your property tax bill as you normally would. If you pay your tax bill before a successful reduction occurs, then your county will simply issue a refund to the method of payment that was used to pay the property taxes. Keep in mind, that appeals are automatically denied if the taxes are not paid by at least 75% by March 31st." },
  { title: "Can My Taxes Go Up If The Appeal Is Lost?", des: "No. Florida law does not allow the county to increase your taxes after your value has been set for that tax year. Winning or losing our appeal does not affect this. Your value can only be lowered, not increased." },
  { title: "What Are Your Fees?", des: "Miami Property Taxes only charges the agreed upon percentage of savings. Nothing else. There are no upfront, admin or other fees at all! We want to show our commitment to our clients, so we will advance the county filing fee for you. If we are unsuccessful in achieving a reduction, then you owe us nothing!\nNo Reduction. No Fee." },
  { title: "What Is A Property Tax Appeal?", des: "A Property Tax Appeal is a formal complaint against the assessed value of your property." },
  { title: "What Is A Property Tax Assessment?", des: "Your property’s assessment is one of the factors used by your local governments and school district to determine the amount of your property taxes. A property’s assessment is based on its market value. Market value is how much a property would sell for under normal conditions." },
  { title: "What Is Market Value?", des: "The price at which a property would sell if offered for sale under ordinary circumstances. Market value is usually determined by comparison with similar homes." },
  { title: "What Determines The Amount Of A Property Tax Bill?", des: "To calculate the amount you pay in property taxes; multiply your property’s assessment (your assessment minus any exemptions) by the tax rates issued by your school district, municipalities, counties and special districts.\n\nYour tax bill can change each year due to changes in your school district or local government budgets, revenue, total assessed value and tax rates. Changes in your assessment or exemptions can also impact your tax bill." },
  { title: "Why Do Taxes Go Up Every Year?", des: "Your property taxes (assessment) which appear on your tax bill, are multiplied by the tax rates to determine what you pay in taxes. Tax rates generally increase every year, so even if your assessment remains unchanged, your taxes increase." },
  { title: "What Can I Do About This?", des: "As a homeowner, you are entitled to file a Property Tax Appeal at your counties Property Appraisers Office and the Value Adjustment Board (VAB). If a petition is filed, the VAB will schedule a hearing in front of a Special Magistrate to determine if your property is overvalued for tax purposes." },
];

const Faqs = () => {
  const [accordionIndex, setAccordionIndex] = useState<number>(0);
  return (
    <section className='max-w-7xl mx-auto mt-16 bg-white p-4 space-y-5'>
      <h2 className='text-4xl font-extrabold text-center my-16'>Things You Need To know</h2>
      <div className="flex justify-between flex-col lg:flex-row items-center gap-20">
        <div className="w-full lg:w-1/2">
            <Image
              src={faq}
              height="200"
              width="500"
              alt="faq"
              className='mr-auto'
            />
        </div>
        <div className="w-full lg:w-1/2">
          {accordionoptions.map((item, i) => (
            <AccordionLayout
                key={i}
                title={item?.title}
                index={i}
                activeIndex={accordionIndex}
                setActiveIndex={setAccordionIndex}
            >
              <div key={i} className="text-sm font-medium my-1 text-justify">
                  {item?.des}
              </div>
            </AccordionLayout>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faqs

