import React, { useState } from "react";
import axios from "axios"

const Form = () => {
    // to store the value from frontend
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    console.log(userName, userEmail);

    // function to send data to backend
    const submitData = async () => {
        const data = {
            name: userName,
            email: userEmail
        }
        const res = await axios.post("/createUser", data)
        console.log(res);
    }

    // To handle the default
    const handleSubmit = (e) => {
        e.preventDefault()
        // To submit data
        submitData();
        // but empty the previous details
        setUserName("");
        setUserEmail("");
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-col text-center w-full mb-6">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                Create User
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}

                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}

                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Form;
