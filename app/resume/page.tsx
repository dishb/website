import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-50 gap-2">
        <h1>Resume</h1>
        <h2 className="text-muted">
          My professional experience as a student spans various positions at
          many organizations.
        </h2>
      </div>

      <div className="flex flex-col px-20">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3>Experience</h3>
            <hr className="border-light-gray" />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/arttitude.jpeg"
                alt="Arttitude's logo"
                width={40}
                height={40}
                className="aspect-square"
              />
              <div className="flex flex-col">
                <p>Tech Lead Intern</p>
                <p className="text-muted text-sm">Arttitude</p>
              </div>
            </div>
            <p className="text-sm">June 2026 - Aug. 2026</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/arbc.jpeg"
                alt="ARBC's logo"
                width={40}
                height={40}
                className="aspect-square"
              />
              <div className="flex flex-col">
                <p>Web Development Lead</p>
                <p className="text-muted text-sm">
                  American Regional Biology Competition
                </p>
              </div>
            </div>
            <p className="text-sm">Aug. 2025 - present</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/uc_davis.jpeg"
                alt="UC Davis's logo"
                width={40}
                height={40}
                className="aspect-square"
              />
              <div className="flex flex-col">
                <p>Researcher</p>
                <p className="text-muted text-sm">COSMOS, UC Davis</p>
              </div>
            </div>
            <p className="text-sm">July 2025 - Aug. 2025</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/aristo_ai.jpeg"
                alt="Aristo AI's logo"
                width={40}
                height={40}
                className="aspect-square"
              />
              <div className="flex flex-col">
                <p>Quality Assurance Intern</p>
                <p className="text-muted text-sm">Aristo AI</p>
              </div>
            </div>
            <p className="text-sm">April 2025 - May 2025</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/asdrp.jpeg"
                alt="ASDRP's logo"
                width={40}
                height={40}
                className="aspect-square"
              />
              <div className="flex flex-col">
                <p>Researcher, Dennis Liu's Lab</p>
                <p className="text-muted text-sm">
                  Aspiring Scholars Directed Research Program
                </p>
              </div>
            </div>
            <p className="text-sm">Aug. 2024 - July 2025</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-20">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3>Education</h3>
            <hr className="border-light-gray" />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/sbcc.jpeg"
                alt="Santa Barbara City College's logo"
                width={40}
                height={40}
                className="aspect-square"
              />
              <div className="flex flex-col">
                <p>Dual-enrollment student</p>
                <p className="text-muted text-sm">Santa Barbara City College</p>
              </div>
            </div>
            <p className="text-sm">June 2026 - July 2026</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/mpc.jpeg"
                alt="Monterey Peninsula College's logo"
                width={40}
                height={40}
                className="aspect-square"
              />
              <div className="flex flex-col">
                <p>Dual-enrollment student</p>
                <p className="text-muted text-sm">Monterey Peninsula College</p>
              </div>
            </div>
            <p className="text-sm">Jan. 2025 - July 2026</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/avhs.jpeg"
                alt="Amador Valley High School's logo"
                width={40}
                height={40}
                className="aspect-square"
              />
              <div className="flex flex-col">
                <p>Student</p>
                <p className="text-muted text-sm">Amador Valley High School</p>
              </div>
            </div>
            <p className="text-sm">Aug. 2024 - May 2027</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/fhs.jpeg"
                alt="Foothill High School's logo"
                width={40}
                height={40}
                className="aspect-square"
              />
              <div className="flex flex-col">
                <p>Student</p>
                <p className="text-muted text-sm">Foothill High School</p>
              </div>
            </div>
            <p className="text-sm">Aug. 2023 - May 2024</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-20">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3>Volunteering</h3>
            <hr className="border-light-gray" />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/ace_coding.jpeg"
                alt="ACE Coding's logo"
                width={40}
                height={40}
                className="aspect-square"
              />
              <div className="flex flex-col">
                <p>Coding Instructor</p>
                <p className="text-muted text-sm">ACE Coding</p>
              </div>
            </div>
            <p className="text-sm">Aug. 2024 - July 2025</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/engin.jpeg"
                alt="ENGin's logo"
                width={40}
                height={40}
                className="aspect-square"
              />
              <div className="flex flex-col">
                <p>Peer Mentor</p>
                <p className="text-muted text-sm">ENGin</p>
              </div>
            </div>
            <p className="text-sm">Mar. 2024 - July 2025</p>
          </div>
        </div>
      </div>
    </>
  );
}
