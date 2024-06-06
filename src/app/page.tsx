import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-4">
      <h1>LMS PROJECT</h1>
      <h1 className="text-gray-400 mt-5">Another my page !</h1>
      <Link href={"/login"}>Login Page</Link>
    </div>
  );
}
