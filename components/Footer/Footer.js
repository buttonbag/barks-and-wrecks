import { theme } from "theme";

export const Footer = () => {
  return (
    <footer className="-mt-10 py-10 px-6 md:px-16 border-t border-amber-900 text-white" style={{background: theme[`blue`]}}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 tracking-[0.1em]">
        <span className="font-heading">
          BARKS AND WRECKS
        </span>
        <p className="text-xs">
          © 2026 Barks & Wrecks, LLC · A proud small business of Pawnee County · "We Love Dogs and Binders."
        </p>
        <p className="text-xs">speak@barksandwrecks.com</p>
      </div>
    </footer>
  );
};