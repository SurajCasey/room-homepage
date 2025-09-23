import Close from '../assets/images/icon-close.svg'

const Menu = () => {
  return (
    <div
        className='flex justify-between my-12 mx-6 sm:mx-16'
    >
        <button>
            <img src={Close} alt="close button" />
        </button>
        <menu 
            className='flex gap-8 font-semibold leading-[100%] 
        tracking-[-0.7px]'
        >
            <a href="#">home</a>
            <a href="#">shop</a>
            <a href="#">about</a>
            <a href="#">contact</a>
        </menu>
    </div>
  )
}

export default Menu
