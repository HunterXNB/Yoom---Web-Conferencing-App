# Yoom - Next-Gen Video Conferencing

Yoom is a professional, high-performance video conferencing application built with the latest web technologies. It provides a seamless experience for hosting, joining, and managing virtual meetings with advanced features like real-time video, screen sharing, and recording.

## 🚀 Features

- **Secure Authentication**: Integrated with [Clerk](https://clerk.com/) for robust user management and security.
- **High-Quality Video/Audio**: Powered by [GetStream](https://getstream.io/video/sdk/react-sdk/) for low-latency, scalable video communication.
- **Meeting Management**: 
  - Create instant meetings.
  - Schedule future meetings.
  - Join meetings via unique links.
  - Record sessions for later review.
- **Personal Room**: Every user gets a dedicated personal room link for recurring meetings.
- **Responsive Design**: Built with Tailwind CSS and Radix UI for a stunning, mobile-first experience.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Authentication**: [Clerk](https://clerk.com/)
- **Video SDK**: [Stream Video SDK](https://getstream.io/video/sdk/react-sdk/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Shadcn/UI](https://ui.shadcn.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🏁 Getting Started

### Prerequisites

- Node.js (Latest LTS)
- NPM, Yarn, or PNPM

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HunterXNB/Yoom---Web-Conferencing-App.git
   cd Yoom---Web-Conferencing-App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file based on the provided `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your API keys from Clerk and GetStream.

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📄 License

This project is licensed under the MIT License.
