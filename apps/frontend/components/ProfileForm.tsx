"use client";
import React, { useState } from "react";

type ProfileFormProps = {
  initialData?: {
    firstName?: string;
    lastName?: string;
    qualifications?: string;
    biography?: string;
    profileImageUrl?: string;
  };
  onSubmit: (data: any) => void;
};

export default function ProfileForm({ initialData = {}, onSubmit }: ProfileFormProps) {
  const [form, setForm] = useState({
    firstName: initialData.firstName || "",
    lastName: initialData.lastName || "",
    qualifications: initialData.qualifications || "",
    biography: initialData.biography || "",
    profileImageUrl: initialData.profileImageUrl || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label className="block font-medium mb-1">First Name</label>
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Last Name</label>
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Qualifications</label>
        <input
          name="qualifications"
          value={form.qualifications}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Biography</label>
        <textarea
          name="biography"
          value={form.biography}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Profile Image URL</label>
        <input
          name="profileImageUrl"
          value={form.profileImageUrl}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Profile
      </button>
    </form>
  );
}