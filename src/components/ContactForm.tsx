"use client";
import { useToast } from "@/components/Toast";

export default function ContactForm() {
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("Message sent successfully.");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-xs uppercase tracking-[0.15em] text-stone font-medium"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-3 bg-transparent border border-sand text-ink text-sm focus:outline-none focus:border-terracotta transition-colors duration-300 placeholder:text-stone/50"
          placeholder="Full name"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-xs uppercase tracking-[0.15em] text-stone font-medium"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-3 bg-transparent border border-sand text-ink text-sm focus:outline-none focus:border-terracotta transition-colors duration-300 placeholder:text-stone/50"
          placeholder="you@example.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-xs uppercase tracking-[0.15em] text-stone font-medium"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-3 bg-transparent border border-sand text-ink text-sm focus:outline-none focus:border-terracotta transition-colors duration-300 placeholder:text-stone/50 resize-none"
          placeholder="How can we help?"
          required
        />
      </div>
      <button
        type="submit"
        className="self-start px-8 py-3 bg-forest text-cream text-sm font-medium tracking-wide hover:bg-terracotta transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
