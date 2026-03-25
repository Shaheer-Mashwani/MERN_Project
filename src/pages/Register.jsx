import { useState } from "react";
import {useNavigate} from "react-router-dom";

export const Register = () => {

    const [user, setuser] = useState({
        username :"",
        email :"",
        phone :"",
        password :""
    });
    const navigate=useNavigate();
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setuser({
            ...user,
            [name] : value,
        })
    }

    //handle the form subbmision
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const response = await fetch("http://localhost:5000/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
    
        const data = await response.json();
        console.log("Register response:", data);
    
        if (response.ok) {
          //storing token on local host
          //const res_data=await response.json();
          console.log("registration successfully");
          localStorage.setItem('token',data);



          setuser({ username: "", email: "", phone: "", password: "" });
          alert("✅ Registered successfully!");
          navigate("/login");
        } else {
          alert(`❌ Error: ${data.msg}`);
        }
      } catch (error) {
        console.log("Register error:", error);
      }
    };
    
    
    return (
      <>
        <section className="py-12  min-h-screen flex items-center justify-center">
          <main className="w-full max-w-6xl">
            <div className=" rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
              
              {/* Left Side Image */}
              <div className="flex items-center justify-center p-6 ">
                <img
                  src="/images/register.png"
                  alt="registration"
                  width={400}
                  height={400}
                  className="max-w-full h-auto"
                />
              </div>
  
              {/* Right Side Form */}
              <div className="p-8">
                <h1 className="text-3xl font-bold text-blue-800 mb-6">
                  Registration Form
                </h1>
                <form className="space-y-5" onSubmit={handleSubmit}>
                  
                  {/* Username */}
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-blue-700 mb-1">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Enter username"
                      required
                      autoComplete="off"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email"
                      required
                      autoComplete="off"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
  
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-blue-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="Enter phone number"
                      required
                      autoComplete="off"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
  
                  {/* Password */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-blue-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter password"
                      required
                      autoComplete="off"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition"
                  >
                    Register
                  </button>
                </form>
              </div>
  
            </div>
          </main>
        </section>
      </>
    );
  };
  