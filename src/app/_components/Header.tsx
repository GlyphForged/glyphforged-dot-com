'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { label: 'Projects', href: '/projects' },
  { label: 'Games', href: '/games' },
  { label: 'Musings', href: '/musings' },
  // Add more here later, e.g. { label: "About", href: "/about" }
];

export default function Header({
  items = NAV_ITEMS,
  homeHref = '/',
  logoSrc = '/logos/gf-logo-wht.svg',
  title = 'Glyph Forged',
}: {
  items?: NavItem[];
  homeHref?: string;
  logoSrc?: string;
  title?: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null):

  // Close when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Close on outside click
useEffect(() => {
  if (!open) return;
  const onPointerDown = (e: PointerEvent) => {
    const t = e.target as Node;
    if (panelRef.current?.contains(t)) return;      // clicks inside panel: ignore
    if (triggerRef.current?.contains(t)) return;    // clicks on logo/hamburger: ignore
    setOpen(false);                                  // truly outside: close
  };
  window.addEventListener("pointerdown", onPointerDown);
  return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [open]);
  return (
    <div
      className={styles.wrapper}
      aria-live="polite">
      {/* Pill/oval shell with two zones: logo (L) + hamburger (R) */}
      <div className={styles.pillShell} ref={triggerRef}>
        <Link
          href={homeHref}
          className={styles.logoLink}
          aria-label={`${title} — Home`}
          onClick={() => setOpen(false)}>
          <img
            src={logoSrc}
            alt={`${title} logo`}
            className={styles.logo}
            width={28}
            height={28}
            draggable={false}
          />
        </Link>

        <button
          type="button"
          className={`${styles.hamburger} ${open ? styles.isOpen : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="gf-nav-panel"
          onClick={() => setOpen((v) => !v)}>
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
        </button>
      </div>

      <div
        id="gf-nav-panel"
        ref={panelRef}
        className={`${styles.panel} ${open ? styles.open : ''}`}
        role="dialog"
        aria-modal="false"
        aria-label="Site navigation">
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {items.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${
                      active ? styles.active : ''
                    }`}
                    onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
