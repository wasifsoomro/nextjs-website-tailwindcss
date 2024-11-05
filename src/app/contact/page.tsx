import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
   <main className="overflow-hidden">
    <section className="p-6 pt-24">
      <h1 className="text-[2.5rem] text-center font-extrabold">Contact Me</h1>

      <p className="text-center mb-4">
        If you have any questions or inquiries, feel free to contact me.
      </p>

      <div className="bg-[#2c2c2e] ml-auto mr-auto max-w-[400px] border-solid border-2 border-[#145fcf] w-full p-10 rounded-[20px] md:max-w-[400px] md:mr-auto md:ml-auto lg:max-w-[500px] lg:mr-auto lg:ml-auto mb-4">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-bold mb-1">
                Name
              </label>
              <input
                className="w-full p-3 bg-[#2c2c2e] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#3498db]"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-bold mb-1">
                Email
              </label>
              <input
                className="w-full p-2 bg-[#2c2c2e] text-[#FAF9F6] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#3498db]"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block font-bold mb-1">
                Subject
              </label>
              <input
                className="w-full p-2 bg-[#2c2c2e] text-[#FAF9F6] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#3498db]"
                type="text"
                id="subject"
                name="subject"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-bold mb-1">
                Message
              </label>
              <textarea
                className="w-full p-2 bg-[#2c2c2e] text-[#FAF9F6] border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-[#3498db]"
                name="message"
                id="message"
                rows={5}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#3498db] text-white font-bold rounded-lg transition hover:bg-[#1656b8] focus:outline-none focus:ring-2 focus:ring-[#145fcf]"
            >
              Submit
            </button>
          </form>
        </div>

      <div>
        <div>
          <div className="mb-4">
            <Image
              src="/icons8-email-48.png"
              alt="Email icon"
              width={80}
              height={50}
            />
            <p>yourname@example.com</p>
          </div>

          <div className="mb-4">
            <Image
              src="/icons8-phone-100.png"
              alt="Phone icon"
              width={50}
              height={30}
            />
            <p>+123-456-7890</p>
          </div>

          <div className="mb-4">
            <Image
              src="/icons8-map-marker-32.png"
              alt="Location icon"
              width={80}
              height={50}
            />
            <p>123 Web Developer St, Coding City</p>
          </div>
        </div>
      </div>

      <div className="items-center flex mt-10">
        <h2 className="font-bold text-2xl">Follow Us</h2>
        <div className="flex gap-3">
          <div>
            <Link href="https://www.linkedin.com/in/muhammad-wasif-337b5a213">
              <Image
                src="/icons8-linkedin-48.png"
                alt="LinkedIn icon"
                width={80}
                height={50}
              />
              <p className="pl-2">LinkedIn</p>
            </Link>
          </div>
          <div>
            <Link href="https://github.com/wasifsoomro">
              <Image
                src="/icons8-github-48.png"
                alt="GitHub icon"
                width={80}
                height={50}
              />
              <p className="pl-2">GitHub</p>
            </Link>
          </div>
          <div>
            <Link href="https://x.com/M_WasifSoomro">
              <Image
                src="/icons8-twitter-48.png"
                alt="Twitter icon"
                width={80}
                height={50}
              />
              <p className="pl-2">Twitter</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
   </main>
   
  );
}
