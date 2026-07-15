import React from 'react'

function Contact() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-4 my-20">
        <div className="w-full h-170 max-w-2xl border border-gray-500 bg-white shadow-sm p-10 rounded-md">
          <h1 className="text-5xl font-bold text-center mb-10">
            Contact us
          </h1>

          <form className="space-y-8">
            {/* Name */}
            <div>
              <label className="block text-2xl font-medium mb-3">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md px-5 py-4 text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-2xl font-medium mb-3">
                Phone 
              </label>

              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-md px-5 py-4 text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-2xl font-medium mb-3">
                Message 
              </label>

              <textarea
                rows="2"
                placeholder="Type your message here..."
                className="w-full border border-gray-300 rounded-md px-5 py-4 text-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-amber-200 hover:bg-amber-300 text-white text-xl font-semibold px-8 py-3 rounded-md transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact