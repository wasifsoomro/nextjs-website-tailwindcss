import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2c3e50] w-full p-4 md:w-full h-full">
      <div className="flex gap-4 items-center justify-center flex-col md:flex-row md:gap-8">
        <hr className="w-[35%] border-t-2 border-dotted border-[#3498db]" />
        
        <Link href="https://www.facebook.com/wasifkhan65?mibextid=ZbWKwL">
          <Image src="/icons8-facebook-48.png" alt="facebook" width={50} height={30} />
        </Link>
        <Link href="https://www.linkedin.com/in/muhammad-wasif-337b5a213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <Image src="/icons8-linkedin-48.png" alt="linkedin" width={50} height={30} />
        </Link>
        <Link href="https://x.com/M_WasifSoomro?t=SRHbomKzbfm0E-BcOnFaFQ&s=09">
          <Image src="/icons8-twitter-48.png" alt="twitter" width={50} height={30} />
        </Link>
        
        <hr className="w-[35%] border-t-2 border-dotted border-[#3498db]" />
      </div>

      <p className="text-center text-[#ecf0f1] font-serif font-bold py-4">
        Copy Right © 2024 WS All rights reserved. Let&apos;s create something great!
      </p>
    </footer>
  );
}
