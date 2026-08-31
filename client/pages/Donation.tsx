import { Link } from "react-router-dom";
import { HeartHandshake, Wrench, ShieldCheck, Rocket, Landmark } from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function DonationDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-lg sm:w-auto sm:px-8">
          <Rocket size={18} />
          Donate Now
        </button>
      </DialogTrigger>
      <DialogContent className="w-[calc(100%-2rem)] border-primary/25 bg-[#06111d]/95 p-5 text-center backdrop-blur-xl sm:max-w-md sm:p-6">
        <DialogHeader className="items-center text-center">
          <DialogTitle className="font-heading text-2xl text-foreground">Financial Donation</DialogTitle>
          <DialogDescription className="max-w-xs text-center">Scan the BharatQR code below to donate securely via UPI, RuPay, Visa, or Mastercard.</DialogDescription>
        </DialogHeader>
        <img src="/images/qr-financial-official.jpeg" alt="Space e Schoylar official BharatQR donation code" className="mx-auto w-56 rounded-xl bg-white p-3 shadow-glow" />

        <div className="mt-4 rounded-xl border border-primary/20 bg-white/5 p-4 text-left">
          <div className="mb-3 flex items-center justify-center gap-2 text-primary">
            <Landmark size={16} />
            <p className="text-xs font-bold uppercase tracking-widest">Bank Details</p>
          </div>
          <dl className="space-y-1.5 text-sm text-muted-foreground">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
              <dt className="text-foreground/70">Account Name</dt>
              <dd className="font-medium text-foreground">Space E Schoylar</dd>
            </div>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
              <dt className="text-foreground/70">Account Number</dt>
              <dd className="font-medium text-foreground">923020009954933</dd>
            </div>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
              <dt className="text-foreground/70">IFSC Code</dt>
              <dd className="font-medium text-foreground">UTIB0000129</dd>
            </div>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
              <dt className="text-foreground/70">Bank Name</dt>
              <dd className="font-medium text-foreground">Axis Bank</dd>
            </div>
            {/* <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
              <dt className="text-foreground/70">Branch</dt>
              <dd className="font-medium text-foreground">Sample City Branch</dd>
            </div> */}
          </dl>
          {/* <p className="mt-3 text-center text-[11px] text-muted-foreground/70">
            Bank account details above are placeholders — replace with your real account, IFSC, and branch before launch.
          </p> */}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Donation() {
  return (
    <div>
      <section className="section-padding mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Join the cause
          </span>
          <h1 className="mt-3 font-heading text-4xl font-extrabold text-foreground sm:text-5xl">
            How You Can Make a{" "}
            <span className="cosmic-text">Difference?</span>
          </h1>
        </Reveal>

        <Reveal delay={100}>
          <div className="glass-panel mt-10 space-y-5 p-5 text-left text-muted-foreground sm:p-8">
            <p className="leading-relaxed">
              You're invited to join us on this thrilling journey! Your
              generous support, whether through financial donations or
              equipment, directly enhances our capacity to offer educational
              opportunities to students who may otherwise lack access to such
              resources. Together, let's empower young minds to dream big and
              aim for the stars.
            </p>
            <p className="leading-relaxed">
              Every contribution, regardless of size, has a meaningful
              impact. Join us in something extraordinary—inspiring,
              educating, and shaping the future of many.
            </p>
            <p className="leading-relaxed">
              Are you prepared to embark on this cosmic journey together?
              Click the donation button and become a catalyst for change
              today.
            </p>
            <p className="leading-relaxed">
              Your generous support helps us grow our programs and inspire
              countless more students, unlocking their potential through
              education and exploration.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section-padding mx-auto max-w-5xl">
        <div className="grid gap-8 sm:grid-cols-2">
          <Reveal delay={150}>
            <div className="glass-card flex h-full flex-col items-center gap-5 p-6 text-center sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <HeartHandshake size={32} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Financial Donation
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Fuel scholarships, lab equipment, and workshops that bring
                space education directly to underprivileged children.
              </p>
              <div className="mt-auto pt-2">
                <DonationDialog />
              </div>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="glass-card flex h-full flex-col items-center gap-5 p-6 text-center sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Wrench size={32} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Equipment Donation
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Enable impactful hands-on learning by providing vital tools
                and resources for our immersive workshops.
              </p>
              <div className="mt-auto pt-2">
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/40 bg-white/5 px-5 py-3.5 font-bold text-foreground backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-primary/10 sm:w-auto sm:px-8"
                >
                  <Wrench size={18} />
                  Donate Equipment
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={280}>
          <div className="glass-panel mt-8 flex flex-col items-center gap-3 p-6 text-center">
            <ShieldCheck className="text-primary" size={28} />
            <p className="font-semibold text-foreground">
              Get tax benefits with 80G
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}