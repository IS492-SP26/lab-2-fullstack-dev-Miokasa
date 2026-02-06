import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-primary font-medium">Hello, I{"'"}m</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Sarah Johnson
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              Web Developer & Designer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I create beautiful, functional websites that help businesses grow.
              Passionate about clean code and intuitive user experiences.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 bg-transparent"
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Sarah Johnson - Web Developer and Designer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
