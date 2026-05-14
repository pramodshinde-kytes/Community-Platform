export default function CommunityStats() {
  const stats = [
    { title: 'Active Members', value: '50,000+' },
    { title: 'Discussions', value: '120,000+' },
    { title: 'Experts', value: '500+' },
    { title: 'Events', value: '1,000+' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-white p-10 rounded-3xl shadow-sm text-center"
            >
              <h3 className="text-4xl font-bold text-purple-700">
                {item.value}
              </h3>
              <p className="text-gray-600 mt-3">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}