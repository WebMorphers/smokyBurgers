import moreburger from '../../assets/more-burger.png'
import './More-than-burger.css'
import burger from "../../assets/burger.svg"
const Moreburger = () => {
  return (
    <div className="cont">
        <div className=" flex max-sm:flex-col items-center justify-between gap-12 relative">
            <div className='bg-[#FB8A8A] rounded-[40px] flex justify-center'>
              <img className='pt-24 ' src={moreburger}  />
            </div>
            <div className='col-span-2 flex items-center flex-col justify-center gap-12 relative '>
              <div className='text-3xl sm:text-5xl text-[#FB8A8A] font-semibold'>
                <h1 id='light' className='title text-[#FB8A8A]'>More than just a burger</h1>
              </div>
              <div className='description text-xl text-gray-700'>
                Giving the customer a burger that ticks all the boxes from taste to price to quality. 
              </div>
              
              <img src={burger} className=' max-md:w-16 absolute bottom-0 top-0 my-auto right-0 xl:top-40   animate-bounceRight' alt="" />

            </div>

            <img src={burger} className=' max-md:w-16 absolute top-0 -left-10 max-sm:left-0 animate-bounceLeft' alt="" />

      </div>
    </div>
  )
}

export default Moreburger