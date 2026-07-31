import ResumeItem from "@/components/ResumeItem";
import resumeItems from "@/data/resumeItems";

const sections = [
  { title: "Experience", items: resumeItems.experience },
  { title: "Education", items: resumeItems.education },
  { title: "Volunteering", items: resumeItems.volunteering },
] as const;

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-50 gap-2">
        <h1>Resume</h1>
        <h2 className="text-muted">
          A more detailed PDF resume is available upon request, through email.
        </h2>
      </div>

      {sections.map((section) => (
        <div key={section.title} className="flex flex-col px-20">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3>{section.title}</h3>
              <hr className="border-light-gray" />
            </div>

            {section.items.map((item, index) => (
              <ResumeItem key={index} {...item} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
