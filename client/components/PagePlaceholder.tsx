import { Rocket } from "lucide-react";

export default function PagePlaceholder({ title }: { title: string }) {
  return (
    <div className="section-padding mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center text-center">
      <div className="glass-panel flex flex-col items-center gap-4 p-10">
        <Rocket className="text-primary" size={40} />
        <h1 className="font-heading text-3xl font-bold text-foreground">
          {title}
        </h1>
        <p className="text-muted-foreground">
          This page is on its way. Keep prompting to add content here.
        </p>
      </div>
    </div>
  );
}
