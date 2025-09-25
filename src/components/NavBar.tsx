import Logo from "../assets/images/logo.svg"

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className = ""}: NavBarProps) => {
    
  return (
    <header
      className={`hidden lg:flex gap-14 justify-center items-center 
         ${className}`}
    >
      <img src={Logo} alt="Logo" className="cursor-pointer"/>
      <nav className="text-white flex gap-8 font-semibold leading-[100%] 
        tracking-[-0.7px]">
        <a href="#" 
          className="effecthover"
        >
          home
        </a>
        <a href="#"
          className="effecthover"
        >
          shop

        </a>
        <a href="#"
          className="effecthover"
        >
          about

        </a>
        <a href="#"
          className="effecthover"
        >
          contact
        </a>
      </nav>
    </header>
  )
}

export default NavBar
