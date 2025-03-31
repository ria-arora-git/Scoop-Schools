import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="p-6 bg-blue-800 shadow-lg rounded-xl">
        <SignIn />
      </div>
    </div>
  );
}
