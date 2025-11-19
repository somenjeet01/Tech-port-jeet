import { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  validateContactForm,
  submitContactForm,
  type ContactFormData,
  type ContactApiResponse,
} from "@/lib/validation";

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

interface ContactModalProps {
  trigger?: React.ReactNode;
  triggerClassName?: string;
}

export const ContactModal = ({
  trigger,
  triggerClassName,
}: ContactModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear field error when user starts typing
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: "" }));
    }

    // Clear form-level error
    if (formState.error) {
      setFormState((prev) => ({ ...prev, error: null }));
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setFormState({ isSubmitting: false, isSuccess: false, error: null });
    setFieldErrors({});
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset form when modal closes
      setTimeout(resetForm, 300); // Delay to allow modal close animation
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset states
    setFormState({ isSubmitting: true, isSuccess: false, error: null });
    setFieldErrors({});

    // Validate form
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        error: "Please fix the errors below",
      });

      // Set field-specific errors
      const errors: Record<string, string> = {};
      validation.errors.forEach((error) => {
        if (error.includes("Name")) errors.name = error;
        if (error.includes("Email") || error.includes("email"))
          errors.email = error;
        if (error.includes("Message")) errors.message = error;
      });
      setFieldErrors(errors);
      return;
    }

    try {
      await submitContactForm(formData);

      setFormState({
        isSubmitting: false,
        isSuccess: true,
        error: null,
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });

      // Close modal after 2 seconds
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        error:
          error instanceof Error ? error.message : "Failed to send message",
      });
    }
  };

  const defaultTrigger = (
    <Button
      variant="outline"
      className={`border-border hover:border-primary hover:bg-transparent ${
        triggerClassName || ""
      }`}
    >
      <Mail className="h-4 w-4 mr-2" />
      Contact Me
    </Button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger || defaultTrigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            Get In Touch
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <p className="text-sm text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or
            opportunities. Feel free to reach out!
          </p>

          {formState.isSuccess && (
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                Message sent successfully! I'll get back to you soon.
              </AlertDescription>
            </Alert>
          )}

          {formState.error && (
            <Alert className="border-red-200 bg-red-50">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800">
                {formState.error}
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="modal-name">Name</Label>
                <Input
                  id="modal-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Your name"
                  className={fieldErrors.name ? "border-red-500" : ""}
                  disabled={formState.isSubmitting}
                />
                {fieldErrors.name && (
                  <p className="text-xs text-red-600 mt-1">
                    {fieldErrors.name}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="modal-email">Email</Label>
                <Input
                  id="modal-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your@email.com"
                  className={fieldErrors.email ? "border-red-500" : ""}
                  disabled={formState.isSubmitting}
                />
                {fieldErrors.email && (
                  <p className="text-xs text-red-600 mt-1">
                    {fieldErrors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="modal-message">Message</Label>
              <Textarea
                id="modal-message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Tell me about your project or idea..."
                rows={4}
                className={fieldErrors.message ? "border-red-500" : ""}
                disabled={formState.isSubmitting}
              />
              {fieldErrors.message && (
                <p className="text-xs text-red-600 mt-1">
                  {fieldErrors.message}
                </p>
              )}
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                disabled={formState.isSubmitting}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={formState.isSubmitting}
                className="flex-1"
              >
                {formState.isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
