"use client"
import React, {useState} from 'react'

const Faq = () => {
    const [active, setActive] = useState(0);
  return (
    <section className="py-12 bg-white">
    <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>
    <div className="max-w-4xl mx-auto">
      <div className="space-y-6">
        <div className="border-b">
          <button
            onClick={() => setActive(active === 0 ? -1 : 0)}
            className="flex justify-between w-full p-4 text-xl font-semibold focus:outline-none"
          >
            What is our service about?
            <i className={`fa fa-chevron-${active === 0 ? 'up' : 'down'}`}></i>
          </button>
          {active === 0 && (
            <div className="p-4 text-lg">
              We provide innovative solutions to help businesses grow faster.
            </div>
          )}
        </div>
        <div className="border-b">
          <button
            onClick={() => setActive(active === 1 ? -1 : 1)}
            className="flex justify-between w-full p-4 text-xl font-semibold focus:outline-none"
          >
            How does it work?
            <i className={`fa fa-chevron-${active === 1 ? 'up' : 'down'}`}></i>
          </button>
          {active === 1 && (
            <div className="p-4 text-lg">
              Our platform leverages cutting-edge technology to streamline workflows.
            </div>
          )}
        </div>
        <div className="border-b">
          <button
            onClick={() => setActive(active === 2 ? -1 : 2)}
            className="flex justify-between w-full p-4 text-xl font-semibold focus:outline-none"
          >
            What pricing plans do you offer?
            <i className={`fa fa-chevron-${active === 2 ? 'up' : 'down'}`}></i>
          </button>
          {active === 2 && (
            <div className="p-4 text-lg">
              We have a variety of plans that suit businesses of all sizes.
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Faq