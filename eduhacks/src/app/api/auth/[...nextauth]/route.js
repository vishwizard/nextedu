import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"; 
import CredentialsProvider from "next-auth/providers/credentials"; 

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID, 
      clientSecret: process.env.CLIENT_SECRET, 
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username:", placeholder: "Your-Username" },
        password: { label: "Password", placeholder: "Your-Password" },
      },
      async authorize(credentials) {
        const user = { id: "42", name: "Vishwizard", password: "eduhacks" };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user; 
        } else {
          return null; 
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, 
  session: {
    strategy: "jwt", // Use "jwt" for JSON Web Tokens
    maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
  },
});

export { handler as GET, handler as POST };
