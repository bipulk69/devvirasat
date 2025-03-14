// src/services/emailService.ts

import emailjs from '@emailjs/browser';

// Initialize EmailJS with your user ID (this is usually done in your main.tsx or App.tsx)
export const initEmailJS = () => {
  // Replace this with your actual EmailJS user ID
  emailjs.init("YOUR_USER_ID_HERE");
};

// Function to send subscription notification to you
export const sendSubscriptionNotification = async (email: string) => {
  try {
    const result = await emailjs.send(
      "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
      "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID for admin notification
      {
        subscriber_email: email,
        subscription_date: new Date().toLocaleString(),
      }
    );
    return result;
  } catch (error) {
    console.error("Failed to send notification:", error);
    throw error;
  }
};

// Function to send confirmation email to subscriber
export const sendSubscriptionConfirmation = async (email: string) => {
  try {
    const result = await emailjs.send(
      "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
      "YOUR_CONFIRMATION_TEMPLATE_ID", // Replace with your EmailJS template ID for confirmation emails
      {
        to_email: email,
        subscription_date: new Date().toLocaleString(),
      }
    );
    return result;
  } catch (error) {
    console.error("Failed to send confirmation:", error);
    throw error;
  }
};