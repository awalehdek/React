import React from 'react'
import Navbar from './conponents/Navbar'
import Hero from './conponents/Hero'
import HomeCards from './conponents/HomeCards'


function App() {
  return (
    <>
    <Navbar/>
    <Hero title='React Web Dev' subtitle='Frontend'/>
    <HomeCards/>
  
     
    <body>
  

  {/*<!-- Hero Section -->*/}
 

   {/*<!-- Developers and Employers Section -->*/}
   <section className="py-4">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">Developers</h2>
          <p className="mt-2 mb-4">Browse jobs and get hire.</p>
          <a href="jobs.html" className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">Browse Jobs</a>
        </div>
      </div>
    </div>
  </section>
    
{/* Job Listings Section */}
<section className="bg-blue-50 px-4 py-10">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">Browse Jobs</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Job Listing 1 */}
      <div className="bg-white rounded-xl shadow-md relative p-6 transform -skew-y-2">
        <div className="p-4 skew-y-2">
          <div className="mb-6">
            <span className="text-gray-600 my-2">Full-Time</span>
            <h3 className="text-xl font-bold font-parallelogram">Senior React Developer</h3>
          </div>
          <p className="mb-5">We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript.</p>
          <p className="text-indigo-500 mb-2">$70K - $80K / Year</p>
          <div className="border border-gray-100 mb-5"></div>
          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <span className="text-orange-700 mb-3"><i className="fa-solid fa-location-dot text-lg"></i> Austin, TX</span>
            <a href="job.html" className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">Read More</a>
          </div>
        </div>
      </div>

      {/* Job Listing 2 */}
      <div className="bg-white rounded-xl shadow-md relative p-6 transform -skew-y-2">
        <div className="p-4 skew-y-2">
          <div className="mb-6">
            <span className="text-gray-600 my-2">Remote</span>
            <h3 className="text-xl font-bold font-parallelogram">Front-End Engineer (React)</h3>
          </div>
          <p className="mb-5">Join as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion for front-end development.</p>
          <p className="text-indigo-500 mb-2">$70K - $80K / Year</p>
          <div className="border border-gray-100 mb-5"></div>
          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <span className="text-orange-700 mb-3"><i className="fa-solid fa-location-dot text-lg"></i> Seattle, WA</span>
            <a href="job.html" className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">Read More</a>
          </div>
        </div>
      </div>

      {/* Job Listing 3 */}
      <div className="bg-white rounded-xl shadow-md relative p-6 transform -skew-y-2">
        <div className="p-4 skew-y-2">
          <div className="mb-6">
            <span className="text-gray-600 my-2">Remote</span>
            <h3 className="text-xl font-bold font-parallelogram">React.js Developer</h3>
          </div>
          <p className="mb-5">Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference.</p>
          <p className="text-indigo-500 mb-2">$70K - $80K / Year</p>
          <div className="border border-gray-100 mb-5"></div>
          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <span className="text-orange-700 mb-3"><i className="fa-solid fa-location-dot text-lg"></i> Fresno, CA</span>
            <a href="job.html" className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




  <section className="mx-auto max-w-lg my-10 px-6">
    <a href="jobs.html" className="block bg-black text-white text-center py-4 px-6 rounded-2xl hover:bg-gray-700">View All Jobs</a>
  </section>
</body>


    </>
  )
}

export default App
