"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCredentialsLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (res?.error) {
      alert("Invalid credentials!");
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>

      {/* Google OAuth Login */}
      <button onClick={() => signIn("google")}>Sign in with Google</button>

      {/* Credentials Login */}
      <form onSubmit={handleCredentialsLogin}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your username"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
          />
        </div>
        <button type="submit">Login with Credentials</button>
      </form>
    </div>
  );
}
