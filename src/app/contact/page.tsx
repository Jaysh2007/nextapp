"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React, {FormEvent , useState} from "react";

function MusicSchoolContactUs() {
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const userData: { email: string; message: string; }[] = [];

const handleSubmit= (event:FormEvent<HTMLFormElement>) =>{
  event.preventDefault();
  userData.push({email,message});
  console.log(userData)
}

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-5xl text-center font-sans font-bold mb-8 text-white">
          Contact us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help you with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in you musical journey.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input 
          type="email" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Enter your Email address"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
          required/>
          <textarea
           value={message}
           onChange={(e)=>setMessage(e.target.value)}
           placeholder="Enter your Message"
           rows={5}
           required
           className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700">
           </textarea>
           <button
           type="submit"
           className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
            Send Message
           </button>
        </form>
      </div>
    </div>
  );
}

export default MusicSchoolContactUs;
