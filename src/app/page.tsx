import Link from "next/link";
import Image from "next/image";

const Homepage = () => {
  return (
        <Link
          href="/admin"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">admin</span>
        </Link>
  )
}

export default Homepage