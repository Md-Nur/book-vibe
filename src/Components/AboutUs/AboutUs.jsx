import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-cover bg-no-repeat bg-center">
      <h1 className="text-4xl font-bold my-8">About Book Vibe Reviews</h1>
      <div className="w-full flex flex-col-reverse md:flex-row justify-around items-center px-20 gap-4 flex-wrap">
        <div className="prose max-w-md">
          <p>
            At Book Vibe Reviews, we're passionate bibliophiles on a mission to
            connect readers with incredible stories. Founded in 2023 by Amelia
            Garcia and Daniel Hernandez, our website is a haven for book lovers
            of all stripes.
          </p>
          <h2>Our Story</h2>
          <p>
            Amelia, an avid reader since childhood, dreamt of creating a
            platform to share her love of books and insightful reviews. Daniel,
            with his background in web development, brought Amelia's vision to
            life. Together, they built Book Vibe Reviews, a website dedicated to
            fostering a vibrant online community of readers.
          </p>
        </div>
        <img
          className="rounded-lg shadow-lg object-cover h-full md:h-auto"
          src="https://picsum.photos/seed/aboutUs/600/400"
          alt="People reading books in a cozy library"
        />
      </div>
      <div className="flex flex-col items-center mt-16">
        <h2 className="text-4xl font-bold">Our Team</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <li className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
            <img
              className="w-24 h-24 rounded-full mb-2 object-cover shadow-lg"
              src="https://picsum.photos/seed/ameliaGarcia/100/100"
              alt="Amelia Garcia"
            />
            <h3 className="text-lg font-bold mb-2">Amelia Garcia</h3>
            <p className="text-gray-700">Co-founder & Editor-in-Chief</p>
            <p className="text-gray-700">
              Unearths hidden gems, loves thought-provoking stories.
            </p>
          </li>
          <li className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
            <img
              className="w-24 h-24 rounded-full mb-2 object-cover shadow-lg"
              src="https://picsum.photos/seed/danielHernandez/100/100"
              alt="Daniel Hernandez"
            />
            <h3 className="text-lg font-bold mb-2">Daniel Hernandez</h3>
            <p className="text-gray-700">Co-founder & CTO</p>
            <p className="text-gray-700">
              Keeps the website running smoothly, finds innovative solutions.
            </p>
          </li>
          {/* Add your information here */}
          <li className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
            <img
              className="w-24 h-24 rounded-full mb-2 object-cover shadow-lg"
              src="https://picsum.photos/seed/yourName/100/100"
              alt="Nur"
            />
            <h3 className="text-lg font-bold mb-2">Muhammad Nur</h3>
            <p className="text-gray-700">Web developer</p>
            <p className="text-gray-700">
              Keeps the website running smoothly, finds innovative solutions.
            </p>
            <a
              href="https://www.linkedin.com/in/mdnur9211/"
              className="text-indigo-500 hover:underline mt-2"
            >
              See my profile
            </a>
          </li>
        </ul>
      </div>
      <div className="prose mt-16">
        <h2 className="text-center text-4xl font-bold">Our Mission</h2>
        <ul className="list-disc pl-4 mt-4">
          <li>Provide comprehensive and honest reviews to guide readers.</li>
          <li>Foster a love of reading with a welcoming discussion space.</li>
          <li>Support aspiring authors by showcasing their work.</li>
        </ul>
      </div>
      <div className="text-center mt-16">
        <h2>Join the Book Vibe Community</h2>
        <p>
          Whether you're a seasoned reader or just starting your journey, we
          invite you to join us!
        </p>
        <div className="flex justify-center items-center m-5 p-5 gap-3">
          <Link to="/" className="btn btn-accent">
            Explore Reviews
          </Link>
          <Link to="/contact" className="btn btn-secondary ">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
