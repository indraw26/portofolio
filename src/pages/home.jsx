import background1 from '@assets/background.jpeg'

const Home = () => {
  return (
    <>
      <div className='min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${background1})` }}>
        <header className="flex px-50 justify-between items-center w-full bg-slate-950 text-white">
          <div className="flex">
            <img src="/images/logo.png" alt="" className="w-30" />
            <span className='py-12 mx-7 '>Indra Wijaya</span>
          </div>
          <div className="p-8 flex gap-10">
            <a className='hover:text-blue-500' href="/">Home</a>
            <a className='hover:text-blue-500' href="/about">About</a>
            <a className='hover:text-blue-500' href="/project">Project</a>
          </div>
        </header>
      </div>
    </>
  );
};

export default Home;
