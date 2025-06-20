
const Features = () => {
  const features = [
    {
      title: "Contextual Understanding",
      description: "AI analyzes the entire conversation history to provide accurate suggestions.",
      icon: "🧠"
    },
    {
      title: "Style Personalization", 
      description: "Adapts to your unique communication style.",
      icon: "✨"
    },
    {
      title: "Multilingual Support",
      description: "Supports over 40 languages and dialects.",
      icon: "🌍"
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          Write faster. Answer smarter.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
