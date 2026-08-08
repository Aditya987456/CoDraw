"use client";

import Link from "next/link";
import { Mail, Lock, User } from "lucide-react";

import { Button } from "@repo/ui";
import { COLORS } from "@repo/common/constants";
import { Field } from "./Field";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { HttpBackendUrl } from "../../app/config";

import { useRouter } from "next/navigation";






export default function SignUpForm() {



    
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(
      {
      name:"",
      password:"",
      email:""
      }
    );


    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
      
      setFormData( (prevData)=>({
        ...prevData,
        [e.target.name]:e.target.value
      }) )
    }


    const HandleSignUp = async (e: FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      //console.log("SIGNUP FORM SUBMITTED");
      

      try {

        const payload = {
          name:formData.name.trim(),
          email:formData.email.trim().toLowerCase(),
          password:formData.password.trim()
        }

        if(!payload.name  ||  !payload.email  ||  !payload.password){
          return toast.error("All fields are required");
        }

        setLoading(true);

        toast.loading("Creating your account...", { id: "signup" });

        //call to backend---
        const response = await axios.post(`${HttpBackendUrl}/signup`, payload )

        toast.success("Account created successfully!", {
          id: "signup",
        });

        
        router.push('/signin')
        //router.replace('/dashboard')
        
      } catch (error) {




      //MY NOTE- main error in almost every applications--- and take care about this...

      // 1. Validation error


      // 2. Authentication error
      // 3. Authorization error
      // 4. Resource conflict
      // 5. Not found
      // 6. Server error
      // 7. Network error


      if(axios.isAxiosError(error)){


        //----this is when even backend is not reachable then ... no status code so for that this is logic.
        if (!error.response) {
          toast.error("Unable to connect to server", {
            id: "signup",
          });

          return;
        }
        
        const status = error.response?.status;
        
        switch (status) {
          case 400:
            toast.error("Invalid Request", {id:"signup"})
            break;

        //---this two no needed in signup...
          // case 401:
          //   toast.error("Unauthorized", {id:"signup"})
          //   break;

          // case 403:
          //   toast.error("", {id:"signup"})
          //   break;

          case 404:
            toast.error("Service not found", {id:"signup"})
            break;

          case 409:
            toast.error("Email Already exists", {id:"signup"})
            break;

          case 422:
            toast.error("Please check your input formate", {id:"signup"})
            break;

          case 500:
            toast.error("Internal server error", {id:"signup"})
            break;
        
          default:
            toast.error(error.response?.data?.message?? "Something went wrong", {id:"signup"})
            break;
        }

      }else{
                // Non-Axios error
                toast.error("Something went wrong", {
                id: "signup",
                });
            }



        
      }finally{
        setLoading(false)
      }


    }

  

    // ---just for debugging...
    // const click = ()=>{
    //   alert('button clicked')
    // }








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
          Create your account
        </h1>

        <p
          className="mt-3 text-[15px] leading-7"
          style={{
            color: COLORS.inkSoft,
          }}
        >
          Join CoDraw and start collaborating in minutes.
        </p>
      </div>


      {/* Form */}
      <form onSubmit={HandleSignUp} className="space-y-6">
        
        <Field
          onChange={handleChange}
          value={formData.name}
          name="name"
          id="name"
          label="Full Name"
          placeholder="Aditya Raj"
          icon={User}
        />

        <Field
          onChange={handleChange}
          name="email"
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          placeholder="you@example.com"
          icon={Mail}
        />

        <Field
          onChange={handleChange}
          name="password"
          value={formData.password}
          id="password"
          label="Password"
          type="password"
          placeholder="Create a password"
          icon={Lock}
        />

        <Button
          type="submit"
          variant="accent"
          className="w-full"
          size="default"
          disabled={loading}

        >
          {loading
                    ? "Creating Account..."
                    : "Create Account"
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
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-medium hover:underline"
            style={{
              color: COLORS.blue,
            }}
          >
            Sign In
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