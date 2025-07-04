"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Image from "next/image";
import Link from "next/link";
import {toast} from "sonner";
import { useRouter } from "next/navigation";



import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form,FormField
  // Form, FormField
  // FormControl,
  // FormDescription,
  // FormField,
  // FormItem,
  // FormLabel,
  // FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/client";
import { signIn, signUp } from "@/lib/actions/auth.actions";

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

const authFormSchema = (type:FormType) => {
    return z.object({
        name: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
        email: z.string().email(),
        password: z.string().min(3),
        
    })
}
const AuthForm = ({ type} : { type: FormType}) => {
const router = useRouter();

const formSchema = authFormSchema(type);
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",



    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try{
        if(type === 'sign-up'){
        const { name, email, password } = values;

        const userCredentials = await createUserWithEmailAndPassword(auth,email,password)
         
        const result = await signUp({
          uid: userCredentials.user.uid,
          name: name!,
          email,
          password,
        });

        if (!result.success) {
          toast.error(result.message);
          return;
        }
        
        toast.success('Account created successfully. Please sign in.');
          router.push('/sign-in')
        } else {
          const { email , password }=values;
          const userCredentials = await signInWithEmailAndPassword(auth,email,password)
          const idToken = await userCredentials.user.getIdToken();
          if(! idToken){
            toast.error('Sign in failed')
            return;
          }
          await signIn({
            email, idToken
          })




          toast.success('Sign in successfully.');
          router.push('/')        }

    } catch (error){
        console.log(error);
        toast.error(`There was an error : ${error}`)
    }
    console.log(values)
  }
  const isSignIn = type === 'sign-in';
  return (
    <div className="card-border lg:min-w-[566px]">
        <div className="flex flex-col gap-6 card py-14 px-10">
    <div className="flex flex-row gap-2 justify-centre">
  <Image src="/logo.svg" alt="logo" height={32} width={38} />
  <h2 className="text-primary-100">PrepWise</h2>

    <h3> Practice job interview with AI </h3>
        </div>
        
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
      className=" w-full space-y-6 mt-4 form">
        {! isSignIn && (
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <Input id="name" placeholder="Your Name" {...field} />
              </div>
            )}
          />
        )}
       <FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <div>
      <label htmlFor="email" className="block mb-1">Email</label>
      <Input id="email" placeholder="Your email address" {...field} />
    </div>
  )}
/>

<FormField
  control={form.control}
  name="password"
  render={({ field }) => (
    <div>
      <label htmlFor="password" className="block mb-1">Password</label>
      <Input id="password" type="password" placeholder="Enter your password" {...field} />
    </div>
  )}
/>

        <Button className="btn"
         type="submit">{isSignIn ? 'Sign in' : 'Create an Account '}</Button>
      </form>
    </Form>
    <p className="text-centre">
        {isSignIn ? 'No account yet?' : 'Have an account already?'}
        <Link href={!isSignIn ? "/sign-in" : "/sign-up"} className="font-bold text-user-primary ml-1">
  {!isSignIn ? "Sign in" : "Sign up"}
</Link>    </p>
    </div>
    </div> 

  )
}

export default AuthForm