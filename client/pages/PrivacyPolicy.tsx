import Reveal from "@/components/Reveal";
import { ShieldCheck } from "lucide-react";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: [
      {
        heading: "Personal Information",
        text: "We may collect personal information such as name, email address, mailing address, phone number, and any other information voluntarily provided by users when they interact with our website or register for our programs.",
      },
      {
        heading: "Usage Data",
        text: "We may collect non-personal information about users' interactions with our website, including but not limited to IP addresses, browser type, device identifiers, pages visited, and the duration of visits.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      {
        heading: "Personalization",
        text: "We may use the information collected to personalize user experiences, tailor content, and provide relevant educational resources and program recommendations.",
      },
      {
        heading: "Communication",
        text: "We may use email addresses and other contact information provided to communicate with users about their inquiries, registrations, updates, and promotional offers related to SES activities and events.",
      },
      {
        heading: "Analytics",
        text: "We may use usage data to analyze trends, monitor website performance, and improve our services and user experience.",
      },
    ],
  },
  {
    title: "Information Sharing and Disclosure",
    body: [
      {
        heading: "Third-Party Service Providers",
        text: "We may engage third-party service providers to assist us in delivering our services, such as website hosting, analytics, and communication tools. These providers are obligated to maintain the confidentiality of your information and are prohibited from using it for any other purpose.",
      },
      {
        heading: "Legal Compliance",
        text: "We may disclose personal information when required by law or in response to lawful requests from government authorities, courts, or law enforcement agencies.",
      },
    ],
  },
  {
    title: "Data Security",
    body: [
      {
        text: "We implement industry-standard security measures to protect the confidentiality, integrity, and availability of user information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
      },
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      {
        text: "SES is committed to protecting the privacy of children. We do not knowingly collect personal information from children under the age of 13 without parental consent. If you believe we have inadvertently collected personal information from a child under 13, please contact us immediately, and we will take steps to remove such information from our records.",
      },
    ],
  },
  {
    title: "Updates to this Privacy Policy",
    body: [
      {
        text: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage users to review this policy periodically for any updates.",
      },
    ],
  },
  {
    title: "Contact Us",
    body: [
      {
        text: "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at connect@spaceeschoylar.ngo.",
      },
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="section-padding mx-auto max-w-4xl">
      <Reveal className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <ShieldCheck size={28} />
        </div>
        <h1 className="mt-5 font-heading text-4xl font-extrabold text-foreground sm:text-5xl">
          Privacy <span className="cosmic-text">Policy</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          At Space E Schoylar (SES), we are committed to protecting the
          privacy and security of our users' personal information. This
          Privacy Policy outlines how we collect, use, disclose, and
          safeguard the information you provide to us through our website
          and related services.
        </p>
      </Reveal>

      <div className="mt-14 space-y-6">
        {SECTIONS.map((section, i) => (
          <Reveal key={section.title} delay={i * 80}>
            <div className="glass-panel p-8 text-left sm:p-10">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.body.map((item, idx) => (
                  <div key={idx}>
                    {item.heading && (
                      <h3 className="font-bold text-foreground">
                        {item.heading}
                      </h3>
                    )}
                    <p className="mt-1 leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={SECTIONS.length * 80}>
        <p className="mt-10 text-center text-sm leading-relaxed text-muted-foreground">
          By using our website and services, you consent to the collection,
          use, and disclosure of your information as described in this
          Privacy Policy.
        </p>
      </Reveal>
    </div>
  );
}