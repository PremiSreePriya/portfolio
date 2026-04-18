import { STUDENT_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm text-center w-full">
  © 2026 {STUDENT_INFO.name}. Built with passion and code.
</p>
        
       
      </div>
    </footer>
  );
}
