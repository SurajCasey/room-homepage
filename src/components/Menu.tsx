import Close from '../assets/images/icon-close.svg'

interface MenuProps {
    className ?: string;
    onClose: () => void;
}

const Menu = ({className= "", onClose}: MenuProps) => {
    const closeMenu = () =>{
        onClose();
    }

  return (    
    <div
        className={`flex justify-between py-12 px-6 sm:px-16 ${className}`}
    >
        <button
            onClick={closeMenu}
            className='cursor-pointer'
        >
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
