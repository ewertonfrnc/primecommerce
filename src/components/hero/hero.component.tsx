import React from 'react'

import { Button } from 'primereact/button'

import './hero.styles.scss'

const Hero = () => {
  return (
    <div className='hero'>
      <h2 className='hero__title'>Nova coleção</h2>
      <p className='hero__subtitle'>Coleção 2022</p>

      <Button label='Comprar agora' />
    </div>
  )
}

export default Hero
