import React from 'react'
import image from '../../image/Jollof by Jara 1.png'
import Footer from '../../image/footer.png'
import Layer from '../../image/layer.png'
import './style.css'
const Card = () => {
  return (

    <div className='main-card'>
      <div className='cardcontainer'>
        <div className='firstcardcontainer'>
          <img src={Footer} alt="" />
        </div>

        <div className="mainsecondcard">
          <div className='secondcardcontainer'>
            <img src={image} alt="" />
            <p className="heading">PUTTING THE jara IN THE JOLLOF</p>
            <p className="little">Little Company Nigeria Limited is committed to providing great-value, memorable experiences. For those of you familiar with our brands, you’ll know we do things a little differently. Jollof is no exception.</p>
            <p className="large">Jollof by Jara customers are welcome to FREE Wi-Fi (access token available at the Bar), FREE drinking water! It’s table water, the kind from a dispenser - clean and safe (alternatively branded bottled water is available to purchase through SABIS) and we even offer an experienced member of staff to entertain your little ones in the playground while you relax at NO EXTRA COST!</p>
            <img src={Layer} alt="" className='layer' />
          </div>
        </div>

      </div>

    </div>


  )
}

export default Card