import classical from '../../assets/classical-chicken.png'
import avocado from '../../assets/chicken-avocado.png'
import secret from '../../assets/secret-burger.png'
import './Best-sells.css'


const BestSells = () => {
  
  return (
    <div className="cont flex flex-col gap-8">
        <div className="text-black text-3xl sm:text-5xl title font-semibold ">
          <h1>Our Best Sells Of All Time !</h1>
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
          <div>
            <div className='grid md:grid-cols-3 gap-5'>
              <div className='flex flex-col items-center justify-center overflow-hidden'>
                <div className=''>
                  <div className='bg-[#FA8072] rounded-3xl h-full flex justify-end items-end'>
                    <img className='bottom-0' src={classical} alt="" />
                  </div>
                </div>
                <div className='text-xl font-semibold p-3'>
                    <h4> Classical Chicken </h4>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center overflow-hidden '>
                  <div className='bg-[#87CEFA] rounded-3xl flex justify-end items-end h-full'>
                    <img className='bg-cover bottom-0 ' src={avocado} alt="" />
                  </div>
                <div className='text-xl font-semibold p-3'>
                    <h4> Chicken Avocado </h4>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center overflow-hidden'>
                  <div className='bg-[#faa4a4] rounded-3xl flex justify-end items-end h-full'>
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
    </div>
  )
}

export default BestSells