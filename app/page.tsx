import Link from "next/link"


import HeroText from "@/components/landing-page/section-hero/hero-text"
import Footer from "@/components/landing-page/footer"


export default function IndexPage() {
  return (
    
    <div className="flex flex-col min-h-screen">

      <section className="container grid items-center flex-grow gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <HeroText />
 
          
          
        </div>
      </section>
      <Footer />
    </div>
  )
}

