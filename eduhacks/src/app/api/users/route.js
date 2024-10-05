// src/app/api/users/route.js
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(req) {
  const db = await connectToDatabase();

  const users = await User.find({});
  return new Response(JSON.stringify(users), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req) {
  const db = await connectToDatabase();
  const { name, email } = await req.json();

  const user = new User({ name, email });
  await user.save();

  return new Response(JSON.stringify(user), {
    headers: { "Content-Type": "application/json" },
  });
}
