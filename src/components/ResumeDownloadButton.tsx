import { Download, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const RESUME_URL =
  "https://docs.google.com/document/d/1yuSmAtQsdKW03i3hxYJnh4dxrcE4ARSta5ROHWNOA5M/edit?usp=sharing";

interface ResumeDownloadButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

export const ResumeDownloadButton = ({
  variant = "default",
  size = "default",
  className,
  showIcon = true,
  children,
}: ResumeDownloadButtonProps) => {
  const handleViewResume = () => {
    window.open(RESUME_URL, "_blank");
  };

  return (
    <Button
      onClick={handleViewResume}
      variant={variant}
      size={size}
      className={cn(
        "font-medium transition-all duration-300",
        "hover:shadow-lg hover:shadow-primary/20",
        className
      )}
    >
      {showIcon && <FileText className="mr-2 h-4 w-4" />}
      {children || "View Resume"}
      <ExternalLink className="ml-2 h-3 w-3" />
    </Button>
  );
};

// Alternative compact version for Hero section
export const ResumeDownloadIconButton = ({
  className,
}: {
  className?: string;
}) => {
  const handleViewResume = () => {
    window.open(RESUME_URL, "_blank");
  };

  return (
    <button
      onClick={handleViewResume}
      className={cn(
        "p-3 rounded-lg bg-card border border-border hover:border-primary transition-all hover-lift",
        className
      )}
      aria-label="View Resume"
      title="View Resume on Google Docs"
    >
      <FileText className="h-5 w-5" />
    </button>
  );
};
