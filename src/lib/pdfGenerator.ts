import jsPDF from 'jspdf';
import { ResumeData } from './resumeData';

export const generateResumePDF = (resumeData: ResumeData): Promise<void> => {
  return new Promise((resolve) => {
    // Create new PDF document
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 15;
    const contentWidth = pageWidth - (margin * 2);
    
    let yPosition = margin;
    const lineHeight = 6;
    const sectionSpacing = 8;

    // Helper functions
    const addText = (text: string, fontSize: number = 10, isBold: boolean = false, color: string = '#000000') => {
      pdf.setFontSize(fontSize);
      pdf.setFont('helvetica', isBold ? 'bold' : 'normal');
      pdf.setTextColor(color);
      
      const lines = pdf.splitTextToSize(text, contentWidth);
      pdf.text(lines, margin, yPosition);
      yPosition += lines.length * lineHeight;
    };

    const addSectionTitle = (title: string) => {
      yPosition += sectionSpacing;
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor('#2D7E32'); // Terminal green color
      pdf.text(title, margin, yPosition);
      yPosition += lineHeight;
      
      // Add underline
      pdf.setDrawColor('#2D7E32');
      pdf.setLineWidth(0.5);
      pdf.line(margin, yPosition, margin + 50, yPosition);
      yPosition += 4;
    };

    const checkPageBreak = (requiredSpace: number = 20) => {
      if (yPosition + requiredSpace > pageHeight - margin) {
        pdf.addPage();
        yPosition = margin;
      }
    };

    try {
      // Header - Name and Title
      pdf.setFontSize(22);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor('#1a1a1a');
      pdf.text(resumeData.personalInfo.name, margin, yPosition);
      yPosition += 8;

      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor('#2D7E32');
      pdf.text(resumeData.personalInfo.title, margin, yPosition);
      yPosition += 8;

      // Contact Information
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor('#666666');
      const contactInfo = [
        `Email: ${resumeData.personalInfo.email}`,
        `Phone: ${resumeData.personalInfo.phone}`,
        `Location: ${resumeData.personalInfo.location}`,
        `GitHub: ${resumeData.personalInfo.github}`,
        `LinkedIn: ${resumeData.personalInfo.linkedin}`
      ];
      
      contactInfo.forEach(info => {
        pdf.text(info, margin, yPosition);
        yPosition += lineHeight;
      });

      // Summary Section
      addSectionTitle('PROFESSIONAL SUMMARY');
      addText(resumeData.summary, 10, false, '#333333');

      // Skills Section
      checkPageBreak();
      addSectionTitle('TECHNICAL SKILLS');
      
      resumeData.skills.forEach(skillCategory => {
        checkPageBreak(15);
        addText(skillCategory.category, 11, true, '#2D7E32');
        const skillsText = skillCategory.skills.join(' • ');
        addText(skillsText, 10, false, '#333333');
        yPosition += 2;
      });

      // Experience Section
      checkPageBreak();
      addSectionTitle('PROFESSIONAL EXPERIENCE');
      
      resumeData.experience.forEach(exp => {
        checkPageBreak(25);
        
        // Role and Company
        addText(exp.role, 12, true, '#1a1a1a');
        addText(`${exp.company} | ${exp.location} | ${exp.period}`, 10, false, '#2D7E32');
        yPosition += 2;
        
        // Description points
        exp.description.forEach(desc => {
          const bulletPoint = `• ${desc}`;
          addText(bulletPoint, 10, false, '#333333');
        });
        yPosition += 4;
      });

      // Projects Section
      if (resumeData.projects && resumeData.projects.length > 0) {
        checkPageBreak();
        addSectionTitle('KEY PROJECTS');
        
        resumeData.projects.forEach(project => {
          checkPageBreak(20);
          addText(project.name, 12, true, '#1a1a1a');
          addText(project.description, 10, false, '#333333');
          addText(`Technologies: ${project.technologies.join(', ')}`, 9, false, '#2D7E32');
          if (project.github || project.demo) {
            const links = [];
            if (project.github) links.push(`GitHub: ${project.github}`);
            if (project.demo) links.push(`Demo: ${project.demo}`);
            addText(links.join(' | '), 9, false, '#666666');
          }
          yPosition += 4;
        });
      }

      // Achievements Section
      checkPageBreak();
      addSectionTitle('ACHIEVEMENTS & RECOGNITION');
      
      resumeData.achievements.forEach(achievement => {
        checkPageBreak(12);
        addText(achievement.title, 11, true, '#2D7E32');
        addText(`${achievement.description} - ${achievement.highlight}`, 10, false, '#333333');
        yPosition += 2;
      });

      // Education Section
      checkPageBreak();
      addSectionTitle('EDUCATION');
      
      resumeData.education.forEach(edu => {
        checkPageBreak(12);
        addText(edu.degree, 11, true, '#1a1a1a');
        const eduDetails = edu.cgpa ? 
          `${edu.institution} | ${edu.period} | CGPA: ${edu.cgpa}` :
          `${edu.institution} | ${edu.period}`;
        addText(eduDetails, 10, false, '#333333');
        yPosition += 2;
      });

      // Footer
      const currentDate = new Date().toLocaleDateString();
      pdf.setFontSize(8);
      pdf.setTextColor('#999999');
      pdf.text(`Generated on ${currentDate}`, margin, pageHeight - 10);

      // Save the PDF
      const fileName = `${resumeData.personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`;
      pdf.save(fileName);
      
      resolve();
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Fallback: still generate a basic PDF
      pdf.text('Error generating detailed resume. Please try again.', margin, margin);
      pdf.save('Resume.pdf');
      resolve();
    }
  });
};

