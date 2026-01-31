'use client';

import { useTheme } from 'next-themes';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useEffect, useState } from 'react';
import { Moon, Sun, Globe, Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const languages: { code: 'pt' | 'en' | 'es'; label: string }[] = [
    { code: 'pt', label: 'Português' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
  ];


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div
        className="
    relative
    w-full max-w-6xl rounded-2xl
    bg-background/90
    shadow-[0_10px_50px_rgba(124,58,237,0.25)]
    transition-all duration-300

    before:absolute before:inset-0 before:rounded-2xl
    before:bg-gradient-to-br before:from-purple-500/10 before:to-transparent
    before:pointer-events-none
  "
      >


        <div className="flex h-16 items-center justify-between px-6">

          {/* Logo */}
          <div className="relative right-4 md:right-0 group cursor-pointer">
            <Image
              src="/logo.png"
              alt="Stack3"
              width={125}
              height={125}
              className="
                transition-all duration-300
                group-hover:-translate-y-0.5
                group-hover:scale-[1.03]
                group-hover:drop-shadow-[0_8px_20px_rgba(124,58,237,0.35)]
              "
            />
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: t('nav.services'), href: '#services' },
              { label: t('nav.about'), href: '#about' },
              { label: t('nav.contact'), href: '#contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  relative text-sm font-medium
                  text-foreground/80
                  transition-colors duration-300
                  hover:text-purple-500
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0
                  after:bg-gradient-to-r after:from-purple-500 after:to-purple-400
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Ações */}
          <div className="flex items-center gap-2">

            {/* Language */}
            <div className="relative group hover:cursor-pointer">
              <div
                className="
                  flex items-center gap-2 cursor-pointer
                  rounded-xl px-3 py-2 text-sm font-medium
                  text-foreground/80
                  transition-all duration-300
                  hover:bg-purple-500/10
                  hover:text-purple-500
                  hover:scale-[1.05]
                "
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline uppercase text-xs font-semibold">
                  {language}
                </span>
              </div>

              <div
                className="
                  pointer-events-none absolute right-0 mt-1 w-36
                  overflow-hidden rounded-xl
                  border border-purple-500/20
                  bg-background/90
                  shadow-[0_10px_30px_rgba(124,58,237,0.25)]
                  opacity-0 translate-y-2
                  transition-all duration-200
                  group-hover:pointer-events-auto
                  group-hover:opacity-100
                  group-hover:translate-y-0
                "
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="
                      block w-full px-4 py-2 text-left text-sm
                      transition-colors
                      hover:bg-purple-500/10
                      hover:text-purple-500
                    "
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme toggle */}
            <button
              onClick={() => mounted && setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="
    rounded-xl px-2 py-2
    text-foreground/80
    transition-all duration-300
    hover:bg-purple-500/10
    hover:text-purple-500
    md:hover:scale-110
  "
              aria-label="Toggle theme"
            >
              {!mounted && (
                <Loader2 className="h-4 w-4 animate-spin opacity-60" />
              )}

              {mounted && theme === 'dark' && <Sun className="h-4 w-4" />}
              {mounted && theme === 'light' && <Moon className="h-4 w-4" />}
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}
