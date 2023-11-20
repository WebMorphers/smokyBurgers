import moreburger from '../../assets/more-burger.png'
import './More-than-burger.css'
const Moreburger = () => {
  return (
    <div className=" flex items-center justify-center">
        <div className=" grid md:grid-cols-3 ">
            <div className='bg-[#FB8A8A] rounded-[40px] md:m-28'>
              <img className='pt-24' src={moreburger} />
            </div>
            <div className='col-span-2'>
              <div className='text-3xl text-[#FB8A8A] font-semibold'>
                <h1 className='title'>More than just a burger</h1>
              </div>
              <div>
                Giving the customer a burger that ticks all the boxes from taste to price to quality. 
              </div>
            </div>
      </div>
    </div>
  )
}

export default Moreburger