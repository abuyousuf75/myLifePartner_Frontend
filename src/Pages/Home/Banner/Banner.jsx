import banner01 from '../../../Assest/Banner01.jpeg';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${banner01})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Find Your Perfect Match</h1>
                        <p className="mb-5">
                            Discover meaningful connections and start your journey to lifelong happiness with our trusted matrimonial service.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
