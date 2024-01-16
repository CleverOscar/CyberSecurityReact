import facebook from '../../assets/001-facebook.png'
import twitter from '../../assets/002-twitter.png'
import instagram from '../../assets/003-instagram.png'

export default function Header(){

    let tabStyle = "transition ease-in-out duration-500 text-gray-800/50 hover:text-gray-800"

    let border  = "border-2 border-black border-solid";

    return(
        <header className=" container flex flex-row mx-auto justify-between items-center px-6 py-8 items-center">
            <h1 className="blue-font text-3xl md:text-5xl font-black w-1/4 " >SECUREM4</h1>

            <div className='flex flex-row items-center'>
                <menu className="flex flex-row flex-nowrap ml-auto w-1/2 justify-between font-extrabold text-lg ">
                    
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

                <menu className="flex flex-row flex-nowrap w-1/4 space-x-2 justify-center">
                    
                        <li className=' drop-shadow-xl silver-bg rounded-full  w-3/12 p-5 self-center '>
                            <img  className="" src={facebook} alt="Facebook page" />
                        </li>
                        <li className=' drop-shadow-xl silver-bg rounded-full  w-3/12 self-center p-5'>
                            <img className='image-2' src={twitter} alt="Twitter page" />
                        </li >
                        <li  className=' drop-shadow-xl silver-bg rounded-full  w-3/12 self-center p-5'>
                            <img  src={instagram} alt="Instagram page" />
                        </li>

                
                </menu>
            </div>
      </header>
    )
}