export default function HomePage() {
  return (
    <main className="fixed inset-0 bg-white text-center flex flex-col items-center justify-center">
      {/* Top section */}
      <div className="absolute top-0 left-0 w-full flex flex-col items-center mt-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Doctor And Patient Appointment System</h1>
        <p className="mb-4">Book appointments, manage your profile, and set your availability easily As a Doctor.</p>
      </div>
      {/* Centered links */}
      <div className="flex flex-col items-center justify-center h-full">
        {/* Doctor section */}
        <div className="space-x-4 mb-6">
          <a href="/register" className="text-blue-600 underline">Register as Doctor</a>
          <br/>
          <a href="/login" className="text-blue-600 underline">Login as Doctor</a>
          <p className="mb-4 text-blue-700 font-semibold">Welcom to Doctors</p>
        </div>
        <br/><br/>
        {/* Patient section */}
        <div>
          <p className="mb-4">Book appointments, manage your profile, and set your availability easily As a Patient.</p>
          <a href="/patient/register" className="text-green-600 underline mb-2">Register as Patient</a>
          <br/>
          <a href="/patient/login" className="text-green-600 underline mb-2">Login as Patient</a>
          <p className="mb-4 text-blue-700 font-semibold">Welcome to Patient</p>
        </div>
      </div>
    </main>
  );
}