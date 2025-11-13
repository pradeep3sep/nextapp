"use client";

export function FormInput({ label, error, ...props }: any) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium">{label}</label>
      <input
        {...props}
        className="border p-2 rounded-md"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}