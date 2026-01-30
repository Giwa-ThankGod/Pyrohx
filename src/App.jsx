import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layouts/header'
import Footer from './layouts/footer'
import Asterik from './assets/icons/asterisk.svg?react';
import ServiceCard from './components/ui/service-card'
import dataModel from './dataModel.json';
import WhyCard from './components/ui/why-card'
import HowCard from './components/ui/how-card'

import BackgroundImage from './assets/images/main_bg.png'
// import BackgroundImage from './assets/images/animated_dots.gif'
import UnionBg from './assets/images/union.png'
import TextInput from './components/forms/text-input'
import TextArea from './components/forms/text-area'
import TestimonyCard from './components/ui/testimony-card'

import ArrowLeft from './assets/icons/arrow-left-1.svg?react';
import ArrowRight from './assets/icons/arrow-right-1.svg?react';

function App() {
  const testimonialRef = useRef(null);

  const scrollTestimonials = (direction) => {
    const container = testimonialRef.current;
    if (!container) return;
    const scrollAmount = 320; // Adjust based on card width
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <div className='h-screen relative'>
        {/* Background Overlay */}
        <img src={BackgroundImage} className="w-full h-full absolute inset-0 z-0" />

        <div className='absolute inset-0 top-10 left-0 z-10 w-[400px] h-[400px]'>
          <img src={UnionBg} alt="" className='' />
        </div>

        <div className='z-10'>
          <Header />
        <div className='flex items-center justify-center py-36 sora text-3xl md:text-6xl'>
          <div className='w-full md:w-1/2 space-y-3 text-center'>

            <div className='flex items-center justify-center gap-5'>
              <div className="relative w-[55px] h-[26px]">
                <div className="absolute w-7 h-7 border-2 border-white rounded-full bg-red-500 left-0 top-0"></div>
                <div className="absolute w-7 h-7 border-2 border-white rounded-full bg-green-500 left-[18px] top-0"></div>
                <div className="absolute w-7 h-7 border-2 border-white rounded-full bg-blue-500 left-[36px] top-0"></div>
              </div>
              <p className='text-sm md:text-base'>Trusted by 5+ happy clients</p>
            </div>

            <h2>Build a Digital Asset That</h2>
            <div className='flex items-center justify-center gap-2 md:gap-5'>
              <h2>Drives</h2>
              <div className='relative bg-[rgba(65,184,131,0.1)]'>
                <span className='absolute -top-1 -left-1 w-3 h-3 bg-white border-primary'></span>
                <span className='absolute -top-1 -right-1 w-3 h-3 bg-white border-primary'></span>
                <div contentEditable className="p-3 border border-primary font-semibold text-3xl md:text-6xl
                  bg-gradient-to-b from-[#00CA99] to-[#0CDEAB] 
                  bg-clip-text text-transparent">
                  Real Growth
                </div>

                <span className='absolute -bottom-1 -left-1 w-3 h-3 bg-white border-primary'></span>
                <span className='absolute -bottom-1 -right-1 w-3 h-3 bg-white border-primary'></span>
              </div>
            </div>

            <p className='my-5 px-5 md:px-20 text-sm md:text-base text-tertiary'>
              We design and deliver websites, integrations, and AI-powered solutions that help your business grow faster and operate smarter.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-3 text-sm md:text-base">
              <button className="px-6 h-12 flex items-center gap-2 glow-button text-white rounded-full cursor-pointer">
                Schedule a Call
              </button>
              <button className="px-6 h-12 flex items-center gap-2 border border-[var(--primary-color)] text-[var(--primary-color)] rounded-full cursor-pointer">
                Explore services
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Middle Banner */}
      <div className='flex items-center justify-center gap-5 px-5 md:px-20 h-16 bg-[var(--secondary-color)] text-white overflow-auto'>
        <div className='flex flex-shrink-0 items-center gap-4'>
          <Asterik />
          <p>99% Client Satisfaction </p>
        </div>
        <div className='flex flex-shrink-0 items-center gap-4'>
          <Asterik />
          <p>5+ Projects Completed</p>
        </div>
        <div className='flex flex-shrink-0 items-center gap-4'>
          <Asterik />
          <p>5+ Years of Experience in Consulting</p>
        </div>

        <Asterik className="flex-shrink-0" />
      </div>

      {/* Services */}
      <section className='px-5 md:px-24 mt-10 md:mt-28 space-y-3'>
        <h2 className='sora text-xl md:text-4xl'>Our Services</h2>
        <p className="w-full md:w-4/12 md:pr-8 text-sm md:text-base text-tertiary">
          Everything you need to launch, scale, and optimize your digital experience, under one team.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5'>
          {dataModel.services.map((service, index) => (
            <ServiceCard
              key={service.title}
              thumbnail={service.thumbnail}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      {/* Why Pyrohx */}
      <section className='px-5 md:px-24 mt-10 md:mt-28 space-y-3'>
        <h2 className='sora text-xl md:text-4xl'>Why Choose Pyrohx</h2>
        <p className="w-full md:w-4/12 md:pr-8 text-sm md:text-base text-tertiary">
          We focus on results. Better systems, better performance, better growth.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-10'>
          {dataModel.why.map((item, index) => (
            <WhyCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className='mt-10 md:mt-28 bg-[#FAFAFA]'>
        <div className='flex flex-col items-center justify-center space-y-3 mt-5 md:pt-24 textx-center'>
          <h2 className='sora text-xl md:text-4xl'>How We Work</h2>
          <p className="w-full md:w-4/12 md:pr-8 text-sm md:text-base text-tertiary text-center">
            A clear process that keeps your project organized, fast, and stress-free, from first call to launch.
          </p>
        </div>

        <div className="relative">
          {dataModel.how.map((item, index) => (
            <HowCard
              key={item.title}
              icon={item.icon}
              index={item.index}
              title={item.title}
              description={item.description}
              stackIndex={index}
            />
          ))}
        </div>
      </section>

      <section className='relative bg-[var(--secondary-color)] px-5 md:p-24 mt-10 md:mt-28 space-y-3'>
        <img src={BackgroundImage} className="w-full h-full absolute inset-0 z-0" />

        <div className="
          absolute bottom-0 -left-50
          w-8/12 h-[130vh]
          rounded-full
          border-[70px] border-[var(--primary-color)]
          blur-2xl
          opacity-30
          z-0
          pointer-events-none
          overflow-hidden
        "></div>

        <div className='absolute bottom-20 left-20 z-0'>
          <img src={UnionBg} alt="" className='' />
        </div>

        <div className='relative z-10 p-5 md:p-0'>
          <h2 className='sora text-xl md:text-4xl text-white'>Testimonials</h2>
          <p className="w-full md:w-4/12 text-sm md:text-base text-[#D3D3D3]">
            From startups to service brands, clients choose Pyrohx for clean execution, clear communication, and results that last.
          </p>

          <div
            ref={testimonialRef}
            className='flex items-center gap-2 md:gap-10 my-5 mt-10 overflow-x-auto hide-scrollbar'
            style={{ scrollBehavior: 'smooth' }}
          >
            {dataModel.testimonials.map((item, index) => (
              <div key={item.name} className="flex-shrink-0">
                <TestimonyCard
                  name={item.name}
                  feedback={item.feedback}
                />
              </div>
            ))}
          </div>

          <div className='flex items-center justify-center z-10'>
            <div className='flex items-center gap-3'>
              <button
                type="button"
                onClick={() => scrollTestimonials('left')}
                className='flex items-center justify-center w-[56px] h-[56px] bg-[#1F494F] rounded-full cursor-pointer'
                aria-label="Scroll testimonials left"
              >
                <ArrowLeft />
              </button>
              <button
                type="button"
                onClick={() => scrollTestimonials('right')}
                className='flex items-center justify-center w-[56px] h-[56px] bg-[#1F494F] rounded-full cursor-pointer'
                aria-label="Scroll testimonials right"
              >
                <ArrowRight />
              </button>
            </div>
          </div>

          <div className='w-full flex flex-col md:flex-row gap-5 my-24 z-10'>
            <div className='md:w-7/12'>
              <h2 className='sora text-xl md:text-4xl text-white'>Ready to build <br /> something better?</h2>
              <p className="w-full md:w-4/12 text-sm md:text-base text-[#D3D3D3]">
                Let’s talk about your goals and map out the best digital solution for your brand.
              </p>
            </div>

            <div className='w-full md:w-5/12 flex justify-end bg-[#263F43] text-white border border-[#2C4D53] rounded-xl p-5 md:p-10'>
              <form action="" method="post" className='w-full space-y-3'>
                <TextInput
                  label="Fullname"
                  name="fullname"
                  placeholder='John Doe'
                />
                <TextInput
                  label="Email"
                  name="email"
                  type='email'
                  placeholder='john.doe@example.com'
                />
                <TextInput
                  label="Company name"
                  name="company"
                  placeholder='Figma'
                />
                <TextArea
                  label="Message"
                  name="message"
                />

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 text-sm md:text-base">
                  <button className="px-6 h-12 flex items-center gap-2 text-white bg-[var(--primary-color)] border border-gray-500 rounded-full cursor-pointer">
                    Send a message
                  </button>
                  <button className="px-6 h-12 flex items-center gap-2 text-[var(--primary-color)] border border-[var(--primary-color)] rounded-full cursor-pointer">
                    Schedule a Call
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  )
}

export default App
