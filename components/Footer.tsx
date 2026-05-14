export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#30363d]">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-mono text-xs text-[#484f58]">
          © {new Date().getFullYear()} Mykola Moskalenko
        </p>
      </div>
    </footer>
  );
}
