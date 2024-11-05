import React, { useEffect } from "react";
import Image from "next/image";
// import AOS from "aos";
// import "aos/dist/aos.css";

export default function Page() {
  // useEffect(() => {
  //   AOS.init({
  //     easing: "ease-out-back",
  //     duration: 1200,
  //     delay: 100,
  //     mirror: true,
  //     anchorPlacement: "bottom-bottom",
  //     offset: 160,
  //   });
  //   AOS.refresh(); // Correct the function call
  // }, []);

  return (
    <main className="overflow-x-hidden">
    <section className="p-6">
      <h1 className="text-6xl font-extrabold text-center pt-24">About Me</h1>
  
      <div
        className="flex justify-center items-center mt-6"
        data-aos="flip-left"
      >
        <Image
          src="/myprofile.jpeg"
          alt="Profile picture of Muhammad Wasif"
          width={180}
          height={180}
          className="rounded-full border-2 border-solid border-[#6f7f29] h-[250px] w-[250px]"
        />
      </div>
  
      <div className="mt-8">
        <p
          data-aos="flip-up"
          className="text-justify text-2xl font-thin max-w-2xl mx-auto" // Added max-width and centered
        >
          My name is Muhammad Wasif, and I&apos;m deeply passionate about web
          development. Over the past months, I have been on an exciting
          journey, learning and mastering the essential skills needed to
          become a proficient full-stack developer. <br /> <br />
          With a strong foundation in HTML, CSS, and JavaScript, I am
          continuously exploring more advanced frameworks like React and
          Next.js. My goal is to develop innovative, responsive, and
          user-friendly web applications that create impactful user
          experiences. <br />
          <br />
          This website is a reflection of my growing knowledge and my
          commitment to the craft of web development. As I expand my
          expertise, I am eager to dive into more complex areas of full-stack
          development, including server-side programming, databases, and
          application deployment.
        </p>
      </div>
  
      <div className="rounded-[5px] mt-8">
        <h2 className="text-center pt-7 text-6xl font-bold">My Skills</h2>
        <div
          data-aos="flip-left"
          className="flex flex-col md:flex-row justify-center gap-10 mt-7"
        >
          <div className="flex flex-col items-center">
            <div className="flex space-x-2">
              <Image
                src="/html-logo.png"
                alt="HTML Logo"
                width={100}
                height={80}
              />
              <Image
                src="/csslogo.jpeg"
                alt="CSS Logo"
                width={100}
                height={80}
              />
            </div>
            <p className="text-[16px] mt-2">HTML5 & CSS3</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex space-x-2">
              <Image
                src="/jslogo.jpeg"
                alt="JavaScript Logo"
                width={100}
                height={80}
              />
              <Image
                src="/reactlogo.jpeg"
                alt="React Logo"
                width={100}
                height={80}
              />
              <Image
                src="/nextlogo.jpeg"
                alt="Next.js Logo"
                width={100}
                height={80}
              />
            </div>
            <p className="text-[16px] mt-2">JavaScript, React, Next.js</p>
          </div>
        </div>
        <p className="text-center mt-7 p-3 font-normal">
          I believe in continuous learning and improvement. Every project I
          undertake teaches me something new, and I&apos;m excited to share
          this journey with you.
        </p>
      </div>
    </section>
  </main>  
  );
}
