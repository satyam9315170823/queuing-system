import React, { useState } from "react";
import { FiUser, FiList, FiPlusCircle } from "react-icons/fi";

const Form = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !service.trim()) return;
    onAdd(name, service);
    setName("");
    setService("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 text-left"
    >
      <h2 className="text-2xl font-semibold text-indigo-400 mb-2 tracking-wide flex items-center gap-2">
        <FiList className="text-indigo-400 text-3xl" />
        Add to Queue
      </h2>

      {/* Name Input */}
      <div className="relative">
        <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl py-3 pl-10 pr-4
          placeholder-gray-400 text-gray-200 outline-none focus:border-indigo-400 transition-all duration-300"
        />
      </div>

      {/* Service Select */}
     {/* Service Select */}
<div className="relative">
  <FiList className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />

  <select
    value={service}
    onChange={(e) => setService(e.target.value)}
    className="appearance-none w-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl 
              py-3 pl-10 pr-12 text-gray-200 outline-none focus:border-indigo-400 transition-all duration-300
              hover:border-indigo-300 cursor-pointer"
  >
    <option value="" disabled>Select Service</option>
    <option value="consultation" className="bg-zinc-900">Consultation</option>
    <option value="payment" className="bg-zinc-900">Payment</option>
    <option value="support" className="bg-zinc-900">Support</option>
  </select>

  {/* Custom Dropdown Arrow */}
  <svg
    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</div>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl py-3 px-4 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-indigo-600/40"
      >
        <FiPlusCircle className="text-2xl" />
        Add Customer
      </button>
    </form>
  );
};

export default Form;
