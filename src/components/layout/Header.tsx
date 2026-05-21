'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className="text-xl font-bold"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
          >
            SendMoney<span style={{ color: 'var(--text-primary)' }}>Smart</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="transition-colors hover:text-white"
            style={{ color: 'var(--text-muted)' }}
          >
            Home
          </Link>
          <Link
            href="/#corridors"
            className="transition-colors hover:text-white"
            style={{ color: 'var(--text-muted)' }}
          >
            Compare
          </Link>
          <Link
            href="/how-money-transfers-work/"
            className="transition-colors hover:text-white"
            style={{ color: 'var(--text-muted)' }}
          >
            How It Works
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: 'var(--text-muted)' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-4 py-4 flex flex-col gap-4 text-sm font-medium"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-surface)' }}
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            style={{ color: 'var(--text-muted)' }}
          >
            Home
          </Link>
          <Link
            href="/#corridors"
            onClick={() => setOpen(false)}
            style={{ color: 'var(--text-muted)' }}
          >
            Compare
          </Link>
          <Link
            href="/how-money-transfers-work/"
            onClick={() => setOpen(false)}
            style={{ color: 'var(--text-muted)' }}
          >
            How It Works
          </Link>
        </div>
      )}
    </header>
  );
}
