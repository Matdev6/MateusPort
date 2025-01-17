import { useForm } from 'react-hook-form'

 
const Login = () => {

    const { register, handleSubmit, formState: {errors}  } = useForm()
    
    const onSubmit = (data) => {
        console.log(data)
    }
    
    console.log(errors)

    return(
        <div className="h-screen w-screen flex bg-primary">
            <div className=" w-1/3 h-3/4 m-auto bg-secundary rounded-xl shadow-2xl">
                 <div className="flex flex-col">
                    <h1 className="mx-auto w-max mt-10 text-4xl font-semibold text-white">Registrar</h1>
                    <div className="flex flex-col w-3/4 h-1/2 mt-16 mx-auto gap-6">
                        <label className="flex flex-col">
                            Email
                            <input 
                                type="text" 
                                placeholder="Digite seu Email..." 
                                className="rounded-xl p-2 w-full"
                                {...register('email' , { required: true })} />
                                {errors?.email?.type == 'required' ? <p className='text-red-600 ml-2 mt-2 font-medium'>O email é obrigatorio</p> : <p></p>}

                                
                        </label>
                        <label className="flex flex-col">
                            Senha
                            <input 
                                type="password" 
                                placeholder="Digite sua senha" 
                                className="rounded-xl p-2 w-full"
                                {...register('password', { required: true } )} />
                                 {errors?.password?.type == 'required' ? <p className='text-red-600 ml-2 mt-2 font-medium'>A senha é obrigatoria</p> : <p></p>}
                        </label>
                        <label className="flex flex-col">
                            Confirmar senha
                            <input 
                                type="password" 
                                placeholder="Digite sua senha novamente" 
                                className="rounded-xl p-2 w-full"
                                {...register('confirmPassword' , { required: true })} />
                                 {errors?.confirmPassword?.type == 'required' ? <p className='text-red-600 ml-2 mt-2 font-medium'>Confirmar a senha é obrigatorio</p> : <p></p>}
                        </label>
                        <button 
                            className="bg-primary p-2 rounded-xl cursor-pointer hover:bg-green-950 hover:text-white"
                            onClick={handleSubmit(onSubmit)}
                            >registar
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login