// Alternative method using a pre-designed template
export const generateTemplatedResumePDF = (resumeData: ResumeData): Promise<void> => {
  return new Promise((resolve) => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 20;
    
    let yPos = 30;

    try {
      // Modern Header with colored background
      pdf.setFillColor(45, 126, 50); // Terminal green
      pdf.rect(0, 0, pageWidth, 25, 'F');
      
      // Name in white on green background
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'bold');
      pdf.text(resumeData.personalInfo.name, margin, 15);
      
      // Title
      pdf.setFontSize(12);
      pdf.text(resumeData.personalInfo.title, margin, 21);
      
      // Reset text color for body
      pdf.setTextColor(0, 0, 0);
      yPos = 35;
      
      // Contact section in two columns
      pdf.setFontSize(9);
      pdf.text(`📧 ${resumeData.personalInfo.email}`, margin, yPos);
      pdf.text(`📱 ${resumeData.personalInfo.phone}`, pageWidth/2, yPos);
      yPos += 5;
      pdf.text(`📍 ${resumeData.personalInfo.location}`, margin, yPos);
      pdf.text(`🔗 GitHub`, pageWidth/2, yPos);
      yPos += 10;
      
      // Summary
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(45, 126, 50);
      pdf.text('SUMMARY', margin, yPos);
      yPos += 6;
      
      pdf.setFontSize(10);
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'normal');
      const summaryLines = pdf.splitTextToSize(resumeData.summary, pageWidth - 2 * margin);
      pdf.text(summaryLines, margin, yPos);
      yPos += summaryLines.length * 4 + 8;
      
      // Skills in a compact format
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(45, 126, 50);
      pdf.text('TECHNICAL SKILLS', margin, yPos);
      yPos += 6;
      
      pdf.setFontSize(9);
      pdf.setTextColor(0, 0, 0);
      pdf.setFont('helvetica', 'normal');
      
      resumeData.skills.forEach(category => {
        const skillText = `${category.category}: ${category.skills.join(', ')}`;
        const skillLines = pdf.splitTextToSize(skillText, pageWidth - 2 * margin);
        pdf.text(skillLines, margin, yPos);
        yPos += skillLines.length * 4 + 2;
      });
      
      yPos += 5;
      
      // Experience
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(45, 126, 50);
      pdf.text('EXPERIENCE', margin, yPos);
      yPos += 6;
      
      resumeData.experience.forEach(exp => {
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(0, 0, 0);
        pdf.text(exp.role, margin, yPos);
        yPos += 5;
        
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(45, 126, 50);
        pdf.text(`${exp.company} | ${exp.location} | ${exp.period}`, margin, yPos);
        yPos += 5;
        
        pdf.setTextColor(0, 0, 0);
        exp.description.forEach(desc => {
          const bulletText = `• ${desc}`;
          const lines = pdf.splitTextToSize(bulletText, pageWidth - 2 * margin - 5);
          pdf.text(lines, margin + 3, yPos);
          yPos += lines.length * 4;
        });
        yPos += 3;
      });
      
      // Save
      const fileName = `${resumeData.personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`;
      pdf.save(fileName);
      resolve();
    } catch (error) {
      console.error('Error generating templated PDF:', error);
      resolve();
    }
  });
};