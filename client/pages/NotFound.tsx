import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Rocket } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="section-padding mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center text-center">
      <div className="glass-panel flex flex-col items-center gap-4 p-10">
        <Rocket className="text-primary" size={40} />
        <h1 className="font-heading text-5xl font-extrabold text-foreground">
          404
        </h1>
        <p className="text-muted-foreground">
          Looks like this page has drifted off into space.
        </p>
        <Link
          to="/"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-glow-lg"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
