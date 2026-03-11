import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-center">
        <Link href="/">
          <Image
            src="/Doorvana D Icon Blk.png"
            alt="Doorvana"
            width={36}
            height={36}
            className="sm:hidden"
          />
          <Image
            src="/Doorvana_Blk_on_White.jpg"
            alt="Doorvana"
            width={160}
            height={32}
            className="hidden sm:block"
          />
        </Link>
      </div>
    </header>
  );
}
