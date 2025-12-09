"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

interface MDXWrapperProps {
  children: React.ReactNode;
}

export function MDXWrapper({ children }: MDXWrapperProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  useEffect(() => {
    // Apply Prism syntax highlighting to all code blocks
    Prism.highlightAll();

    // Add copy buttons to all code blocks
    const codeBlocks = document.querySelectorAll("pre[class*='language-']");
    
    codeBlocks.forEach((block) => {
      // Skip if button already exists
      if (block.querySelector(".copy-button")) return;

      const wrapper = document.createElement("div");
      wrapper.className = "code-block-wrapper";
      
      const button = document.createElement("button");
      button.className = "copy-button";
      button.setAttribute("aria-label", "Copy code");
      
      const code = block.querySelector("code");
      if (code) {
        button.addEventListener("click", async () => {
          const text = code.textContent || "";
          await navigator.clipboard.writeText(text);
          setCopiedCode(text);
          setTimeout(() => setCopiedCode(null), 2000);
        });
      }

      // Wrap the pre element
      block.parentNode?.insertBefore(wrapper, block);
      wrapper.appendChild(block);
      wrapper.appendChild(button);
    });
  }, [children]);

  // Update button icons based on copied state
  useEffect(() => {
    const buttons = document.querySelectorAll(".copy-button");
    buttons.forEach((button) => {
      const wrapper = button.closest(".code-block-wrapper");
      const code = wrapper?.querySelector("code");
      const text = code?.textContent || "";
      
      button.innerHTML = copiedCode === text 
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>';
    });
  }, [copiedCode]);

  return <div className="mdx-content">{children}</div>;
}
