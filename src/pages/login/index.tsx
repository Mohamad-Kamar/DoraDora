import { FormEvent } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push("/home");
    } else {
      // Handle errors
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-16 rounded shadow-2xl w-96">
        <h2 className="text-3xl font-bold mb-10 text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded text-black"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your Password"
              className="w-full p-2 border border-gray-300 rounded text-black"
            />
          </div>
          <button className="w-full bg-blue-700 hover:bg-blue-950 font-bold py-2 rounded">
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-700 hover:underline">
            Forgot Password?
          </a>
        </div>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-700 hover:underline">
            Sign Up
          </a>
        </div>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-700 hover:underline">
            Guest Access
          </a>
        </div>
      </div>
    </div>
  );
}
