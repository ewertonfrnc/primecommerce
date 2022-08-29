import 'primereact/resources/themes/lara-light-purple/theme.css' //theme
import 'primereact/resources/primereact.min.css' //core css
import 'primeicons/primeicons.css' //icons

import Aside from './components/aside/aside.component'
import Hero from './components/hero/hero.component'
import Directory from './components/directory/directory.component'

import './app.scss'

function App() {
  return (
    <div className='container'>
      <Aside />

      <main className='main'>
        <header className='main__header'>
          <h1 className='main__title'>Jeans</h1>

          <div className='main__actions'>
            <i className='pi pi-shopping-cart'></i>
            <i className='pi pi-search'></i>
          </div>
        </header>

        <Hero />
        <Directory />
      </main>
    </div>
  )
}

export default App
