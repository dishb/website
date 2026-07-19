import gradients from "@/data/gradients";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <>
      <div className="flex gap-15 h-140">
        <Card className={`border-0 ${gradients.pink}`} />

        <Card className="flex flex-col items-center justify-center">
          <p className="text-muted max-w-75">
            Hi, I&apos;m Dishant, a high school{" "}
            <span className="text-foreground">student</span> and{" "}
            <span className="text-foreground">developer</span> based in
            California.
          </p>
        </Card>
      </div>

      <Card className={`border-0 ${gradients.blue} h-140`}>
        <Button className="absolute bottom-10 left-10" href="/about">
          About me
          <ArrowRight className="size-5" />
        </Button>
      </Card>

      <div className="flex gap-15 h-140">
        <Card className="flex flex-col items-center justify-center">
          <p className="text-muted max-w-75">
            I have a passion for{" "}
            <span className="text-foreground">building</span> things with
            careful attention to the small{" "}
            <span className="text-foreground">details</span>.
          </p>
        </Card>

        <Card
          className={`border-0 ${gradients.green} flex flex-col items-center justify-center`}
        >
          <Button className="absolute bottom-10 right-10" href="/about">
            Check out my work
            <ArrowRight className="size-5" />
          </Button>
        </Card>
      </div>

      <div className="flex gap-15">
        <Card className="flex flex-col items-center justify-center gap-2 aspect-square">
          <p>Education</p>
          <p className="text-muted max-w-60">
            Senior at Amador Valley High School in Pleasanton, CA
          </p>
        </Card>

        <Card className="flex flex-col items-center justify-center gap-2 aspect-square">
          <p>Current</p>
          <p className="text-muted max-w-60">Tech Lead Intern at Arttitude</p>
        </Card>

        <Card className="flex flex-col items-center justify-center gap-2 aspect-square">
          <p>Interested?</p>
          <p className="text-muted max-w-60">Tech Lead Intern at Arttitude</p>
        </Card>
      </div>
    </>
  );
}
