
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <body className=" ">
            <div className="flex h-screen">
              <Sidebar />

                <main className="h-screen p-4">
            
                  {children}
                </main>
            </div>
      </body> 
    </html>
  );
}