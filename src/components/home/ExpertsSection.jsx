const experts = [
  'Frontend Expert',
  'Backend Architect',
  'Cloud Consultant',
  'AI Specialist',
]

export default function ExpertsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-14">
          <h2 className="text-5xl font-bold mb-4">
            Featured Experts
          </h2>

          <p className="text-gray-600 text-lg">
            Learn directly from industry professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {experts.map((expert) => (
            <div
              key={expert}
              className="bg-white rounded-3xl p-8 text-center shadow-sm"
            >
              <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-6" />

              <h3 className="text-xl font-semibold">{expert}</h3>

              <button className="mt-6 bg-purple-700 text-white px-6 py-3 rounded-xl">
                Ask Expert
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}