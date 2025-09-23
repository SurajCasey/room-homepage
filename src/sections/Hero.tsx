import { useState } from 'react'
import Hamburger from '../assets/images/icon-hamburger.svg'
import Logo from '../assets/images/logo.svg'

// images for hero mobile
import MobileImage1 from '../assets/images/mobile-image-hero-1.jpg'
import MobileImage2 from '../assets/images/mobile-image-hero-2.jpg'
import MobileImage3 from '../assets/images/mobile-image-hero-3.jpg'

// images for hero desktop 
import DesktopImage1 from '../assets/images/desktop-image-hero-1.jpg'
import DesktopImage2 from '../assets/images/desktop-image-hero-2.jpg'
import DesktopImage3 from '../assets/images/desktop-image-hero-3.jpg'
import CarouselButton from '../components/CarouselButton'
import ShopNow from '../components/ShopNow'

const Hero = () => {
    const images = [
        {
            mobile: MobileImage1,
            desktop: DesktopImage1,
            alt: "Hero Image 1",
            heading: "Discover innovative ways to decorate",
            content: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        },
        {
            mobile: MobileImage2,
            desktop: DesktopImage2,
            alt: "Hero Image 2",
            heading: "We are available all across the globe",
            content: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        },
        {
            mobile: MobileImage3,
            desktop: DesktopImage3,
            alt: "Hero Image 3",
            heading: "Manufactured with the best materials",
            content: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        }
    ]
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handlePrevious = () => {
        setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
    }
    const handleNext = () => {
        setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
    }

    return (
        <section className='lg:flex lg:h-[67vh] lg:w-screen'>
            <div className='relative lg:w-[58%]'>
                <nav className='absolute w-full flex items-center mt-12 z-10'>
                    <button
                        className='absolute left-6'
                        // onClick={showMenu}
                    >
                        <img src={Hamburger} alt='click for menu' />
                    </button>
                    <div className='mx-auto'>
                        <img src={Logo} alt="Room homepage logo" />
                    </div>
                </nav>
                {/* Mobile */}
                <div className='sm:hidden'>
                    <img 
                        src={images[currentIndex].mobile} 
                        alt={images[currentIndex].alt}  
                        className='w-full max-h-[360px] object-cover'
                    />
                </div>
                {/* Tablet and Desktop */}
                <div className='hidden sm:block h-full'>
                    <img 
                        src={images[currentIndex].desktop} 
                        alt={images[currentIndex].alt}  
                        className='w-full h-full object-cover'
                    />
                </div>
                {/* Carousel button */}
                <div className='absolute right-0 bottom-0 lg:-right-[160px]'>
                    <CarouselButton
                        onPrevious={handlePrevious}
                        onNext={handleNext}
                        disablePrevious={false}
                        disableNext={false}
                    />
                </div>
            </div>
            <div className='mt-16 px-[32.5px] sm:p-16 lg:w-[42%] lg:mt-0 lg:py-[139px] lg:px-[100px] lg:flex lg:flex-col lg:justify-center lg:items-center lg:h-full'>
                <h1 className='font-semibold text-[40px] sm:text-5xl mb-4 leading-[100%] sm:leading-[90%] tracking-[-2px]'>
                    {images[currentIndex].heading}
                </h1>
                <p className='mb-8 font-medium leading-[22px] tracking-[-0.33px] text-grey500'>
                    {images[currentIndex].content}
                </p>
                <ShopNow/>
            </div>
        </section>
    )
}

export default Hero