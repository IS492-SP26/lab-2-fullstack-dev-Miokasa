import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-commerce Store",
    description:
      "A fully responsive online store with cart functionality, payment integration, and inventory management.",
    image: "/images/project-ecommerce.jpg",
    tags: ["React", "Next.js", "Stripe"],
  },
  {
    title: "Restaurant Website",
    description:
      "An elegant website for a fine dining restaurant featuring online reservations and menu showcase.",
    image: "/images/project-restaurant.jpg",
    tags: ["WordPress", "PHP", "CSS"],
  },
  {
    title: "Portfolio Blog",
    description:
      "A minimalist blog platform with CMS integration, SEO optimization, and responsive design.",
    image: "/images/project-blog.jpg",
    tags: ["Next.js", "MDX", "Tailwind"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          My Projects
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          A selection of recent work I{"'"}ve completed for clients across various
          industries.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="group/btn p-0 h-auto font-medium text-primary hover:text-primary/80">
                  View Project
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
