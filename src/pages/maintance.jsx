import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Maintance = () => {
  const navigate = useNavigate()
  const navigateToHome = () => {
    navigate('/')
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-white font-sans min-h-screen flex justify-center items-center">
        <main className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-8 py-16">
          <section>
            <h1 className="text-7xl font-extrabold text-blue-900">Oops!</h1>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              Under construction
            </h2>
            <p className="text-gray-500 mt-4 min-w-md">
              Website is still on construction.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-900 transition" onClick={navigateToHome}>
              BACK
            </button>
          </section>

          <section className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 600 400"
              className="w-full h-auto"
            >
              <line
                x1="500"
                y1="50"
                x2="500"
                y2="250"
                stroke="#2563eb"
                strokeWidth="8"
              />
              <line
                x1="400"
                y1="50"
                x2="500"
                y2="50"
                stroke="#2563eb"
                strokeWidth="8"
              />
              <line
                x1="400"
                y1="50"
                x2="460"
                y2="90"
                stroke="#2563eb"
                strokeWidth="8"
              />
              <line
                x1="460"
                y1="90"
                x2="520"
                y2="50"
                stroke="#2563eb"
                strokeWidth="8"
              />
              <line
                x1="500"
                y1="50"
                x2="500"
                y2="150"
                stroke="#2563eb"
                strokeWidth="4"
              />
              <polygon
                points="480,150 520,150 500,190"
                fill="#facc15"
                stroke="#eab308"
                strokeWidth="4"
              />
              <text
                x="492"
                y="175"
                fontSize="30"
                fill="#1f2937"
                fontWeight="bold"
              >
                !
              </text>
              <rect
                x="200"
                y="160"
                width="200"
                height="120"
                rx="10"
                fill="#1f2937"
              />
              <rect x="200" y="200" width="200" height="40" fill="#facc15" />
              <circle cx="180" cy="150" r="12" fill="#facc15" />
              <rect x="170" y="160" width="20" height="40" fill="#3b82f6" />
            </svg>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Maintance;
