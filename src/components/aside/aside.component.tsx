import React from 'react'
import { PanelMenu } from 'primereact/panelmenu'

import './aside.styles.scss'

const items = [
  {
    label: 'Camisas',
  },
  {
    label: 'Vestidos',
  },
  {
    label: 'Jeans',
    items: [
      {
        label: 'Skinny',
      },
      {
        label: 'Slim',
      },
      {
        label: 'Reta',
      },
    ],
  },
  {
    label: 'Jaquetas',
  },
  {
    label: 'Esportes',
  },
  {
    label: 'Social',
  },
  {
    label: 'Sapatos',
  },
]

const Aside = () => {
  return (
    <nav className='nav'>
      <header>LOGO</header>

      <PanelMenu model={items} />
    </nav>
  )
}

export default Aside
