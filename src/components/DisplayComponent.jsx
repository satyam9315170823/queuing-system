import React from "react";
import { FiUser, FiTrash2, FiCheckCircle } from "react-icons/fi";

const DisplayComponent = ({ queue, onUpdate, onDelete }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
        Current Queue
      </h2>

      {queue.length === 0 ? (
        <p className="text-gray-400 text-center">No customers in queue</p>
      ) : (
        queue.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow-md"
          >
            <div className="flex items-center gap-3">
              <FiUser className="text-indigo-400 text-2xl" />
              <div>
                <p className="font-medium text-lg">{item.name}</p>
                <p className="text-sm text-gray-400">{item.service}</p>

                {/* Status Badge */}
                <span
                  className={`mt-1 inline-block px-3 py-1 rounded-full text-xs font-semibold 
                  ${
                    item.status === "waiting"
                      ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40"
                      : "bg-green-500/20 text-green-400 border border-green-500/40"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => onUpdate(item.id, "done")}
                className="text-green-400 hover:text-green-300 text-xl transition"
              >
                <FiCheckCircle />
              </button>

              <button
                onClick={() => onDelete(item.id)}
                className="text-red-400 hover:text-red-300 text-xl transition"
              >
                <FiTrash2 />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DisplayComponent;
