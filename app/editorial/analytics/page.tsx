export default function AnalyticsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Editorial Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-custom-gold/10 rounded-lg p-6 border border-custom-gold/20">
          <h3 className="text-lg font-semibold mb-4">Submission Trends</h3>
          <div className="h-48 bg-custom-gold/5 rounded flex items-center justify-center">
            <span className="text-custom-gold/50">Chart Placeholder</span>
          </div>
        </div>
        <div className="bg-custom-gold/10 rounded-lg p-6 border border-custom-gold/20">
          <h3 className="text-lg font-semibold mb-4">Review Performance</h3>
          <div className="h-48 bg-custom-gold/5 rounded flex items-center justify-center">
            <span className="text-custom-gold/50">Chart Placeholder</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Stories Published", value: "142" },
          { label: "Average Review Time", value: "3.2 days" },
          { label: "Acceptance Rate", value: "18%" },
          { label: "Active Reviewers", value: "12" },
        ].map((stat, i) => (
          <div key={i} className="bg-custom-gold/10 rounded-lg p-4 border border-custom-gold/20">
            <h4 className="text-sm font-semibold text-custom-gold/70 uppercase tracking-wide">{stat.label}</h4>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}