import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className= 'text-4xl font-bold px-10 py-2  mt-[40px]  w-11/12 text-center  bg-white rounded-lg  mx-auto'>RANDOM GIFs</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px] gap-x-10 flex-wrap justify-center'>
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
