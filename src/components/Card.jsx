import React from 'react'
import ProductCard from './ProductCard'
import img1 from '../images/photo_01.jpg'
import img2 from '../images/photo_02.jpg'
import img3 from '../images/photo_03.jpg'
import img4 from '../images/photo_04.jpg'
import img5 from '../images/photo_05.jpg'
import img6 from '../images/photo_06.jpg'
import img7 from '../images/photo_07.jpg'
import img8 from '../images/photo_08.jpg'
import img9 from '../images/photo_09.jpg'
import img10 from '../images/photo_10.jpg'
import img11 from '../images/photo_11.jpg'
import img12 from '../images/photo_12.jpg'
import img13 from '../images/photo_13.jpg'
import img14 from '../images/photo_14.jpg'
import img15 from '../images/photo_15.jpg'
import img16 from '../images/photo_16.jpg'
import img17 from '../images/photo_17.jpg'
import img18 from '../images/photo_18.jpg'
import img19 from '../images/photo_19.jpg'
import img20 from '../images/photo_20.jpg'
function Card() {
  return (
    <>
    <div className='h-screen'>

          <div className='flex flex-wrap justify-around'>
            <ProductCard className="bisis-[24%]"
              image={img1}
              title="Phone Charm"
              price="5 $"
            />
            <ProductCard className="bisis-[24%]"
              image={img2}
              title="Phone Charm"
              price="5 $"
            />
            <ProductCard className="bisis-[24%]"
              image={img3}
              title="Phone Charm"
              price="5 $"
            />
            <ProductCard className="bisis-[24%]"
              image={img4}
              title="Phone Charm"
              price="5 $"
            />
          </div>
          <div className='flex flex-wrap justify-around'>
            <ProductCard className="bisis-[24%]"
              image={img5}
              title="Phone Charm"
              price="5 $"
            />
            <ProductCard className="bisis-[24%]"
              image={img6}
              title="Phone Case"
              price="5 $"
            />
            <ProductCard className="bisis-[24%]"
              image={img7}
              title="Camera Lans Protector"
              price="5 $"
            />
            <ProductCard className="bisis-[24%]"
              image={img8}
              title="Phone Charm"
              price="5 $"
            />
          </div>
          <div className='flex flex-wrap justify-around'>
            <ProductCard className="bisis-[24%]"
              image={img9}
              title="Phone Strap"
              price="5 $"
            />
            <ProductCard className="bisis-[24%]"
              image={img10}
              title="Phone Case"
              price="5 $"
            />
            <ProductCard className="bisis-[24%]"
              image={img11}
              title="Phone Strap"
              price="5 $"
            />
            <ProductCard className="bisis-[24%]"
              image={img12}
              title="EarPods USB-C"
              price="5 $"
            />
          </div>
          <div className='flex flex-wrap justify-around'>
            <ProductCard className="bisis-[24%]"
              image={img13}
              title="AirPods Case"
              price="5 $"
            />
            <ProductCard className="bisis-[24%]"
              image={img14}
              title="Headphone Strap"
              price="5 $"
            />
            <ProductCard className="bisis-[24%]"
              image={img15}
              title="Phone Strap"
              price="5 $"
            />
            <ProductCard className="bisis-[24%]"
              image={img16}
              title="Phone Strap"
              price="5 $"
            />
          </div>
          <div className='flex flex-wrap justify-around'>
            <ProductCard className="bisis-[24%]"
              image={img17}
              title="AirPods Case"
              price="5 $"
            />
            <ProductCard className="bisis-[24%]"
              image={img18}
              title="Headphone Strap"
              price="5 $"
            />
            <ProductCard className="bisis-[24%]"
              image={img19}
              title="Phone Case"
              price="5 $"
            />
            <ProductCard className="bisis-[24%]"
              image={img20}
              title="Phone Case"
              price="5 $"
            />
          </div>
        </div>
    </>
  )
}

export default Card