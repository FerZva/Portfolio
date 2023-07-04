import Header from './Components/Header'
import Introduction from './Components/Introduction'
import Navigation from './Components/Navigation'
import About from './Components/About'
import Skills from './Components/Skills'
import Works from './Components/Works'
import Contact from './Components/Contact'
import  './sass/style.scss'


function App() {

  return (
    <body>
      <div className='Container'>
        <Header />
        <Introduction />
        <About />
        <Skills />
        <Works />
        <Contact />
        <Navigation />
      </div>
    </body>
  )
}

export default App
