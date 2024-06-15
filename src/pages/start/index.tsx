import { useEffect, useState } from "react";
import { generateInspirationQuote } from "../../utils/generateInspirationQuote";
import { useRouter } from "next/router";

export default function Start() {
  const [quote, setQuote] = useState("");
  const router = useRouter();

  useEffect(() => {
    setQuote(generateInspirationQuote());
  }, []);

  const handleNavigate = () => {
    router.push("/login");
  };

  return (
    <div
      onClick={handleNavigate}
      className="flex min-h-screen flex-col items-center justify-center p-24 text-center font-mono text-3xl lg:flex cursor-pointer"
    >
      <h1>{quote}</h1>
    </div>
  );
}
