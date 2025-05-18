"use client";
import ProfileForm from "@components/ProfileForm";

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Manage Profile</h1>
      <ProfileForm onSubmit={(data) => { /* handle profile submit */ }} />
    </div>
  );
}