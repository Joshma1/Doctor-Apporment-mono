"use client";
import { useRouter } from "next/navigation";
import LoginForm from "@components/LoginForm";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (data: { email: string; password: string }) => {
    // TODO: Add real authentication logic here
    // If login is successful:
    router.push("/dashboard/availability");
  };
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
       
      <LoginForm onSubmit={(data) => { /* handle profile submit */ }} />
        <p>Hello World</p>
    </div>
  );
}

// ///////////////////
// "use client";
// import { useRouter } from "next/navigation";
// import LoginForm from "@components/LoginForm";
// import { useState } from "react";

// export default function LoginPage() {
//   const router = useRouter();
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (data: { email: string; password: string }) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await fetch("http://localhost:3333/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });
//       const result = await res.json();
//       if (res.ok) {
//         // Optionally store token: localStorage.setItem("token", result.token);
//         router.push("/dashboard/availability");
//       } else {
//         setError(result.message || "Login failed");
//       }
//     } catch {
//       setError("Network error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-2xl font-bold mb-4">Login</h1>
//       <LoginForm onSubmit={handleLogin} loading={loading} error={error || undefined} />
//     </div>
//   );
// }