import { shoppingItems } from '../../data'

import { Card } from 'primereact/card'
import { Button } from 'primereact/button'

import './directory.styles.scss'

const Directory = () => (
  <div className='directory'>
    {shoppingItems.map((item) => (
      <Card
        title={item.title}
        subTitle={`R$ ${item.price}`}
        header={
          <img
            src={item.imgUrl}
            alt={item.title}
            className='directory__item--img'
          />
        }
      >
        <Button label='Comprar' />
      </Card>
    ))}
  </div>
)

export default Directory
