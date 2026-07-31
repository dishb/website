import Card from "@/components/Card";
import gradients from "@/data/gradients";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-50 gap-2">
        <h1>About</h1>
        <h2 className="text-muted">
          Outside of school and work, I like to pursue other side projects and
          hobbies.
        </h2>
      </div>

      <div className="flex gap-15 h-140">
        <Card className="flex flex-col items-center justify-center">
          <div className="max-w-90 flex flex-col">
            <p>
              While I&apos;m not coding, I like to enjoy various other
              activities:
            </p>
            <ul className="ml-8 mt-2 text-muted">
              <li className="list-disc">Playing and watching soccer</li>
              <li className="list-disc">Hanging out with friends</li>
              <li className="list-disc">Listening to music</li>
              <li className="list-disc">Baking (cookies mostly)</li>
              <li className="list-disc">Working out</li>
            </ul>
          </div>
        </Card>

        <Card className={`border-0 ${gradients.teal}`} />
      </div>

      <div className="flex flex-col items-center justify-center py-50">
        <div className="flex flex-col">
          <p className="text-muted">
            I believe that the <span className="text-foreground">design</span>{" "}
            of a project or tool is just as important as the{" "}
            <span className="text-foreground">code</span>.
          </p>
          <p className="text-muted">
            As a result, I like playing around with styles and ideas.
          </p>
        </div>
      </div>

      <Card className="flex flex-col items-center justify-center h-140 gap-10">
        <p className="text-muted">
          If I had to describe myself in 3 words, I&apos;d say...
        </p>
        <div className="flex gap-4">
          <p>Detailed</p>
          <p>Passionate</p>
          <p>Driven</p>
        </div>
      </Card>

      <div className="flex gap-15 h-140">
        <Card className={`border-0 ${gradients.yellow}`} />

        <Card className="flex flex-col items-center justify-center">
          <p className="text-muted max-w-90">
            I&apos;ve been playing soccer for around 10 years now.{" "}
            <span className="text-foreground">
              Commitment, leadership, teamwork, and responsibility
            </span>{" "}
            are values I grew up with.
          </p>
        </Card>
      </div>
    </>
  );
}
