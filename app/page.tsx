import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { readUserSession } from "@/utils/actions";
import Features from "@/components/features"
import { redirect } from "next/navigation";
import AnimatedInfographic from "@/components/animated-infographic";
import CTA from "@/components/cta";
import WhyOnyxWrapper from "@/components/whyonyxwrapper";

export default async function IndexPage() {
  const { data: userSession } = await readUserSession();

        if (userSession.session) {
                return redirect("/dashboard");
        }
  return (

<section className="relative h-screen max-w-dvw w-full overflow-hidden">
<div className="container max-w-dvw w-full h-screen">
  <video autoplay muted loop
    className="absolute top-0 left-0 w-full h-full object-cover">
    <source src="https://quantumone.b-cdn.net/onyx/onyxsui.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
  <div className="relative z-10 flex items-center justify-center h-full">
    <div className="text-center text-white px-4">
     <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter md:text-4xl mb-8">
          Onyx SaaS PWA Template
        </h1>
<p className="max-w-2xl text-lg text-center text-muted-foreground mb-10 sm:text-xl">
         Secure, scalable, user authentication + RBAC, validated CRUD ops, Rust API runtime, TanStack, and more. 
        </p>
   
      <Link
        href={siteConfig.links.contact}
        target="_blank"
        rel="noreferrer"
        className={buttonVariants()}
        >
     
        Get Started
      </Link>
    </div>
  </div>
</div>

      
<div className="flex max-w-7xl flex-col px-4 md:px-6 lg:px-8 items-center text-center gap-2">
        
        
 

      <div className="flex gap-6 mb-10">
        <Link
          href={siteConfig.links.login}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Login
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.signup}
          className={buttonVariants({ variant: "outline" })}
        >
          Sign Up
        </Link>
      </div>
      </div>
      <AnimatedInfographic />
      <WhyOnyxWrapper/>
   <Features/>
   <CTA/>
</section>

    
  )
}
