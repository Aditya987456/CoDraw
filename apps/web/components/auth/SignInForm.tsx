



"use client";

import Link from "next/link";
import { Mail, Lock } from "lucide-react";

import { Button } from "@repo/ui";
import { COLORS } from "@repo/common/constants";
import { Field } from "./Field";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ChangeEvent } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { HttpBackendUrl } from "../../app/config";








export function SignInForm() {

    const router = useRouter()
    const [loading , setLoading] = useState(false);
    const [formData, setFormData] = useState(
        {
            email:"",
            password:""
        }
    )

    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{

        setFormData( (prevData)=>({
            ...prevData,
            [e.target.name]:e.target.value
        }) )
    }



    const handleSignIn = async (e: FormEvent<HTMLFormElement>)=>{

        e.preventDefault();

        try {

            const payload = {
                email:formData.email.trim().toLowerCase(),
                password:formData.password.trim()
            }

            if(!payload.email  ||  !payload.password){
                return toast.error("All fields are required");
            }

            setLoading(true);

            toast.loading("Logging in your account...", {id:"signin"})

            //call to backend server
            const response = await axios.post(`${HttpBackendUrl}/signin`, payload)

            toast.success("Logged in successfully!", {id:"signin"})

            //router.push('/dashboard')
            router.replace('/dashboard')

            
        } catch (error) {

            if(axios.isAxiosError(error)){


                //----this is when even backend is not reachable then ... no status code so for that this is logic.
                if (!error.response) {
                toast.error("Unable to connect to server", {
                    id: "signin",
                });

                return;
                }
        
            const status = error.response?.status;
            
            switch (status) {
            case 400:
            toast.error("Invalid request", { id: "signin" });
            break;

            case 401:
            toast.error("Invalid email or password", { id: "signin" });
            break;

            case 404:
            toast.error("User not found", { id: "signin" });
            break;

            case 422:
            toast.error("Please check your input", { id: "signin" });
            break;

            case 500:
            toast.error("Internal server error", { id: "signin" });
            break;

            default:
            toast.error(
                error.response.data?.message ?? "Something went wrong",
                { id: "signin" }
            );}

            }else{
                // Non-Axios error
                toast.error("Something went wrong", {
                id: "signin",
                });
            }

            
        }finally{
            setLoading(false)

        }

    }





  return (
    <div className="mx-auto w-full max-w-105">
      {/* Heading */}
      <div className="mb-10">
        <h1
          className="font-space text-4xl font-bold tracking-tight"
          style={{
            color: COLORS.ink,
          }}
        >
          Welcome back
        </h1>

        <p
          className="mt-3 text-[15px] leading-7"
          style={{
            color: COLORS.inkSoft,
          }}
        >
          Sign in to continue where you left off.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSignIn} className="space-y-6">
        <Field
          onChange={handleChange}
          value={formData.email}
          name="email"
          id="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          icon={Mail}
        />

        <Field
          onChange={handleChange}
          value={formData.password}
          name="password"
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          icon={Lock}
        />


    {/* forgot password logic -- will do it in v2 */}
            {/* <div className="flex justify-end">
            <Link
                href="/forgot-password"
                className="text-sm transition hover:underline"
                style={{
                color: COLORS.blue,
                }}
            >
                Forgot password?
            </Link>
            </div> */}


        <Button
          type="submit"
          disabled={loading}
          variant="accent"
          className="w-full"
          size="default"
        >
          {loading
                    ? "Signing In..."
                    : "Sign In"
                    }
        </Button>
      </form>

      {/* Footer */}
      <div className="mt-10 text-center">
        <p
          className="text-sm"
          style={{
            color: COLORS.inkSoft,
          }}
        >
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium hover:underline"
            style={{
              color: COLORS.blue,
            }}
          >
            Create one
          </Link>
        </p>

        <Link
          href="/"
          className="mt-6 inline-block text-sm transition hover:underline"
          style={{
            color: COLORS.inkSoft,
          }}
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}