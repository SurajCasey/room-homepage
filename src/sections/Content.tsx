import DarkImage from '../assets/images/image-about-dark.jpg'
import LightImage from '../assets/images/image-about-light.jpg'

const Content = () => {
  return (
    <section className='flex flex-col gap-12 md:gap-16 lg:gap-0 lg:flex-row mt-16 lg:mt-0 lg:h-[33vh]'>
      <img 
        className='w-full sm:h-[300px] object-cover md:h-full lg:w-[420px] lg:h-full'
        src={DarkImage} 
        alt="Image of table and sofa" 
      />
      <div className='flex flex-col justify-center mx-8 sm:mx-16 gap-4 lg:mx-12 lg:flex-1 lg:px-12 lg:py-8 lg:overflow-hidden lg:h-full'>
        <h2 className='font-bold text-sm leading-[22px] tracking-[5.83px] lg:flex-shrink-0'>
          ABOUT OUR FURNITURE
        </h2>
        <div className='lg:overflow-y-auto lg:flex-1 lg:pr-2'>
          <p className='font-medium text-sm leading-[20px] tracking-[-0.33px] text-grey500'>
            Our multifunctional collection blends design and 
            function to suit your individual taste. Make each room unique, 
            or pick a cohesive theme that best express your interests and 
            what inspires you. Find the furniture pieces you need, from 
            traditional to contemporary styles or anything in between. Product 
            specialists are available to help you create your dream space. 
          </p>
        </div>
      </div>
      <img 
        className='w-full sm:h-[300px] object-cover md:h-full lg:w-[420px] lg:h-full'
        src={LightImage} 
        alt="image of chair" 
      />
    </section>
  )
}

export default Content
