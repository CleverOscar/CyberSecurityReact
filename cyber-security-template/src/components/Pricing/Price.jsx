import { PRICE } from "./data"

export default function Price(){

    return(
        <div className="py-20">
            <h3 className="purple-text text-5xl font-bold text-center pb-20">
                Our Pricing
            </h3>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
                <Bundles/>
            </div>
        </div>
    )
}


function Bundles(){

    let container = "silver-bg font-bold shadow-2xl rounded-[50px]  py-10 w-full  w-auto flex flex-col text-center text-[#6d768f] "

    let durationText = 'text-xl'

    let priceText = 'purple-text text-5xl font-bold pt-6 pb-2'

    let featuresWrapper = 'leading-loose flex flex-col items-center text-xl my-10'
    
    let listDescription = "border-[#e6e7ea] border-solid border-b-[1px] w-fit px-8 py-2"

    let buttonStlye = " mx-auto bg-[#36b8fc]/70 px-10 py-5  rounded-full text-white font-extrabold transition-all ease-in-out hover:bg-[#36b8fc] duration-300"

    return(
        <>
            {PRICE.map( plan => 
                <div className={container}>

                    <p className={durationText}>{plan.period}</p>
                    <p className={priceText}>{plan.amount}</p>
                    <p className={durationText}>{plan.recurring}</p>

                    <ul className={featuresWrapper}>
                        {plan.features.map(feature => 
                            
                            <li className={listDescription}>
                                {feature}
                            </li>
                        )}

                    </ul>

                    <button className={buttonStlye}>
                            Buy Now
                    </button>
                </div>

            )}
        </>

    )
}