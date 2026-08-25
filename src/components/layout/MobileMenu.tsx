"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { navLinks } from "@/content/site";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-50 flex flex-col bg-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex items-center justify-end px-5 py-5 sm:px-8">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="text-label flex min-h-11 min-w-11 items-center justify-center text-text"
              aria-label="Close menu"
            >
              CLOSE
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2 px-5 sm:px-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-page-title block py-2 text-text transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * navLinks.length }}
              className={cn("pt-8")}
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="text-label inline-flex min-h-11 items-center border border-accent bg-accent px-7 py-3 text-text"
              >
                START A PROJECT
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
