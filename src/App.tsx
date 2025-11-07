import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex items-center justify-center space-x-4">
                  <a
                    href="https://vite.dev"
                    target="_blank"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img src={viteLogo} className="h-16" alt="Vite logo" />
                  </a>
                  <a
                    href="https://react.dev"
                    target="_blank"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <div className="animate-spin">
                      <img src={reactLogo} className="h-16" alt="React logo" />
                    </div>
                  </a>
                  {/* <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div> */}
                </div>
                <h1 className="text-4xl font-bold text-center text-gray-800 mt-6">Vite + React</h1>
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setCount((count) => count + 1)}
                    className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition-colors"
                  >
                    count is {count}
                  </button>
                  <p className="mt-4 text-gray-600">
                    Edit <code className="bg-gray-100 rounded px-2 py-1">src/App.tsx</code> and save
                    to test HMR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
