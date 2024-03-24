import Hero from "../Hero/Hero";
import Wave from '/images/Wave.svg'
// animated svg download korar somoy jodi tk chai taila jaita download korta chai oita ra inspect koira code tuk copy koira akta file banai aa raikha dimu

const Home = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-116px)]">
            <Hero />
            <img className='absolute bottom-0 w-full' src={Wave} alt="" />
        </div>
    );
};

export default Home;