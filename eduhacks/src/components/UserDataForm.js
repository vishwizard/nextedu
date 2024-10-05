import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

export default function UserDataForm() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    birthDate: '',
    bio: '',
  });
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);

  useEffect(() => {
    const checkFirstTimeUser = async () => {
      if (status === 'authenticated') {
        const res = await fetch(`/api/check-user?email=${session.user.email}`);
        const data = await res.json();

        if (data.isFirstTime) {
          setIsFirstTimeUser(true);
        }
      }
    };

    checkFirstTimeUser();
  }, [session, status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/user-data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      console.log('User data saved successfully');
    } else {
      console.log('Error saving user data');
    }
  };

  if (!isFirstTimeUser) return <></>;

  return (
    <form onSubmit={handleSubmit} className="bg-gray-200 p-6 rounded-md">
      <h2 className="text-xl font-bold mb-4">Complete your profile</h2>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
        required
        className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        required
        className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
      />

      <label>Birth Date</label>
      <input
        type="date"
        name="birthDate"
        value={userData.birthDate}
        onChange={handleChange}
        required
        className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
      />

      <label>Bio</label>
      <textarea
        name="bio"
        value={userData.bio}
        onChange={handleChange}
        className="block w-full p-2 mb-4 border border-gray-300 rounded-md"
      ></textarea>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Submit
      </button>
    </form>
  );
}
