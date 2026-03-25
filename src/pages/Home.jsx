import { Analytics } from "../components/Analytics";

export const Home = () => {
    return (
      <>
        <section className="py-12 min-h-screen flex items-center justify-center">
          <main className="w-full max-w-6xl">
            <div className=" rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
  
              {/* Left Side Content */}
              <div className="relative p-8  text-white flex flex-col justify-center">
                <h5 className="text-gray-400 mb-2 text-sm">
                  We are the World Best IT Company
                </h5>
  
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
                  Welcome to <br /> Shaheer Company
                </h1>
  
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Are you ready to take your business to the next level with
                  cutting-edge IT solutions? Look no further! At Thapa Technical,
                  we specialize in providing innovative IT services and solutions
                  tailored to meet your unique needs.
                </p>
  
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow">
                    Connect Now
                  </button>
                  <button className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow">
                    Learn More
                  </button>
                </div>
  
               
              </div>
  
              {/* Right Side Image */}
              <div className="flex items-center justify-center p-6 ">
                <img
                  src="/images/home.png"
                  alt="home"
                  width={400}
                  height={400}
                  className="max-w-full h-auto"
                />
              </div>
            </div>

           <Analytics />
          </main>
        </section>
        <section className="py-12 min-h-screen flex items-center justify-center">
          <main className="w-full max-w-6xl">
            <div className=" rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
  
              {/* Left Side Content */}
              <div className="flex items-center justify-center p-6 ">
                <img
                  src="/images/design.png"
                  alt="home"
                  width={400}
                  height={400}
                  className="max-w-full h-auto"
                />
              </div>
              
  
              {/* Right Side Image */}
              <div className="relative p-8  text-white flex flex-col justify-center">
                <h5 className="text-gray-400 mb-2 text-sm">
                  We are the World Best IT Company
                </h5>
  
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
                  Welcome to <br /> Shaheer Company
                </h1>
  
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Are you ready to take your business to the next level with
                  cutting-edge IT solutions? Look no further! At Thapa Technical,
                  we specialize in providing innovative IT services and solutions
                  tailored to meet your unique needs.
                </p>
  
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow">
                    Connect Now
                  </button>
                  <button className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow">
                    Learn More
                  </button>
                </div>
  
               
              </div>
            </div>

    
          </main>
        </section>
      </>
    );
  };
  