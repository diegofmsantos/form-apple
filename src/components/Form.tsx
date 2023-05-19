import appleId from "../assets/apple-id.png";
import { MdLogin } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    login: z.string()
    .nonempty('Digite seu login.')
    .min(5, {message: 'Mínimo de 5 caracteres.'}),
    password: z.string()
    .nonempty('Digite sua senha.')
    .min(5, {message: 'Mínimo de 5 caracteres.'})
        
})

type inputs = z.infer<typeof schema>

const Form = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<inputs>({
        resolver: zodResolver(schema)
    });

    function formUser(data: any) {
        console.log(data)
    }
    
    return (
        <form onSubmit={handleSubmit(formUser)} className='bg-black bg-opacity-80 w-96 h-3/4 rounded-lg flex flex-col justify-start items-center border boder-white py-2 mb-6 max-[450px]:w-[350px] max-[380px]:w-[320px]'>
            <img className='w-40 pt-2 mb-6' src={appleId} alt="Logo Apple" />
            <div className="h-12 text-center">
                <div className='h-6 flex justify-center items-center gap-3'>
                    <MdLogin className='w-5 h-5 text-white max-[400px]:w-4 max-[400px]:h-4' />
                    <input className='w-60 bg-transparent border-b-2 text-center outline-none text-white placeholder:text-sm mb-1 max-[400px]:w-52'
                    type="text"
                    id="login"
                    placeholder='Login'
                    autoComplete='off'
                    {...register("login")}
                    />
                </div>
                {errors?.login?.message && <span className="h-8 text-red-500 text-sm">{errors?.login.message}</span>}
            </div>

            <div className="h-12 text-center">
                <div className='h-6 flex justify-center items-center gap-3 mt-4'>
                    <RiLockPasswordLine className='w-5 h-5 text-white max-[400px]:w-4 max-[400px]:h-4' />
                    <input className='w-60 bg-transparent border-b-2 text-center outline-none text-white placeholder:text-sm mb-1 max-[400px]:w-52'
                    type="password"
                    id="password"
                    placeholder='Password'
                    autoComplete='off'
                    {...register("password")}
                    />
                </div>
                {errors?.password?.message && <span className="h-8 text-red-500 text-sm">{errors?.password.message}</span>}
            </div>
            <div className='text-white text-sm space-x-12 mb-8 mt-8 max-[400px]:space-x-9'>
                <input type="checkbox" id="remember" /> Remember me
                <a className='underline' href="#">Forgot Password?</a>
            </div>
            
            <button className='text-white border rounded md py-2 px-8 w-60 text-lg font-bold ease-in duration-300 hover:bg-gray-300 hover:text-black' type="submit">Enter</button>
        </form>
    )
}

export default Form;