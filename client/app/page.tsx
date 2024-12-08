import GridPattern from "@/components/ui/grid-pattern";
import ShinyButton from "@/components/ui/shiny-button";
import { TextGeneratePanel } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-start">  
        <section className="flex gap-4 items-center min-h-[70vh]">
          <div className="flex-1 p-10 relative]">
        <h1 className="text-black text-5xl lg:max-w-[50vw]">
          Get your own personal tech mentor
        </h1>
        <h2 className="text-gray-500 text-2xl mt-6">
          Discover the best way to get training through AI mock interviews.
        </h2>
        <ShinyButton className="mt-8 bg-white rounded-3xl">Get started</ShinyButton>
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

        <section className="flex flex-col gap-4 items-center mt-[200px]">
    
          
        </section>
      </main>
      <hr className="row-start-3 w-full border-t border-gray-200" />
      <footer className="row-start-4 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500">&copy; 2024 mpellouin. All rights reserved</p>
      </footer>
    </div>
  );
}
