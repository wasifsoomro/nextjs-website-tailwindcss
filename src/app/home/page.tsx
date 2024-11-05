"use client";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh(); 
  }, []);

  return (
    <main className="overflow-x-hidden max-w-screen-lg mx-auto">
      <section className="bg-[#2c2c2e] text-[#FAF9F6] flex flex-col justify-center items-center mb-8 m-auto  overflow-hidden md:flex md:gap-12 md:mb-8 md:flex-row lg:flex lg:mb-0 lg:flex-row lg:gap-40">
        <div data-aos="zoom-in-up" className="mt-28 md:mt-32 lg:mt-32 ">
          <Image
            src="/myprofile.jpeg"
            alt="Profile Picture"
            width={400}
            height={350}
            className="rounded-[50%] h-[180px] w-[180px] border-2 solid border-black md:ml-2 md:w-[200px] md:h-[200px] md:rounded-[50%] lg:w-[250px] lg:h-[250px] lg:rounded-[50%]"
            priority
          />
        </div>

        <div className="text-center md:mt-32 ">
          <h1
            data-aos="flip-left"
            className="text-[#3498db] text-[40px] text-center font-bold italic md:text-4xl lg:text-6xl lg:pb-2"
          >
            Welcome To My
          </h1>
          <h1
            data-aos="flip-left"
            className="text-[#3498db] text-[40px] text-center font-bold italic md:text-4xl md:text-center lg:text-6xl lg:pb-2"
          >
            Website
          </h1>
          <h1
            data-aos="flip-up"
            className="text-[#3498db] text-3xl font-bold italic md:text-center md:text-3xl lg:text-[2.5rem] lg:pb-2"
          >
            Muhammad Wasif
          </h1>

          <div data-aos="flip-right" className="text-center p-4">
            <p className="text-[20px] font-thin md:block  lg:text-2xl">
              A web development enthusiast learning to
            </p>
            <p className="text-[20px] font-thin md:block  lg:text-2xl ">
              create clean and functional websites. This
            </p>
            <p className="text-[20px] font-thin md:block  lg:text-2xl  ">
              is my first website, and I am excited to
            </p>
            <p className="text-[20px] font-thin md:block  lg:text-2xl ">
              share it with you.
            </p>
          </div>
        </div>
      </section>

      <section className="items-center justify-center flex flex-col m-auto gap-3 lg:gap-24 mb-4 md:flex md:flex-row md:justify-center lg:items-baseline lg:pt-10 lg:h-[62rem]">
        <div
          data-aos="zoom-in-up"
          className="border-[1px] border-solid border-[#3498db] h-[350px] w-[270px] lg:w-[350px] lg:h-[600px]"
        >
          <h1 className="text-[#3498db] font-extrabold italic text-3xl text-center mt-3 lg:text-[2.5rem]">
            About Me
          </h1>
          <div className="items-center justify-center flex mt-3">
            <Image
              src="/myPhoto.jpeg"
              alt="About Me Image"
              width={120}
              height={120}
              className="rounded-[50%] lg:w-[250px] lg:h-[250px]"
            />
          </div>
          <p className="text-[12px] text-justify flex p-7 font-medium mt-2 lg:text-2xl">
            I am Muhammad Wasif, and I&apos;m currently learning web
            development. My goal is to become a full-stack developer, and this
            website marks the beginning of my journey.
          </p>
        </div>

        <div
          data-aos="zoom-in-up"
          className="border-[1px] border-solid border-[#3498db] h-[350px] w-[270px] lg:w-[350px] lg:h-[600px] lg:relative lg:bottom-[-21rem]"
        >
          <h1 className="text-[#3498db] font-extrabold italic text-4xl text-center mt-3 lg:text-5xl lg:pb-10">
            Skills
          </h1>
          <div className="mt-3">
            <div className="items-center justify-center flex gap-12 lg:pb-10">
              <Image
                className="lg:w-[70px] lg:h-[70px]"
                src="/html-logo.png"
                alt="HTML Logo"
                width={40}
                height={40}
              />
              <Image
                className="lg:w-[70px] lg:h-[70px]"
                src="/csslogo.jpeg"
                alt="CSS Logo"
                width={40}
                height={40}
              />
            </div>
            <div className="items-center justify-center flex">
              <Image
                className="rounded-[50%] lg:w-[80px] lg:h-[80px]"
                src="/nextlogo.jpeg"
                alt="Next.js Logo"
                width={50}
                height={50}
              />
            </div>
            <div className="items-center justify-center flex gap-12 lg:pt-10">
              <Image
                className="lg:w-[70px] lg:h-[70px]"
                src="/jslogo.jpeg"
                alt="JavaScript Logo"
                width={40}
                height={40}
              />
              <Image
                className="lg:w-[70px] lg:h-[70px]"
                src="/reactlogo.jpeg"
                alt="React Logo"
                width={40}
                height={40}
              />
            </div>
          </div>
          <p className="mt-2 p-8 flex text-justify font-medium text-[14px] lg:text-2xl">
            I am proficient in HTML, CSS, and JavaScript, and I am exploring
            frameworks like React and Next.js.
          </p>
        </div>
      </section>

      <section className="p-5 text-[#FAF9F6] md:flex items-center lg:flex">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="grid md:inline-block lg:inline-block md:m-auto"
        >
          <h1 className="text-3xl font-bold italic m-0 text-center p-4 md:text-6xl lg:text-7xl">
            Contact Me
          </h1>
        </div>

        <div data-aos="zoom-in-up" className="bg-[#2c2c2e] ml-auto mr-auto max-w-[400px] border-solid border-2 border-[#145fcf] w-full p-10 rounded-[20px] md:max-w-[400px] md:mr-auto md:ml-auto lg:max-w-[500px] lg:mr-auto lg:ml-auto">
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
      </section>
    </main>
  );
}
