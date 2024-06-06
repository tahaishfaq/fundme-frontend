import React, { useState } from "react";
const DonationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companySize: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your submit logic here, like sending data to an API
    console.log(formData);
    alert("Form submitted. Check the console for form data.");
  };
  return (
    <div className="py-14 bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-x-12 lg:px-32 px-8">
        <div className="mb-6 flex flex-col justify-center items-center gap-y-1.5 text-white">
          <h2 className="md:text-5xl text-3xl  font-[Teko] font-normal leading-tight ">
            Let's begin your fundraising journey!
          </h2>
          <p className="lg:w-96 w-full text-md mb-2">
            Donations play a critical role in supporting various causes and
            organizations around the world.
          </p>
          <p className="lg:w-96 w-full text-md">
            Donations are a vital lifeline for countless organizations and the
            communities they serve. By donating, individuals can make a
            significant difference in the lives of others, support important
            causes, and foster a sense of personal fulfillment. Whether through
            money, goods, or time, every donation counts and contributes to a
            better world.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-wrap gap-y-6 w-full pt-10"
        >
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleInputChange}
            value={formData.firstName}
            className="px-4 py-3 rounded-full text-gray-700 bg-[#D4E7F5]"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleInputChange}
            value={formData.lastName}
            className="px-4 py-3 rounded-full text-gray-700 bg-[#D4E7F5]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
            value={formData.email}
            className="px-4 py-3 rounded-full text-gray-700 bg-[#D4E7F5]"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleInputChange}
            value={formData.phone}
            className="px-4 py-3 rounded-full text-gray-700 bg-[#D4E7F5]"
          />

          <select
            name="companySize"
            onChange={handleInputChange}
            value={formData.companySize}
            className="px-4 py-3 rounded-full text-gray-500 bg-[#D4E7F5]"
          >
            <option value="">Get for</option>
            <option value="small">Animals</option>
            <option value="medium">Environment</option>
            <option value="large">Education</option>
            <option value="enterprise">Other</option>
          </select>
          <textarea
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
            placeholder="Write description"
            className="px-4 py-3 resize-none rounded-lg text-gray-700 bg-[#D4E7F5]"
          />
          <button
            type="submit"
            className="bg-[#2EABAF] hover:bg-[#15B8C7] text-white font-bold py-3 px-4 mt-5 rounded-full"
          >
            Get Donation
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
