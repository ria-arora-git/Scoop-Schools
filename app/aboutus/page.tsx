
"use client";

import NavBar from "../components/NavBar";

export default function AboutUsPage() {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <div className="p-8 min-h-screen space-y-16">
        {/* Header Section */}
        <div className=" mb-12">
          <h1 className="text-4xl font-bold text-blue-600 leading-tight text-center">
            About Us
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            <strong>Scoop Schools: Scoop Out the Best School with One Simple Application!</strong>
            <br /><br />
            At Scoop Schools, we simplify the school search process for parents by providing comprehensive, reliable, and up-to-date information about schools in your city. From curriculum details to admission timelines, fee structures, and facilities, we bring everything you need to know under one roof.
            <br /><br />
            With a single application form, you can explore, compare, and apply to multiple schools effortlessly—saving time and reducing hassle. Our platform ensures parents make well-informed decisions by offering verified school listings, authentic reviews, and expert guidance.
            <br /><br />
            <strong>Why Choose Scoop Schools?</strong>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li> Verified School Listings</li>
              <li> Easy School Comparisons</li>
              <li> Admission Updates & Alerts</li>
              <li> Apply to Multiple Schools with One Form</li>
              <li> Reviews & Ratings by Parents</li>
            </ul>
            <br />
            We believe choosing the right school shouldn’t be overwhelming—that’s why we’re here to make the process smooth, transparent, and hassle-free.
            <br /><br />
            📍 <strong>Explore. Compare. Apply.</strong>
          </p>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-blue-500 mb-6">Meet the Team</h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Our talented and passionate team members work together to achieve our vision.
          </p>

          <div className="mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center flex">
            {/* Example Team Member */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-blue-600">Member 1</h3>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="text-gray-700 mt-4">
                John is the visionary behind our organization, leading the team with his expertise and passion.
              </p>
            </div>

            {/* Another Team Member */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-blue-600">Member 2</h3>
              <p className="text-gray-600">Lead Developer</p>
              <p className="text-gray-700 mt-4">
                Jane is responsible for our technical direction and development, ensuring our products are built to perfection.
              </p>
            </div>

            
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center mb-16">
          <h2 className="text-3xl font-semibold text-blue-500 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-4 max-w-3xl mx-auto">
            We’d love to hear from you! Feel free to reach out to us for any inquiries or collaboration opportunities.
          </p>
          <a
            href="mailto:contact@example.com"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
