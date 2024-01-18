import computer from '../../assets/features3.jpeg'

export default function About(){
    return(
        <div className="py-20 container mx-auto grid grid-cols-1 md:grid-cols-2 px-6 md:px-0">
            <div className='py-10 space-y-10'>
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

            <div>
                <img className='rounded-[50px]' src={computer} alt="computer" />
            </div>
        </div>
    )
}