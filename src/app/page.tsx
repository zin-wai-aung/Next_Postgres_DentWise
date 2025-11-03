import { SignedIn, SignedOut, SignOutButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <SignedOut>
        <SignUpButton mode="modal"> Sign Up </SignUpButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton> Logout</SignOutButton>
      </SignedIn>
    </main>
  );
}
