export default function Footer() {
  return (
    <footer className="py-8 bg-neutral-950 border-t border-neutral-900 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-neutral-500 text-sm">
          &copy; {new Date().getFullYear()} Raditya Yusuf Ramadhan. Didesain dan dibangun dengan Next.js, Tailwind CSS & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
