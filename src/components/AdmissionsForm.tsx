"use client";
import { useToast } from "@/components/Toast";

export default function AdmissionsForm() {
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(
      "Enquiry submitted. We will contact you within 24 hours."
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label
          htmlFor="parentName"
          className="block mb-2 text-xs uppercase tracking-[0.15em] text-stone font-medium"
        >
          Parent / Guardian Name
        </label>
        <input
          type="text"
          id="parentName"
          className="w-full px-4 py-3 bg-transparent border border-sand text-ink text-sm focus:outline-none focus:border-terracotta transition-colors duration-300 placeholder:text-stone/50"
          placeholder="Full name"
          required
        />
      </div>
      <div>
        <label
          htmlFor="childName"
          className="block mb-2 text-xs uppercase tracking-[0.15em] text-stone font-medium"
        >
          Child&apos;s Name
        </label>
        <input
          type="text"
          id="childName"
          className="w-full px-4 py-3 bg-transparent border border-sand text-ink text-sm focus:outline-none focus:border-terracotta transition-colors duration-300 placeholder:text-stone/50"
          placeholder="Student name"
          required
        />
      </div>
      <div>
        <label
          htmlFor="grade"
          className="block mb-2 text-xs uppercase tracking-[0.15em] text-stone font-medium"
        >
          Seeking Admission For
        </label>
        <select
          id="grade"
          className="w-full px-4 py-3 bg-transparent border border-sand text-ink text-sm focus:outline-none focus:border-terracotta transition-colors duration-300 appearance-none"
          required
        >
          <option value="">Select Grade</option>
          <option value="Pre-KG">Pre-KG</option>
          <option value="LKG">LKG</option>
          <option value="UKG">UKG</option>
          <option value="Grade 1-5">Grade 1-5</option>
          <option value="Grade 6-8">Grade 6-8</option>
          <option value="Grade 9-10">Grade 9-10</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block mb-2 text-xs uppercase tracking-[0.15em] text-stone font-medium"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full px-4 py-3 bg-transparent border border-sand text-ink text-sm focus:outline-none focus:border-terracotta transition-colors duration-300 placeholder:text-stone/50"
          placeholder="+91"
          required
        />
      </div>
      <button
        type="submit"
        className="self-start px-8 py-3 bg-forest text-cream text-sm font-medium tracking-wide hover:bg-terracotta transition-colors duration-300"
      >
        Submit Enquiry
      </button>
    </form>
  );
}
