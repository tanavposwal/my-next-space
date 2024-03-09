import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignOutButton } from "./buttons";
import AuthCheck from "@/components/AuthCheck";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex select-none">
      <Link href="/">
        <Image
          src="/logo.png" // Route of the image file
          width={216}
          height={30}
          alt="NextSpace Logo"
        />
      </Link>
      <ul className="flex flex-1 justify-end items-center text-white gap-3">
        <li className="hover:underline underline-offset-2">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:underline underline-offset-2">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="hover:underline underline-offset-2">
          <Link href="/users">Users</Link>
        </li>
        <li>
          <SignInButton />
        </li>
        <li>
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </li>
      </ul>
    </nav>
  );
}
