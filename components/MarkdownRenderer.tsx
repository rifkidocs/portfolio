"use client";

import React from "react";

type Props = {
  html: string;
  className?: string;
};

export default function MarkdownRenderer({ html, className }: Props) {
  return (
    <article
      className={
        className ??
        "max-w-none space-y-6 leading-relaxed [&_h1]:mt-0 [&_pre]:rounded-md [&_pre]:p-0 [&_img]:max-w-full [&_img]:h-auto"
      }
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}