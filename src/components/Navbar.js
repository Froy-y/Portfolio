
import React from "react"

const Navbar = () => {
  return (
    <header className="bg-indigo-100 md:sticky top-0 z-10 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-black mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Froylan Rodriguez
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:text-white rounded text-base mt-4 md:mt-0">
          Interested in me
        </a>
      </div>
    </header>
  )
}

export default Navbar