import appleId from "../assets/apple-id.png";
import { MdLogin } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    login: string,
    password: string
}

const Form = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='bg-black bg-opacity-80 w-96 h-3/4 rounded-lg flex flex-col justify-start items-center border boder-white py-2 mb-6'>
            <img className='w-40 pt-2 mb-6' src={appleId} alt="Logo Apple" />
            <div className="h-12 text-center">
                <div className='h-6 flex justify-center items-center gap-3'>
                    <MdLogin className='w-5 h-5 text-white' />
                    <input className='w-60 bg-transparent border-b-2 text-center outline-none text-white placeholder:text-sm mb-1'
                    type="text"
                    id="login"
                    placeholder='Login'
                    autoComplete='off'
                    {...register("login", {required: true, minLength: 3})}
                    />
                </div>
                {errors?.login?.type === 'required' && <span className="h-8 text-red-500 text-sm">Digite seu login.</span>}
                {errors?.login?.type === 'minLength' && <span className="h-8 text-red-500 text-sm">Seu login precisa ter mais de 3 caracteres.</span>}
            </div>
            <div className="h-12 text-center">
                <div className='h-6 flex justify-center items-center gap-3 mt-4'>
                    <RiLockPasswordLine className='w-5 h-5 text-white' />
                    <input className='w-60 bg-transparent border-b-2 text-center outline-none text-white placeholder:text-sm mb-1'
                    type="password"
                    id="password"
                    placeholder='Password'
                    autoComplete='off'
                    {...register("password", {required: true, minLength: 6})}
                    />
                </div>
                {errors.password?.type === 'required' && <span className="h-8 text-red-500 text-sm">Digite sua senha.</span>}
                {errors.password?.type === 'minLength' && <span className="h-8 text-red-500 text-sm">Sua senha precisa ter mais de 6 caracteres.</span>}
            </div>
            <div className='text-white text-sm space-x-12 mb-8 mt-8'>
                <input type="checkbox" id="remember" /> Remember me
                <a className='underline' href="#">Forgot Password?</a>
            </div>
            <button className='text-white border rounded md py-2 px-8 w-60 text-lg font-bold ease-in duration-300 hover:bg-gray-300 hover:text-black' type="submit">Enter</button>
        </form>
    )
}

export default Form;