import React from 'react';

const features = [
  {
    title: "Mobile Tasker Dashboard",
    status: "✅ Approved & Added to Code",
    description: "Includes applied tasks, analytics, and a call-to-action for posting ads."
  },
  {
    title: "Mobile Startup Dashboard",
    status: "✅ Approved & Added to Code",
    description: "Includes sections for current ads, past ads, and an ad-posting CTA button."
  },
  {
    title: "Ad Listings Page (Tasker View)",
    status: "✅ Approved & Added to Code",
    description: "Taskers can browse and filter available startup ads in real time."
  },
  {
    title: "Sustainability Vision Page",
    status: "🛠 Structure Outlined",
    description: "Lays out our commitment to ethical growth, repeat use, rewards, and community partnership."
  },
  {
    title: "Platform Vision & Ethics Model",
    status: "✅ Defined & Integrated",
    description: "Drives our AI, user experience, and startup recognition systems."
  }
];

export default function BuildProgressPage() {
  return (
    <section className="py-10 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">FounderTask Build Progress</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow-md rounded-2xl p-5">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{feature.status}</p>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
