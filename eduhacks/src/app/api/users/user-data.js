import dbConnect from '@/lib/dbConnect';
import User from '@/models/User'; 

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await dbConnect(); 

    const { name, email, birthDate, course } = req.body;

    try {
      
      const existingUser = await User.findOne({ email });

      if (!existingUser) {
        
        const newUser = new User({
          name,
          email,
          birthDate,
          course,
        });

        await newUser.save();
        res.status(200).json({ message: 'User data saved successfully' });
      } else {
        res.status(400).json({ message: 'User already exists' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
}
