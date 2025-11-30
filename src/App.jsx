import { useState } from "react";
import DisplayComponent from "./components/DisplayComponent";
import Form from "./components/Form";
import { MdOutlineDashboard } from "react-icons/md";

function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (name, service) => {
    setQueue([...queue, { id: Date.now(), name, service, status: "waiting" }]);
  };

  const updateStatus = (id, status) => {
    setQueue(queue.map(item => item.id === id ? { ...item, status } : item));
  };

  const removeFromQueue = (id) => {
    setQueue(queue.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen w-full bg-black text-gray-200 flex flex-col items-center px-6 py-10">
      
      <MdOutlineDashboard className="text-6xl text-indigo-500 mb-4 drop-shadow-[0_0_15px_rgba(99,102,241,0.6)]" />

      <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-10">
        Queuing Management System
      </h1>

      <main className="w-full max-w-5xl flex flex-col h-[90%]  md:flex-row gap-8 items-start">

        {/* Form Section */}
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl 
shadow-[0_8px_40px_rgba(0,0,0,0.6)] transition-all duration-300 w-full">
  <Form onAdd={addToQueue} />
</div>

        {/* Display Section */}
  <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-2xl 
shadow-[0_8px_40px_rgba(0,0,0,0.6)] transition-all duration-300
max-h-[500px] overflow-y-auto w-full">
  <DisplayComponent 
    queue={queue}
    onUpdate={updateStatus}
    onDelete={removeFromQueue}
  />
</div>

      </main>
    </div>
  );
}

export default App;
