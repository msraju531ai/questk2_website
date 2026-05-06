const testimonials = [
  {
    quote: "QuestK2 Technologies has done a great job delivering what we've planned. Their technical expertise and commitment to deadlines is impressive.",
    name: "Executive VP",
    title: "Data Intelligence Company",
    rating: 5,
  },
  {
    quote: "What impressed us the most was their attention to detail and commitment to quality. The team consistently exceeded our expectations.",
    name: "Store Manager",
    title: "LOFT",
    rating: 5,
  },
  {
    quote: "Their project management was exceptional. They kept everything on track and communicated clearly throughout the entire engagement.",
    name: "Director",
    title: "JSAN Consulting Group",
    rating: 5,
  },
  {
    quote: "QuestK2 brought deep Azure expertise and helped us modernize our data infrastructure faster than we thought possible.",
    name: "VP of Engineering",
    title: "Financial Services Firm",
    rating: 5,
  },
  {
    quote: "The team is collaborative, responsive, and truly invested in our success. We consider them a long-term technology partner.",
    name: "CTO",
    title: "Healthcare Technology Company",
    rating: 5,
  },
  {
    quote: "Outstanding delivery on our Microsoft Fabric implementation. QuestK2 navigated complex requirements with ease and professionalism.",
    name: "Head of Data",
    title: "Retail Enterprise",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-2">Client Reviews</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">What Our Clients Say</h2>
          <div className="flex items-center justify-center gap-2">
            <StarRating count={5} />
            <span className="text-slate-600 font-semibold">5.0</span>
            <span className="text-slate-400 text-sm">· Verified on Clutch</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-4"
            >
              <StarRating count={t.rating} />
              <p className="text-slate-700 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                <p className="text-slate-500 text-xs">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
