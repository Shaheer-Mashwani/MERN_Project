import { useState } from "react";

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  // handle input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", contact);

    // reset form after submit
    setContact({
      username: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="py-12 min-h-screen flex items-center justify-center">
      <main className="w-full max-w-6xl">
        <div className="rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Left Side Image */}
          <div className="flex items-center justify-center p-6">
            <img
              src="/images/support.png"
              alt="home"
              width={400}
              height={400}
              className="max-w-full h-auto"
            />
          </div>

          {/* Right Side Form */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-blue-800 mb-6">
              Contact Us
            </h1>
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-blue-700 mb-1"
                >
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
                  value={contact.username}
                  onChange={handleInput}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-blue-700 mb-1"
                >
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
                  value={contact.email}
                  onChange={handleInput}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-blue-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Enter message"
                  required
                  autoComplete="off"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={contact.message}
                  onChange={handleInput}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105847.2811903168!2d72.84416864925927!3d33.99953152966092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de4d486960e829%3A0x24811f20485d53f5!2sHar%C4%ABpur%2C%20Pakistan!5e0!3m2!1sen!2s!4v1758693144265!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
          className="mt-8 w-full rounded-lg shadow-md"
        ></iframe>
      </main>
    </section>
  );
};
