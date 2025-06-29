Prepwise – AI-Powered Job Interview Platform
Prepwise is a voice-driven job interview preparation platform that simulates realistic interview sessions using AI voice agents. It provides instant feedback and conversation transcripts, helping users prepare effectively for real-world interviews. This full-stack project integrates voice AI, Firebase, and modern UI libraries to deliver a clean, interactive experience.

🔗 Live Demo: https://ai-voice-agent-henna.vercel.app/sign-in

Features
User authentication with Firebase (Email & Password)

Voice-based interview sessions powered by Vapi AI

AI-generated questions using Google Gemini

Instant AI feedback and transcript generation

Personalized interview dashboard

Clean and responsive UI with reusable components

Tech Stack
Next.js – React-based full-stack framework

Firebase – Authentication and Firestore database

Tailwind CSS – Utility-first CSS framework

Vapi AI – Voice assistant integration

Google Gemini – For question and feedback generation

shadcn/ui – UI components library

Zod – Schema validation for secure data handling

Getting Started
1. Clone the Repository
git clone https://github.com/Ayush7066/AI-voice_agent.git
cd AI-voice_agent

2. Install Dependencies
npm install

3. Configure Environment Variables
Create a .env.local file in the root directory and add the following:
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
Be sure to replace the values above with actual credentials from your Firebase and Vapi setups.

4. Start the Development Server
npm run dev
 
Open your browser at http://localhost:3000 to access the app locally.



