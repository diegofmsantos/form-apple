import appleId from "../assets/apple-id.png";
import { MdLogin } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    login: yup.string().required("Digite seu login.").min(3, "Você precisa inserir pelo menos 3 caracteres."),
    password: yup.string().required("Digite sua senha.").min(6, "Sua senha precisa ter pelo menos 6 dígitos.")
}).required()
type FormData = yup.InferType<typeof schema>;

const Form = () => {

    const { 
        register, 
        handleSubmit: onSubmit, 
        watch, 
        formState: { errors } } = useForm<FormData>({resolver: yupResolver(schema)});

    const handleSubmit = (data: any) => {
        console.log(data)
    }
    
    return (
        <form onSubmit={onSubmit(handleSubmit)} className='bg-black opacity-90 w-96 h-3/4 rounded-lg flex flex-col justify-start items-center border boder-white py-2 mb-6'>
            <img className='w-40 pt-2 mb-6' src={appleId} alt="Logo Apple" />
            <div className='h-6 flex justify-center items-center gap-3'>
                <MdLogin className='w-5 h-5 text-white' />
                <input className='w-60 bg-transparent border-b-2 text-center outline-none text-white placeholder:text-sm mb-1' 
                type="text" 
                id="login" 
                placeholder='Login' 
                autoComplete='off' 
                {...register("login")}
                />
            </div>
            <span className="h-8 text-red-500 text-sm">{errors?.login?.message}</span>
            <div className='h-6 flex justify-center items-center gap-3 mt-4'>
                <RiLockPasswordLine className='w-5 h-5 text-white' />
                <input className='w-60 bg-transparent border-b-2 text-center outline-none text-white placeholder:text-sm mb-1' 
                type="password" 
                id="password" 
                placeholder='Password' 
                autoComplete='off' 
                {...register("password")}
                />
            </div>
            <span className="h-8 text-red-500 text-sm mb-4">{errors.password?.message}</span>
            <div className='text-white text-sm space-x-12 mb-8'>
                <input type="checkbox" id="remember" /> Remember me
                <a className='underline' href="#">Forgot Password?</a>
            </div>
            <button className='text-white border rounded md py-2 px-8 w-60 text-lg font-bold ease-in duration-300 hover:bg-gray-300 hover:text-black' type="submit">Enter</button>
        </form>
    )
}

export default Form;