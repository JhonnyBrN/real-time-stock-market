'use client';

import FooterLink from '@/components/forms/FooterLink';
import InputField from '@/components/forms/InputField';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';

type SignInFormData = {
    email: string;
    password: string;
}

const Signin = (): React.JSX.Element => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur'
    });

    const onSubmit = async (data : SignInFormData) => {
        try {
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>  
            <h1 className='form-title'>Welcome Back!</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                <InputField 
                    name='email'
                    label='Email' 
                    type='email'
                    placeholder='john.doe@example.com'
                    register={register}
                    error={errors.email}
                    validation={{ 
                        required: 'Email is required', 
                        pattern: { 
                            value: /^\S+@\S+$/, 
                            message: 'Email is invalid' 
                        } 
                    }}
                />

                <InputField 
                    name='password'
                    label='Password' 
                    type='password'
                    placeholder='••••••••'
                    register={register}
                    error={errors.password}
                    validation={{ required: 'Password is required' }}
                />

                <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
                    {isSubmitting ? 'Logging In...' : 'Log In'}
                </Button>

                <FooterLink text="Don't have an account?" linkText='Sign Up' href='/sign-up' />
            </form>
        </>
    )
}

export default Signin;