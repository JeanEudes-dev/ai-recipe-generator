import Link from "next/link";
import "./styles/globals.css";
import { ReactNode } from "react";

// Props type definition
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Animated Header Section */}
        <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-700 shadow-md">
          <div className="relative container mx-auto flex justify-between items-center py-4 px-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 animate-pulse"></div>
              <h1 className="text-lg font-extrabold tracking-wide uppercase bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent animate-text">AI Recipe Hub</h1>
            </div>
            <nav>
              <ul className="flex space-x-4 text-sm">
                <li className="group">
                  <Link className="relative after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform duration-300" href="/">
                    Home
                  </Link>
                </li>
                <li className="group">
                  <Link className="relative after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform duration-300" href="/about">
                    About
                  </Link>
                </li>
                <li className="group">
                  <Link className="relative after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform duration-300" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* Decorative Animations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-40 h-40 bg-purple-500 opacity-30 blur-2xl animate-bounce-slow rounded-full absolute top-0 left-0"></div>
            <div className="w-32 h-32 bg-indigo-500 opacity-30 blur-2xl animate-bounce-slow rounded-full absolute bottom-0 right-0"></div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-6 py-10">
          <div className="bg-white/5 backdrop-blur-md p-3 rounded-lg shadow-lg">
            {children}
          </div>
        </main>

        {/* Footer Section */}
        <footer className="bg-gray-900 border-t border-gray-700 py-6">
          <div className="container mx-auto text-center">
            <ul className="flex justify-center space-x-6 mb-4">
              <li>
                <Link  className="text-sm hover:text-gray-400" href="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms"  className="text-sm hover:text-gray-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
            <p className="text-sm">&copy; {new Date().getFullYear()} AI Recipe Hub. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
