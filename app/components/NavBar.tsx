"use client";

import Link from "next/link";
import { useAuth, UserButton } from "@clerk/nextjs";

const NavBar = () => {
  const { userId } = useAuth();

  return (
    <header className="bg-blue-900 border-b border-gray-200 py-4 h-[8vh]">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-white">Scoop Schools</h1>
        <nav>
          <ul className="flex space-x-20 text-md text-white">
            <li>
              <Link href="/aboutus" className="hover:underline">
                About us
              </Link>
            </li>
            <li>
              <Link href="/listings" className="hover:underline">
                Search for schools
              </Link>
            </li>
            {userId && (
              <li>
                <Link href="/profile" className="hover:underline">
                  Profile
                </Link>
              </li>
            )}
            <li>
              {!userId ? (
                <Link href="/sign-in" className="hover:underline">
                  Sign In
                </Link>
              ) : (
                <UserButton />
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
