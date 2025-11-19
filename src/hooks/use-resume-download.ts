import { useState } from 'react';
import { generateTemplatedResumePDF } from '@/lib/pdfGenerator';
import { resumeData } from '@/lib/resumeData';
import { useToast } from '@/hooks/use-toast';

export const useResumeDownload = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const downloadResume = async () => {
    if (isGenerating) return;

    try {
      setIsGenerating(true);
      
      toast({
        title: "Generating Resume",
        description: "Please wait while we create your PDF resume...",
      });

      await generateTemplatedResumePDF(resumeData);
      
      toast({
        title: "Resume Downloaded!",
        description: "Your resume has been successfully generated and downloaded.",
      });
    } catch (error) {
      console.error('Failed to generate resume:', error);
      
      toast({
        title: "Download Failed",
        description: "There was an error generating your resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    downloadResume,
    isGenerating,
  };
};