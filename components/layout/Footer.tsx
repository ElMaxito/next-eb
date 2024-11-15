// components/layout/Footer.tsx
"use client"

export default function Footer() {
    return (
      <footer className="hidden sm:block py-8 mt-16">
        <div className="container">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Elke Bitterhof. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    );
  }