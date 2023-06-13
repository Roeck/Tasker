import "./globals.css";

import Modal from "@/components/Modal";

export const metadata = {
  title: "Tasker",
  description: "Project manager platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Modal />
      </body>
    </html>
  );
}
