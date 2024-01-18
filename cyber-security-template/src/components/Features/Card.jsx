import {FEATURES} from './data';


export default function Card(){

    return(
         <div className='grid grid-cols-1 sm:gird-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center px-20 md:px-0 md:gap-10 lg:gap-20'>
                {FEATURES.map(feature => 
                    <div className=' w-full rounded-[40px] px-4 py-6 bg-gray-[#f2f3f7] my-10 shadow-2xl'>
                        

                        <div class="relative max-w-auto px-2 overflow-hidden bg-cover bg-no-repeat rounded-3xl mx-auto">
                            <img src={feature.image} alt="feature1"  className='transition duration-300 ease-in-out hover:scale-110 rounded-3xl  w-full h-64 object-cover' />
                        </div>

                        <div className='p-4 space-y-6'>
                            <h3 className='py-4 text-3xl purple-text font-bold'> {feature.title}</h3>

                            <p className='silver-text font-semibold text-xl'>{feature.description}</p>

                            <p className='font-bold blue-font text-xl'>Read More</p>
                        </div>

                    </div>
                )}
        </div>
    )
}