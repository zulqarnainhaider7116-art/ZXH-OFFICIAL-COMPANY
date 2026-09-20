import { cn } from "@/lib/utils";

type IconProps = { className?: string };

export function IconWhatsApp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-4", className)} aria-hidden>
      <path
        fill="currentColor"
        d="M19.05 4.91A9.86 9.86 0 0 0 12.04 2C6.5 2 2 6.48 2 12c0 1.77.46 3.45 1.28 4.91L2 22l5.25-1.38A10 10 0 0 0 12.04 22h.01C17.6 22 22 17.52 22 12c0-2.65-1.03-5.14-2.95-7.09ZM12.05 20.15h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.19-.31a8.1 8.1 0 0 1-1.24-4.31c0-4.48 3.65-8.13 8.15-8.13 2.18 0 4.22.85 5.76 2.39a8.1 8.1 0 0 1 2.38 5.75c0 4.49-3.65 8.14-8.13 8.14Zm4.47-6.09c-.24-.12-1.45-.72-1.67-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.77.96-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.29.37-.43.12-.14.16-.24.24-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42l-.47-.01c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.2 3.7.59.25 1.04.41 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"
      />
    </svg>
  );
}

export function IconInstagram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-4", className)} aria-hidden>
      <path
        fill="currentColor"
        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm10.25 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
      />
    </svg>
  );
}

export function IconTikTok({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-4", className)} aria-hidden>
      <path
        fill="currentColor"
        d="M14.5 3c.4 2.6 1.9 4.3 4.5 4.6v2.4c-1.5 0-2.9-.5-4.1-1.3v7.2a5.9 5.9 0 1 1-5.9-5.9c.3 0 .6 0 .9.1v2.5a3.4 3.4 0 1 0 2.5 3.3V3h2.1Z"
      />
    </svg>
  );
}

export function IconSnapchat({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-4", className)} aria-hidden>
      <path
        fill="currentColor"
        d="M12 3c3.2 0 5.4 2.3 5.4 5.8 0 1.4.2 2.3.8 3 .4.4.8.5 1.2.5.3 0 .6-.1.7-.2l.4 1.4c-.4.3-1 .5-1.7.6-.2 1.2-.8 2.2-1.7 2.8.7.5 1.5.9 2.5 1.1l-.4 1.4c-1.7-.3-3-.9-4-1.6-.6.4-1.2.7-2.2.7s-1.6-.3-2.2-.7c-1 .7-2.3 1.3-4 1.6l-.4-1.4c1-.2 1.8-.6 2.5-1.1-.9-.6-1.5-1.6-1.7-2.8-.7-.1-1.3-.3-1.7-.6l.4-1.4c.1.1.4.2.7.2.4 0 .8-.1 1.2-.5.6-.7.8-1.6.8-3C6.6 5.3 8.8 3 12 3Z"
      />
    </svg>
  );
}

export function IconFacebook({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-4", className)} aria-hidden>
      <path
        fill="currentColor"
        d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4H16.5V5.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v2.6H8v2.8h2.4V21h3.1Z"
      />
    </svg>
  );
}

export const SOCIAL_ICONS = {
  whatsapp: IconWhatsApp,
  channel: IconWhatsApp,
  instagram: IconInstagram,
  tiktok: IconTikTok,
  snapchat: IconSnapchat,
  facebook: IconFacebook,
} as const;
