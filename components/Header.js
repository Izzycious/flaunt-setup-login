import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const handleSignIn = (e) => {
    e.preventDefault();
    signIn();
  };
  const handleSignOut = (e) => {
    e.preventDefault();
    signOut();
  };

  const { data: session } = useSession;
  return (
    <div className="header">
      <Link href="/">
        <a className="logo">NextAuth.js</a>
      </Link>
      {session && (
        <a href="#" onClick={handleSignOut} className="btn-signin">
          signOut
        </a>
      )}
      {!session && (
        <a href="#" onClick={handleSignIn} className="btn-signin">
          signIn
        </a>
      )}
    </div>
  );
}
