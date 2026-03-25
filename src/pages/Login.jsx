import { useState } from "react";
import {useNavigate} from "react-router-dom";

export const Login=()=>{

    const [user, setuser] = useState({
        email :"",
        password :"",
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
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
    
        const data = await response.json();
        console.log("login response:", data);
    
        if (response.ok) {
          setuser({ email: "", password: "" });
          alert("✅ login successfully!");

          
          //const res_data=await response.json();
          localStorage.setItem('token',data.token);
          navigate("/");
        } else {
          alert(`❌ Error: ${data.msg}`);
        }
      } catch (error) {
        console.log("login error:", error);
      }
    };
    
    return  <>
    <section className="py-12  min-h-screen flex items-center justify-center">
      <main className="w-full max-w-6xl">
        <div className=" rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Side Image */}
          <div className="flex items-center justify-center p-6 ">
            <img
              src="/images/login.png"
              alt="login"
              width={400}
              height={400}
              className="max-w-full h-auto"
            />
          </div>

          {/* Right Side Form */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-white mb-6">
              Login Form
            </h1>
            <form className="space-y-5" onSubmit={handleSubmit}>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
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

            
              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
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
                className="w-full bg-white text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Login now
              </button>
            </form>
          </div>

        </div>
      </main>
    </section>
  </>
}