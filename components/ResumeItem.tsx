import Image from "next/image";

export interface ResumeItemProps {
  imageSrc: string;
  title: string;
  company: string;
  date: string;
}

export default function ResumeItem({
  imageSrc,
  title,
  company,
  date,
}: ResumeItemProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image
          src={imageSrc}
          alt={`${company}'s logo`}
          width={40}
          height={40}
          className="aspect-square"
        />
        <div className="flex flex-col">
          <p className="text-sm">{company}</p>
          <p className="text-muted text-sm">{title}</p>
        </div>
      </div>
      <p className="text-sm">{date}</p>
    </div>
  );
}
