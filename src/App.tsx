import './App.css'
import appleId from "./assets/apple-id.png";
import appleBg from "./assets/banner-apple.png";
import appleLogo from "./assets/logo-apple.png";
import { MdLogin } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';


const App = () => {

  return (
    <div className='w-screen h-screen bg-bottom bg-cover flex justify-center items-center' style={{ backgroundImage: `url(${appleBg})` }}>
      <form className='bg-black opacity-90 w-96 h-4/6 rounded-lg flex flex-col justify-start items-center border boder-white space-y-7 py-2 mb-6'>
          <img className='w-40' src={appleId} alt="Logo Apple" />
        <div className='flex justify-center items-center gap-3'>
          <MdLogin className='w-5 h-5 text-white' />
          <input className='w-60 bg-transparent border-b-2 text-center outline-none text-white placeholder:text-sm' type="text" id="login" placeholder='Login' autoComplete='off' />
        </div>
        <div className='flex justify-center items-center gap-3'>
          <RiLockPasswordLine className='w-5 h-5 text-white' />
          <input className='w-60 bg-transparent border-b-2 text-center outline-none text-white placeholder:text-sm' type="password" id="login" placeholder='Password' autoComplete='off' />
        </div>
        <div className='text-white text-sm space-x-12'>
          <input type="checkbox" id="remember" /> Remember me
          <a className='underline' href="#">Forgot Password?</a>
        </div>
        <button className='text-white border rounded md py-2 px-8 w-60 text-lg mb-4 ease-in duration-300 hover:bg-gray-300 hover:text-black hover:font-bold' type="submit">Enter</button>
      </form>
    </div>
  )
}

export default App;
