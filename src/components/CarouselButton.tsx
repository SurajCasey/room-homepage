import RightArrow from '../assets/images/icon-angle-right.svg'
import LeftArrow from '../assets/images/icon-angle-left.svg'

interface CarouselButtonProps{
    onPrevious: () => void;
    onNext: () => void;
    disablePrevious?: boolean;
    disableNext?: boolean;
}

const CarouselButton = ({onPrevious, onNext, disablePrevious=false, disableNext=false}: CarouselButtonProps) => {
  return (
    <div
        className='bg-black w-fit flex'
    >
      <button 
        onClick={onPrevious}
        disabled={disablePrevious}
        className='w-14 h-14 flex py-5 justify-center sm:w-20 sm:h-20 
            sm:py-7 hover:bg-grey800 cursor-pointer'
        >
        <img src={LeftArrow} alt="click for left image" className=''/>
      </button>
      <button 
        onClick={onNext}
        disabled={disableNext}
        className='w-14 h-14 flex py-5 justify-center sm:w-20 sm:h-20 
            sm:py-7 hover:bg-grey800 cursor-pointer'
        >
        <img src={RightArrow} alt="click for right image" className=''/>
      </button>
    </div>
  )
}

export default CarouselButton
