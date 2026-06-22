"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type ToastType = "success" | "info";

interface ToastContextProps {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(
  undefined
);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<{
    message: string;
    type: ToastType;
    visible: boolean;
  } | null>(null);

  const showToast = (
    message: string,
    type: ToastType = "success"
  ) => {
    setToast({ message, type, visible: false });
    setTimeout(() => {
      setToast({ message, type, visible: true });
    }, 10);
    setTimeout(() => {
      setToast((prev) =>
        prev ? { ...prev, visible: false } : null
      );
      setTimeout(() => setToast(null), 400);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div className="fixed top-20 sm:top-24 left-4 right-4 sm:left-auto sm:right-6 z-[9999]">
          <div
            className={`bg-cream border border-sand text-ink px-5 py-3.5 shadow-lg flex items-center gap-3 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              toast.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full flex-shrink-0 ${
                toast.type === "success" ? "bg-forest" : "bg-terracotta"
              }`}
            />
            <div className="text-sm font-medium">{toast.message}</div>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
