/* Base Styles */
:root {
  --color-primary: #3b82f6;
  --color-primary-hover: #2563eb;
  --color-foreground: #111827;
  --color-muted: #6b7280;
  --color-background: #ffffff;
  --color-border: #e5e7eb;
  --color-blue-50: #eff6ff;
  --color-blue-100: #dbeafe;
  --color-blue-200: #bfdbfe;
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-heading: var(--font-sans);
}

/* Dark mode can be added here if desired */
/* @media (prefers-color-scheme: dark) {
  :root {
    --color-foreground: #f9fafb;
    --color-background: #1f2937;
    --color-muted: #9ca3af;
    --color-border: #374151;
  }
} */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  color: var(--color-foreground);
  background-color: var(--color-background);
  line-height: 1.5;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
  line-height: 1.2;
}

a {
  color: inherit;
  text-decoration: none;
}

/* Utility Classes */
.container {
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.text-muted-foreground {
  color: var(--color-muted);
}

.text-primary {
  color: var(--color-primary);
}

.bg-blue-50 {
  background-color: var(--color-blue-50);
}

.bg-blue-100 {
  background-color: var(--color-blue-100);
}

.bg-blue-200 {
  background-color: var(--color-blue-200);
}

.font-heading {
  font-family: var(--font-heading);
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--color-muted);
}

.blur-backdrop {
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

/* Components */
.glass-card {
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-primary);
  color: white;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
  text-align: center;
}

.btn-primary:hover {
  background-color: var(--color-primary-hover);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  font-weight: 600;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-align: center;
}

.btn-outline:hover {
  background-color: var(--color-primary);
  color: white;
}

.nav-link {
  position: relative;
  color: var(--color-foreground);
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--color-blue-50);
  color: var(--color-primary);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.social-icon:hover {
  transform: translateY(-3px);
  background-color: var(--color-blue-100);
}

