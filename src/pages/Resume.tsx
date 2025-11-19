import { ArrowLeft, Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resumeData } from "@/lib/resumeData";

const ResumePage = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Print/Action Bar - Hidden in print */}
      <div className="no-print sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>

          <div className="flex items-center gap-2">
            <Button onClick={handlePrint} className="flex items-center gap-2">
              <Printer className="h-4 w-4" />
              Print / Save as PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="resume-container max-w-4xl mx-auto p-8 bg-white text-black">
        {/* Header */}
        <header className="text-center mb-8 pb-6 border-b-2 border-gray-300">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {resumeData.personalInfo.name}
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            {resumeData.personalInfo.title}
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
            <span>📧 {resumeData.personalInfo.email}</span>
            <span>📱 {resumeData.personalInfo.phone}</span>
            <span>📍 {resumeData.personalInfo.location}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700 mt-2">
            <span>🔗 {resumeData.personalInfo.github}</span>
            <span>💼 {resumeData.personalInfo.linkedin}</span>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumeData.skills.map((skillCategory, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {skillCategory.category}
                </h3>
                <p className="text-gray-700">
                  {skillCategory.skills.join(" • ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
            Professional Experience
          </h2>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-gray-700 font-medium">
                    {exp.company} | {exp.location}
                  </p>
                </div>
                <span className="text-gray-600 font-medium">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Achievements */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
            Achievements & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumeData.achievements.map((achievement, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {achievement.title}
                </h3>
                <p className="text-gray-700">
                  {achievement.description} - {achievement.highlight}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
            Education
          </h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {edu.degree}
              </h3>
              <p className="text-gray-700">
                {edu.institution} | {edu.period}
                {edu.cgpa && ` | CGPA: ${edu.cgpa}`}
              </p>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 mt-12 pt-6 border-t border-gray-300">
          <p>Generated on {new Date().toLocaleDateString()}</p>
        </footer>
      </div>
    </div>
  );
};

export default ResumePage;
