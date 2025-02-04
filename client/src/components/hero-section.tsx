import { cn } from "@/lib/utils";
import {
  ArrowRight,
  FileSearch,
  Globe,
  Hourglass,
  PiggyBank,
  Scale,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    title: "AI-powered Analysis",
    description:
      "Leverage advanced AI to analyze contracts quickly and accurately.",
    icon: FileSearch,
  },
  {
    title: "Risk Identification",
    description: "Spot potential risks and opportunities in your contracts.",
    icon: ShieldCheck,
  },
  {
    title: "Streamlined Negotiation",
    description: "Accelerate the negotiation process with AI-driven insights.",
    icon: Hourglass,
  },
  {
    title: "Cost Reduction",
    description: "Significantly reduce legal costs through automation.",
    icon: PiggyBank,
  },
  {
    title: "Improved Compliance",
    description: "Ensure your contracts meet all regulatory requirements.",
    icon: Scale,
  },
  {
    title: "Faster Turnaround",
    description: "Complete contract reviews in minutes instead of hours.",
    icon: Zap,
  },
];

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32  bg-gradient-to-b  from-[#a1b5d8]/50  via-[#a1b5d8]/50 to-[#b8b8ff]/50">
      <div className="container px-4 md:px-6 flex flex-col items-center max-w-6xl mx-auto">
        <Link
          href={"/dashboard"}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "px-4 py-2 mb-4 rounded-full hidden md:flex"
          )}
        >
          <span className="mr-3 hidden md:block">
            <Sparkles className="size-3.5" />
          </span>
          Introducing Simple Metrics for your team
        </Link>
        <div className="text-center mb-12 w-full">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent  bg-gradient-to-r from-indigo-500 to-[#031926] mb-4">
          AI-Driven Contract Insights for Smarter Decisions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
           Analyze. Evaluate. Optimize Contracts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              className="inline-flex items-center justify-center text-lg"
              size={"lg"}
            >
              Get Started
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button
              className="inline-flex items-center justify-center text-lg"
              size={"lg"}
              variant={"outline"}
            >
              Learn More
              <Globe className="ml-2 size-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
            {features.map((feature) => (
              <Card key={feature.title} className="h-full bg-gradient-to-br from-[#010038] to-[#160F30] text-white transition-transform transform hover:scale-105 hover:bg-blue-800 hover:text-white">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="text-primary text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className=" text-white/70 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
