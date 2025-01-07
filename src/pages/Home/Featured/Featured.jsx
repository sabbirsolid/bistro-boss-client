import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-bg bg-fixed text-white py-10 px-5 md:px-20">
            {/* Section Title */}
            <SectionTitle subHeading={'Check it out'} heading={'from our menu'}></SectionTitle>

            {/* Content Container */}
            <div className="md:flex items-center justify-center py-16 md:gap-12">
                {/* Image Section */}
                <div className="flex-shrink-0 w-full md:w-1/2">
                    <img className="rounded-lg shadow-lg" src={featured} alt="Featured Dish" />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left space-y-5">
                    <p className="text-gray-300 italic">March 20, 2025</p>
                    <h3 className="text-2xl font-semibold">Where can I get some?</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cum possimus autem ea reprehenderit quae ex,
                        voluptates sit sequi sapiente modi temporibus voluptas quisquam accusamus aliquid harum laudantium eaque aspernatur!
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 border-white text-white hover:bg-white hover:text-black transition duration-300">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;