import computer from '../../assets/features3.jpeg'
import click from '../../assets/click.png'
import shield from '../../assets/verified.png'

export default function About(){

    let wrapper = 'w-full h-64 p-10  silver-bg rounded-[50px] shadow-2xl '
    let wrapperTittle = 'text-4xl purple-text font-bold py-4'

    return(
       <div className='container px-6 mx-auto py-20'>
            

            {/* About Cyber Security */}
            <div className="py-20  mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className='py-10 space-y-10'>

                    <div className='block md:hidden self-center '>
                        <img className=' rounded-[50px] shadow-2xl' src={computer} alt="computer" />
                    </div>

                    <p className="text-6xl purple-text font-bold w-3/4">
                        About Cyber Security 
                    </p>

                    <p className="silver-text text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum fringilla lacus eget mattis. Integer blandit rutrum ultricies. In nec turpis finibus, sodales enim id, malesuada dui. Fusce tempor ex non molestie placerat. Nulla pellentesque varius dui, a posuere elit. Donec et tellus magna. Donec ut luctus augue. Pellentesque tortor lectus, ultricies eu ipsum vel, sodales euismod enim.
                    </p>

                    <button className="bg-[#36b8fc] px-10 py-4 rounded-full text-white font-bold">
                        Read More
                    </button>
                </div>

                <div className='hidden md:block self-center'>
                    <img className='shadow-2xl rounded-[50px]' src={computer} alt="computer" />
                </div>
            </div>
            {/* Level Of Security */}
            <div className='py-10 '>

                <p className="text-5xl text-center purple-text font-extrabold w-full pb-10">
                    The highest level of security!
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-20 w-fit mx-auto py-10'>
                    
                    <div className={wrapper}>
                        <img className='w-2/12' style={{'color': "#36b8fc"}} src={click} alt="click image" />
                        <h3 className={wrapperTittle}>4 230 000</h3>
                        <h4 className='text-lg purple-text font-bold '>known viruses</h4>
                    </div>


                    <div className={wrapper}>
                        <img className='w-2/12' src={shield}  alt="shield image"/>
                        <h3 className={wrapperTittle}>99.8%</h3>
                        <h4 className='text-lg purple-text font-bold'>viruses blokced</h4>
                    </div>
                </div>

            </div>

            {/* Secure Features */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-20 py-20 items-center'>

                <img className=' max-h-96  w-full rounded-[50px]' src={computer} />
                <div className='py-10 '>
                    <h3 className='text-5xl font-bold purple-text'>Secure Features</h3 >
                    <p className='text-xl py-10 font-bold silver-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elitdo eiusmod temporeum dicant partem scripserit.</p>

                    <ul className='space-y-8 '>
                        <li className='text-xl font-bold silver-text'>
                            <div className='flex flex-row justify-between'>
                                <p>
                                    Smart Home Security
                                </p>
                                <p className='silver-text'>
                                    92%
                                </p>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-[#36197d] h-2.5 rounded-full" style={{width: "92%"}}></div>
                            </div>
                        </li>

                        <li className='text-xl font-bold silver-text'>
                            <div className='flex flex-row justify-between'>
                                <p>
                                    Cyber Security
                                </p>
                                <p className='silver-text'>
                                    71%
                                </p>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-[#36197d] h-2.5 rounded-full" style={{width: "71%"}}></div>
                            </div>
                        </li>
                        <li className='text-xl font-bold silver-text'>
                             <div className='flex flex-row justify-between'>
                                <p>
                                    CCTV Cameras
                                </p>
                                <p className='silver-text'>
                                    53%
                                </p>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div class="bg-[#36197d] h-2.5 rounded-full" style={{width: "53%"}}></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
       </div>
    )
}