// Form validation utilities

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate individual fields
export const validateName = (name: string): string | null => {
  if (!name || name.trim().length < 2) {
    return 'Name must be at least 2 characters long';
  }
  if (name.trim().length > 50) {
    return 'Name must be less than 50 characters';
  }
  return null;
};

export const validateEmail = (email: string): string | null => {
  if (!email) {
    return 'Email is required';
  }
  if (!emailRegex.test(email)) {
    return 'Please provide a valid email address';
  }
  return null;
};

export const validateMessage = (message: string): string | null => {
  if (!message || message.trim().length < 10) {
    return 'Message must be at least 10 characters long';
  }
  if (message.trim().length > 1000) {
    return 'Message must be less than 1000 characters';
  }
  return null;
};

// Validate entire form
export const validateContactForm = (data: ContactFormData): ValidationResult => {
  const errors: string[] = [];
  
  const nameError = validateName(data.name);
  if (nameError) errors.push(nameError);
  
  const emailError = validateEmail(data.email);
  if (emailError) errors.push(emailError);
  
  const messageError = validateMessage(data.message);
  if (messageError) errors.push(messageError);
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// API response types
export interface ContactApiResponse {
  message?: string;
  error?: string;
  details?: string[];
}

// Contact form submission function
export const submitContactForm = async (data: ContactFormData): Promise<ContactApiResponse> => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  const result = await response.json();
  
  if (!response.ok) {
    throw new Error(result.error || 'Failed to send message');
  }
  
  return result;
};