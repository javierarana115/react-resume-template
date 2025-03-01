// pages/api/send-email.ts
import sgMail from '@sendgrid/mail';
import type {NextApiRequest, NextApiResponse} from 'next';

type ResponseData = {
  success?: boolean;
  error?: string;
  details?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({error: 'Method not allowed'});
  }

  const {name, email, message} = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({error: 'Missing required fields'});
  }

  // Debug environment variables
  console.log('API Key exists:', !!process.env.SENDGRID_API_KEY);
  console.log('Contact email:', process.env.CONTACT_FORM_EMAIL);
  console.log('Verified sender:', process.env.VERIFIED_SENDER_EMAIL);

  // Set API key inside the handler function
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');
  
  // Check if required environment variables are set
  if (!process.env.SENDGRID_API_KEY || 
      !process.env.CONTACT_FORM_EMAIL || 
      !process.env.VERIFIED_SENDER_EMAIL) {
    console.error('Missing required environment variables');
    return res.status(500).json({error: 'Server configuration error'});
  }
  
  const msg = {
    to: process.env.CONTACT_FORM_EMAIL,
    from: process.env.VERIFIED_SENDER_EMAIL,
    subject: `New contact form submission from ${name}`,
    replyTo: email,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<strong>Name:</strong> ${name}<br>
           <strong>Email:</strong> ${email}<br>
           <strong>Message:</strong> ${message}`,
  };
  
  try {
    console.log('Attempting to send email with config:', {
      to: msg.to,
      from: msg.from,
      subject: msg.subject
    });
    
    await sgMail.send(msg);
    console.log('Email sent successfully');
    return res.status(200).json({success: true});
  } catch (error: unknown) {
    console.error('SendGrid error:', error);
    
    // Type narrowing for the error object
    if (error && typeof error === 'object' && 'response' in error) {
      console.error('Error body:', (error.response as {body?: unknown}).body);
    }
    
    return res.status(500).json({
      error: 'Error sending email',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
