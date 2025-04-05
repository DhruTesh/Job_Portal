'use client'
import React from 'react';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';

interface Props {
    session: Session ;
}

const User: React.FC<Props> = ({ session }) => {
  const userName = session.user?.name || 'User';
  const userImage = session.user?.image || '/default-avatar.png'; // Replace with your fallback image if needed

  return (
    <div
      onClick={() =>
        signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_URL}/signup` })
      }
      className="cursor-pointer"
      title={`Logout (${userName})`}
    >
      <img
        src={userImage}
        alt={`${userName}'s avatar`}
        className="w-[50px] h-[50px] rounded-full border-2 border-white hover:opacity-80 transition"
      />
    </div>
  );
};

export default User