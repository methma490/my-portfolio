import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Scrolltop from './Components/Scrolltop/Scrolltop'
import Particles from './Components/Particles/Particles'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-100">
      <Particles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <MyWork />
        <Contact />
      </main>
      <Footer />
      <Scrolltop />
    </div>
  )
}

export default App
