import container from '../../assets/Container.png'
import arrowsUp from '../../assets/Abstract Design (1).svg'
function Graph() {
  return (
    <div className='lg:pr-[110px] w-fit relative md:max-w-[45%] mt-10 sm:mt-0'>
        
        <img src={container} alt="" className='max-w-[100%] z-10  relative '/>
        <img src={arrowsUp} alt="" className=' z-0 absolute top-0 lg:top-6 right-0 sm:top-0 sm:right-0   lg:right-5 w-[220px] h-[201px] lg:w-[300px] lg:h-[275px]'/>
    </div>
  )
}

export default Graph