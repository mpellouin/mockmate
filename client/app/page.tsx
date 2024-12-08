import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import FlickeringGrid from "@/components/ui/flickering-grid";
import GridPattern from "@/components/ui/grid-pattern";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TextGeneratePanel } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] lg:px-72">
      <main className="flex flex-col gap-8 row-start-2 items-start">  
        <section className="flex gap-4 items-center min-h-[70vh]">
          <div className="flex-1 py-10 relative]">
        <h1 className="text-black text-5xl lg:max-w-[50vw]">
          Get your own personal tech mentor
        </h1>
        <h2 className="text-gray-500 text-2xl mt-6">
          Discover the best way to get training through AI mock interviews.
        </h2> 
        <div className="flex pt-4">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Get started</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
        </div>
        <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,white,transparent,transparent,transparent)] ",
        )}
      />
        <TextGeneratePanel className="flex-1 p-12" wordsArray={["Let's start with a first question, explain the architecture for a payment gateway system with multiple fail-safes.", "Great, now explain how you would implement a caching mechanism for a web application.", "I see, could you tell me how you would debug a memory leak in a production application?", "Can you describe how you would test the resilience of a system under extreme load conditions?"]}></TextGeneratePanel>
        </section>

        <section className="flex flex-col gap-4 items-center mt-[200px] w-full relative min-h-[50vh] justify-center">
          <FlickeringGrid className="z-0 absolute inset-0 [mask-image:radial-gradient(850px_circle_at_center,white,transparent)] left-[-288px] w-[100vw]"
        squareSize={8}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.3}
        flickerChance={0.1}
        height={800}
        width={2080}></FlickeringGrid>
          <div className="flex gap-24">
          <h2 className="text-black text-4xl ">Stop wasting money on mock interviews and start improving.</h2>
          <h3 className="text-gray-600 text-2xl">Choose lifelike technical interviews, gain confidence and be ready for the big day.</h3>
          </div>
          
        </section>

        <section className="flex flex-col gap-4 items-center mt-[200px] justify-center w-full">
          <h2 className="text-black text-5xl ">Want to start your interview preparation?</h2>
          <RainbowButton className="text-2xl rounded-[48px] p-6">Get started for free</RainbowButton>
          
        </section>
      </main>
      <hr className="row-start-3 w-full border-t border-gray-200" />
      <footer className="row-start-4 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500">&copy; 2024 mpellouin. All rights reserved</p>
      </footer>
    </div>
  );
}
