// Example API service functions for doctor registration, login, profile, and availability

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

// Register a new doctor
export async function registerDoctor(data: any) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Registration failed");
  return res.json();
}

// Login
export async function loginDoctor(data: { email: string; password: string }) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include",
  });
  if (!res.ok) throw new Error("Login failed");
  return res.json();
}

// Get doctor profile
export async function getDoctorProfile(token: string) {
  const res = await fetch(`${API_BASE}/doctors/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to fetch profile");
  return res.json();
}

// Update doctor profile
export async function updateDoctorProfile(token: string, data: any) {
  const res = await fetch(`${API_BASE}/doctors/me`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update profile");
  return res.json();
}

// Save availability slots
export async function saveAvailability(token: string, slots: any) {
  const res = await fetch(`${API_BASE}/availability`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(slots),
  });
  if (!res.ok) throw new Error("Failed to save availability");
  return res.json();
}