/* Layout Utilities */
.fixed {
  position: fixed;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.z-10 {
  z-index: 10;
}

.z-20 {
  z-index: 20;
}

.z-40 {
  z-index: 40;
}

.z-50 {
  z-index: 50;
}

.-z-10 {
  z-index: -10;
}

.top-0 {
  top: 0;
}

.left-0 {
  left: 0;
}

.right-0 {
  right: 0;
}

.bottom-0 {
  bottom: 0;
}

.top-1\/4 {
  top: 25%;
}

.right-1\/4 {
  right: 25%;
}

.bottom-1\/3 {
  bottom: 33.333333%;
}

.left-1\/4 {
  left: 25%;
}

.top-1\/2 {
  top: 50%;
}

.left-1\/2 {
  left: 50%;
}

.transform {
  transform: translateX(-50%);
}

.min-h-screen {
  min-height: 100vh;
}

.w-full {
  width: 100%;
}

.h-full {
  height: 100%;
}

.w-1\/2 {
  width: 50%;
}

.h-1\/2 {
  height: 50%;
}

.w-1\/3 {
  width: 33.333333%;
}

.h-1\/3 {
  height: 33.333333%;
}

.w-32 {
  width: 8rem;
}

.h-32 {
  height: 8rem;
}

.w-64 {
  width: 16rem;
}

.h-64 {
  height: 16rem;
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.object-cover {
  object-fit: cover;
}

.overflow-hidden {
  overflow: hidden;
}

.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.py-20 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.py-12 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.pt-16 {
  padding-top: 4rem;
}

.p-8 {
  padding: 2rem;
}

.p-6 {
  padding: 1.5rem;
}

.p-4 {
  padding: 1rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.pt-6 {
  padding-top: 1.5rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.mb-10 {
  margin-bottom: 2.5rem;
}

.mb-16 {
  margin-bottom: 4rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mt-8 {
  margin-top: 2rem;
}

.mt-12 {
  margin-top: 3rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mr-4 {
  margin-right: 1rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.ml-1 {
  margin-left: 0.25rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.max-w-3xl {
  max-width: 48rem;
}

.max-w-xl {
  max-width: 36rem;
}

.max-w-sm {
  max-width: 24rem;
}

.space-y-6 > * + * {
  margin-top: 1.5rem;
}

.space-y-4 > * + * {
  margin-top: 1rem;
}

.space-y-8 > * + * {
  margin-top: 2rem;
}

.space-x-6 > * + * {
  margin-left: 1.5rem;
}

.space-x-4 > * + * {
  margin-left: 1rem;
}

.space-x-3 > * + * {
  margin-left: 0.75rem;
}

.gap-12 {
  gap: 3rem;
}

.gap-8 {
  gap: 2rem;
}

.gap-6 {
  gap: 1.5rem;
}

.gap-4 {
  gap: 1rem;
}

.gap-3 {
  gap: 0.75rem;
}

.gap-2 {
  gap: 0.5rem;
}

.grid {
  display: grid;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.flex {
  display: flex;
}

.hidden {
  display: none;
}

.visible {
  visibility: visible;
}

.invisible {
  visibility: hidden;
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

.opacity-80 {
  opacity: 0.8;
}

.opacity-50 {
  opacity: 0.5;
}

.opacity-30 {
  opacity: 0.3;
}

.opacity-20 {
  opacity: 0.2;
}

.blur-3xl {
  filter: blur(64px);
}

.flex-col {
  flex-direction: column;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.items-center {
  align-items: center;
}

.items-start {
  align-items: flex-start;
}

.items-end {
  align-items: flex-end;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.self-start {
  align-self: flex-start;
}

.text-center {
  text-align: center;
}

.text-sm {
  font-size: 0.875rem;
}

.text-xs {
  font-size: 0.75rem;
}

.text-lg {
  font-size: 1.125rem;
}

.text-xl {
  font-size: 1.25rem;
}

.text-2xl {
  font-size: 1.5rem;
}

.text-4xl {
  font-size: 2.25rem;
}

.font-bold {
  font-weight: 700;
}

.font-medium {
  font-weight: 500;
}

.font-semibold {
  font-weight: 600;
}

.border {
  border-width: 1px;
  border-style: solid;
  border-color: var(--color-border);
}

.border-t {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: var(--color-border);
}

.border-4 {
  border-width: 4px;
}

.border-white {
  border-color: white;
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.transition-colors {
  transition-property: color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.duration-300 {
  transition-duration: 300ms;
}

.duration-500 {
  transition-duration: 500ms;
}

.hover\:underline:hover {
  text-decoration: underline;
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}

.hover\:text-primary:hover {
  color: var(--color-primary);
}

.hover\:bg-primary:hover {
  background-color: var(--color-primary);
}

.animate-bounce {
  animation: bounce 1s infinite;
}

.animate-fade-in {
  animation: fadeIn 1s forwards;
}

.animate-delay-100 {
  animation-delay: 0.1s;
}

.animate-delay-200 {
  animation-delay: 0.2s;
}

.animate-delay-300 {
  animation-delay: 0.3s;
}

.animate-delay-400 {
  animation-delay: 0.4s;
}

.animate-delay-500 {
  animation-delay: 0.5s;
}

.animate-delay-600 {
  animation-delay: 0.6s;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Media Queries */
@media (min-width: 640px) {
  .sm\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .md\:flex {
    display: flex;
  }
  
  .md\:hidden {
    display: none;
  }
  
  .md\:flex-row {
    flex-direction: row;
  }
  
  .md\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  
  .md\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  
  .md\:text-2xl {
    font-size: 1.5rem;
  }
  
  .md\:text-3xl {
    font-size: 1.875rem;
  }
  
  .md\:text-5xl {
    font-size: 3rem;
  }
  
  .md\:w-80 {
    width: 20rem;
  }
  
  .md\:h-80 {
    height: 20rem;
  }
  
  .md\:mb-0 {
    margin-bottom: 0;
  }
  
  .md\:items-end {
    align-items: flex-end;
  }
}

@media (min-width: 1024px) {
  .lg\:col-span-2 {
    grid-column: span 2 / span 2;
  }
  
  .lg\:col-span-3 {
    grid-column: span 3 / span 3;
  }
  
  .lg\:col-span-5 {
    grid-column: span 5 / span 5;
  }
  
  .lg\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  
  .lg\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  
  .lg\:grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  
  .lg\:order-1 {
    order: 1;
  }
  
  .lg\:order-2 {
    order: 2;
  }
  
  .lg\:h-auto {
    height: auto;
  }
  
  .lg\:text-6xl {
    font-size: 3.75rem;
  }
  
  .lg\:justify-end {
    justify-content: flex-end;
  }
}

.aspect-video {
  aspect-ratio: 16 / 9;
}
