"use client";

import { motion } from "framer-motion";

export default function Section() {
  const start = new Date(Date.UTC(2026, 5, 1)).getTime(); // 01/06/2026
  const end = new Date(Date.UTC(2031, 4, 31)).getTime(); // 31/05/2031
  const now = new Date().getTime();
  const progress = Math.min(
    Math.max(Math.round(((now - start) / (end - start)) * 100), 0),
    100,
  );

  return (
    <div className="w-full">
      <h2>Project Progress</h2>
      <div className="border-primary-200 relative mt-4 h-8 w-full overflow-hidden border shadow-inner">
        <motion.div
          className="bg-accent-500 flex h-full items-center justify-center"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <span className="text-primary-50 font-mono text-sm font-medium select-none">
            {progress}%
          </span>
        </motion.div>
      </div>
    </div>
  );
}
