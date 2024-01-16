import {FEATURES} from './data';


export default function Card(){

    return(
         <div className='grid grid-cols-1 justify-items-center '>
                {FEATURES.map(feature => 
                    <div className='border-2 border-black border-solid w-2/4 rounded-3xl p-4 silver-bg my-10'>
                        
                         <img src={feature.image} alt="feature1"  className=' rounded-3xl' style={{ width: '200px', height: '150px' }}/>

                         <h3 className='py-4 text-3xl purple-text font-bold'> {feature.title}</h3>

                         <p>{feature.description}</p>

                    </div>
                )}
        </div>
    )
}