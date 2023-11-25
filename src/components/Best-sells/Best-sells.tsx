import classical from '../../assets/classical-chicken.png'
import avocado from '../../assets/chicken-avocado.png'
import secret from '../../assets/secret-burger.png'
import './Best-sells.css'
import frita from '../../assets/frita.svg'


const BestSells = () => {
  
  return (
    <div className="cont flex flex-col gap-8">
        <div className="text-black text-3xl sm:text-5xl title font-semibold text-center">
          <h1>Our Best Sells Of All Time !</h1>
        </div>
        <div className='flex flex-col justify-center items-center gap-5 relative'>
          <img className='absolute max-md:w-20 max-sm:right-0 -top-12 -right-12 w-28 animate-bounceRightFrita ' src={frita} alt="" />
          <img className='absolute max-md:w-20  -bottom-12 max-sm:left-0 -left-12 w-28 animate-bounceLeftFrita ' src={frita} alt="" />

            <div className='grid md:grid-cols-3 gap-5'>
              <div className='flex flex-col items-center justify-center overflow-hidden'>
                
                  <div className='bg-[#FA8072] rounded-3xl h-full w-full flex justify-center items-end'>
                    <img className='bottom-0' src={classical} alt="" />
                </div>
                <div className='text-xl font-semibold p-3'>
                    <h4> Classical Chicken </h4>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center overflow-hidden '>
                  <div className='bg-[#87CEFA] rounded-3xl flex justify-center items-end h-full w-full'>
                    <img className='bg-cover bottom-0 ' src={avocado} alt="" />
                  </div>
                <div className='text-xl font-semibold p-3'>
                    <h4> Chicken Avocado </h4>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center overflow-hidden'>
                  <div className='bg-[#faa4a4] rounded-3xl flex justify-center items-end h-full'>
                    <img className='bg-cover bottom-0' src={secret} alt="" />
                  </div>
                <div className='text-xl font-semibold p-3'>
                    <h4> Secret Burger </h4>
                </div>
              </div>
            </div>
          </div>
          
        <div className=' text-[#3E84D8] text-xl font-medium'>
          <p className='desc text-center'>Stop looking at it and come by and grab one!</p>
        </div>
      </div>
  )
}

export default BestSells