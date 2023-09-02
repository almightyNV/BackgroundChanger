import { useState } from "react"


function App() {

  const [color, setColor] = useState('black');

  return (
    <>
      <div 
      className="w-full h-screen duration-300"
      style={{backgroundColor: color}}
      >
        <div 
        className="fixed top-24 flex flex-wrap justify-center inset-x-14 px-2"
        >
          <div
          className="flex flex-wrap justify-center p-5 rounded-full bg-white gap-4 border-black border-2"
          >
            <button
            onClick={() => setColor('red')}
            className="bg-red-600 text-white border-black border-2 rounded-full px-6 py-4 shadow-xl"
            >
              Red
            </button>
            <button
            onClick={() => setColor('blue')}
            className="bg-blue-600 text-white border-black border-2 rounded-full px-6 py-4 shadow-4"
            >
              Blue
            </button>
            <button
            onClick={() => setColor('green')}
            className="bg-green-600 text-white border-black rounded-full px-6 py-4 border-2 shadow-4"
            >
              Green
            </button>
            <button
            onClick={() => setColor('#fde047')}
            className="bg-yellow-300 text-white border-black rounded-full px-6 py-4 border-2 shadow-4"
            >
              Yellow
            </button>
            <button
            onClick={() => setColor('orange')}
            className="bg-yellow-600 text-white border-black rounded-full px-6 py-4 border-2 shadow-4"
            >
              Orange
            </button>
            <button
            onClick={() => setColor('lightblue')}
            className="bg-cyan-300 text-black border-black border-2 rounded-full px-6 py-4"
            >
              Light Blue
            </button>
            <button
            onClick={() => setColor('#f0abfc')}
            className="bg-fuchsia-300 text-white border-black rounded-full px-6 py-4 border-2 shadow-4"
            >
              Pink
            </button>
            <button
            onClick={() => setColor('black')}
            className="bg-black text-white border-black rounded-full px-6 py-4 border-2 shadow-4"
            >
              Black
            </button>
            <button
            onClick={() => setColor('white')}
            className="bg-white-600 text-black border-black rounded-full px-6 py-4 border-2 shadow-4"
            >
              White
            </button>
            <button
            onClick={() => setColor('hotpink')}
            className="bg-pink-600 text-white border-black rounded-full px-6 py-4 border-2 shadow-4"
            >
              Hot Pink
            </button>
            <button
            onClick={() => setColor('#6b7280')}
            className="bg-gray-500 text-white border-black rounded-full px-6 py-4 border-2 shadow-4"
            >
              Gray
            </button>
            <button
            onClick={() => setColor('#059669')}
            className="bg-emerald-600 text-white rounded-full px-6 py-4 border-2 border-black shadow-4"
            >
              Emrald
            </button>
            <button
            onClick={() => setColor('#6b21a8')}
            className="bg-purple-800 text-white border-black border-2 rounded-full px-6 py-4"
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
