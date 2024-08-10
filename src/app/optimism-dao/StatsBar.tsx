const stats = [
    { value: '168,763', label: 'Active DAOs' },
    { value: '$20.78B', label: 'Total Treasury' },
    { value: '421,143', label: 'Submitted Proposals' },
    { value: '6.33M', label: 'Unique Voters' },
    { value: '7', label: 'Supported Networks' },
  ];
  
  export default function StatsBar() {
    return (
      <div className="w-full bg-[#E2E6E5] py-8 px-4 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg shadow-md">
                <span className="text-xl md:text-2xl font-semibold mb-1 text-blue-600">{stat.value}</span>
                <span className="text-xs md:text-sm font-medium text-gray-600 uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  