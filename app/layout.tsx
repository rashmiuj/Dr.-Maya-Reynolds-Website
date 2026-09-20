import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Therapist in Santa Monica, CA",
  description: "Specialized therapy for anxiety, panic, trauma, and burnout in Santa Monica, CA. In-person and telehealth sessions with Dr. Maya Reynolds, PsyD.",
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Therapist in Santa Monica, CA",
    description: "Specialized therapy for anxiety, panic, trauma, and burnout in Santa Monica, CA. In-person and telehealth sessions with Dr. Maya Reynolds, PsyD.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-bg-light text-text-dark font-sans">
        {children}
      </body>
    </html>
  );
}
