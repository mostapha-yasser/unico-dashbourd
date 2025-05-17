"use client";
import { useActionState, useEffect } from "react";
import SubmitButton from "./SubmitButton";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { login } from "@/services/auth/action";
function LoginForm() {
  const router = useRouter();
  const [state, loginAction] = useActionState(login, undefined);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
      router.replace("/");
    }

  }, [state?.message, state?.success, router]);


  return (
    <form
      action={loginAction}
      className="w-full md:w-3/5 lg:w-2/5 px-6 pt-6 space-y-8   text-main bg-formbg
          border-3  border-main "
    >
      <p className="text-center text-3xl sm:text-5xl  font-bold ">
        welcome back
      </p>

      <div className="flex flex-col  ">
        <label htmlFor="email" className="label">
          <span className="label-text ">Email</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          autoComplete="email"
          aria-describedby="email-error"
          className={` w-full bg-Background border-2 px-6 py-3 focus:border-Input-Focus 
            outline-0 border-Input-Border bg-Input-Background`}
        />

        <p className="text-center min-h-6 text-red-500 ">
          {state?.errors?.email && state?.errors?.email[0]}
        </p>
      </div>

      <div className="flex flex-col  ">
        <label htmlFor="password" className="label">
          <span className="label-text ">Password</span>
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          aria-describedby="password-error"
          className={` w-full bg-Background border-2 px-6 py-3 focus:border-Input-Focus 
            outline-0 border-Input-Border bg-Input-Background`}
        />

        <p className="text-center min-h-6 text-red-500">
          {state?.errors?.password && state?.errors?.password[0]}
        </p>
      </div>
      <SubmitButton title={"login"}  />
      <p className="text-center  min-h-6 text-red-500">{state?.error}</p>
    </form>
  );
}

export default LoginForm;
