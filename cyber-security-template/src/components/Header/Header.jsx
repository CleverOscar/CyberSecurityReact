import facebook from '../../assets/001-facebook.png'
import twitter from '../../assets/002-twitter.png'
import instagram from '../../assets/003-instagram.png'

export default function Header(){

    let tabStyle = "transition ease-in-out duration-500 text-gray-800/50 hover:text-gray-800"

    return(
        <header className="flex flex-row justify-between w-auto items-center px-12 mt-10 items-center">
            <h1 className="blue-font text-3xl md:text-5xl font-black w-full" >SECUREM4</h1>

            <menu className="flex flex-row flex-nowrap w-full mx-auto justify-between font-extrabold text-xl ">
                
                    <li className={tabStyle}>
                        <a href="#">
                            Home
                        </a>
                    </li>
                    <li className={tabStyle}>
                        <a href='#'>About</a>
                    </li>
                    <li className={tabStyle}>
                        <a href='#'>Features</a>
                    </li>
                    <li className={tabStyle}>
                        +1 (234) - 567 - 8901
                    </li>
            
            </menu>

            {/* <menu className="flex flex-row flex-nowrap w-auto space-x-2">
                
                    <li className='rounded-full border-solid border-2 border-black p-4 w-3/12'>
                        <img src={facebook} alt="Facebook page" />
                    </li>
                    <li className='rounded-full border-solid border-2 border-black p-4 w-3/12'>
                        <img src={twitter} alt="Twitter page" />
                    </li >
                    <li className='rounded-full border-solid border-2 border-black p-4 w-3/12'>
                        <img src={instagram} alt="Instagram page" />
                    </li>

            
            </menu> */}
      </header>
    )
}