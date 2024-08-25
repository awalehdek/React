const HomeCards = () => {
    return (
      <section className="py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-3xl shadow-xl">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold" style={{ fontFamily: "'Circular Std', sans-serif" }}>For Developers</h2>
              <p className="mt-3 mb-6">Browse jobs and get hired.</p>
              <a href="jobs.html" className="inline-block bg-gradient-to-r from-black to-gray-900 text-white rounded-full px-6 py-3 hover:bg-gray-700 text-lg">
                Browse Jobs
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HomeCards;
  