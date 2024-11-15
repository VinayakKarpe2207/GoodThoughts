import image1 from './assets/goodthoughts/1.jpeg';
import image2 from './assets/goodthoughts/2.jpeg';
import image3 from './assets/goodthoughts/3.jpeg';
import image4 from './assets/goodthoughts/4.jpeg';
import image5 from './assets/goodthoughts/5.jpeg';
import image6 from './assets/goodthoughts/6.jpeg';
import image7 from './assets/goodthoughts/7.jpeg';
import image8 from './assets/goodthoughts/8.jpeg';
import image9 from './assets/goodthoughts/9.jpeg';
import image10 from './assets/goodthoughts/10.jpeg';
import image11 from './assets/goodthoughts/11.jpeg';
import image12 from './assets/goodthoughts/12.jpeg';
import image13 from './assets/goodthoughts/13.jpeg';
import image14 from './assets/goodthoughts/14.jpeg';
import image15 from './assets/goodthoughts/15.jpeg';
import image16 from './assets/goodthoughts/16.jpeg';
import image17 from './assets/goodthoughts/17.jpeg';
import image18 from './assets/goodthoughts/18.jpeg';
import image19 from './assets/goodthoughts/19.jpeg';

import './App.css';

function App() {
    const goodThoughts = [
      { id: 1, url: image1 },
      { id: 2, url: image2 },
      { id: 3, url: image3 },
      { id: 4, url: image4 },
      { id: 5, url: image5 },
      { id: 6, url: image6 },
      { id: 7, url: image7 },
      { id: 8, url: image8 },
      { id: 9, url: image9 },
      { id: 10, url: image10 },
      { id: 11, url: image11 },
      { id: 12, url: image12 },
      { id: 13, url: image13 },
      { id: 14, url: image14 },
      { id: 15, url: image15 },
      { id: 16, url: image16 },
      { id: 17, url: image17 },
      { id: 18, url: image18 },
      { id: 19, url: image19 },
    ];
  
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-gray-100">
        {/* Header */}
        <header className="w-full fixed top-0 left-0 bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg p-4 z-10">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h3 className="font-bold text-lg tracking-wide">Good Thoughts</h3>
            <nav>
              <ul className="flex gap-6 font-mono text-sm">
                <li><a href="/" className="hover:text-indigo-200 transition duration-300">Home</a></li>
                <li><a href="#contact" className="hover:text-indigo-200 transition duration-300">Contact</a></li>
                <li><a href="#about" className="hover:text-indigo-200 transition duration-300">About</a></li>
              </ul>
            </nav>
          </div>
        </header>
  
        {/* Main Content */}
        <main className="flex-1 mt-20 p-6 max-w-6xl mx-auto">
          <h3 className="font-extrabold text-center text-2xl p-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-md">
            Good Thoughts Gallery
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {goodThoughts.map((item) => (
              <div
                key={item.id}
                className="group relative border rounded-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.url}
                    alt={`Good thought ${item.id}`}
                    className="w-full h-48 object-cover rounded-md group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-lg transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </main>
  
        {/* Footer */}
        <footer className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-6 mt-12">
          <div className="max-w-6xl mx-auto text-center">
            <p className="mb-4">&copy; 2024 Good Thoughts. All rights reserved.</p>
            <div className="flex justify-center gap-6">
              <a href="#facebook" className="hover:text-purple-300 transition duration-300">Facebook</a>
              <a href="#twitter" className="hover:text-purple-300 transition duration-300">Twitter</a>
              <a href="#instagram" className="hover:text-purple-300 transition duration-300">Instagram</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  
  export default App;
  