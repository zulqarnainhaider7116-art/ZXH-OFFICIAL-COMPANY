import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/data/site";

type BeforeInstall = Event & { prompt: () => Promise<void> };

export function InstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstall | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("zxh-install-dismissed");
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstall);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    const t = window.setTimeout(() => {
      if (!dismissed) setOpen(true);
    }, 4200);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.clearTimeout(t);
    };
  }, []);

  if (!open) return null;

  const install = async () => {
    if (deferred) {
      await deferred.prompt();
    }
    setOpen(false);
    sessionStorage.setItem("zxh-install-dismissed", "1");
  };

  const later = () => {
    setOpen(false);
    sessionStorage.setItem("zxh-install-dismissed", "1");
  };

  return (
    <div className="fixed right-4 bottom-24 z-40 w-[min(calc(100vw-2rem),360px)] md:bottom-6">
      <div className="zxh-panel rounded-2xl p-4">
        <div className="flex gap-3">
          <img
            src="/company/logo-glass.png"
            alt=""
            className="size-12 rounded-xl object-cover"
          />
          <div>
            <p className="text-sm font-medium">Install {COMPANY.short}</p>
            <p className="mt-1 text-xs text-muted">
              Keep the company room on your home screen.
            </p>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <Button size="sm" onClick={() => void install()}>
            Install
          </Button>
          <Button size="sm" variant="ghost" onClick={later}>
            Later
          </Button>
        </div>
      </div>
    </div>
  );
}
