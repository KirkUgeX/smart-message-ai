
const Demo = () => {
  const styles = [
    "Official", "Friendly", "Business", "Humorous", "Flirty", 
    "Twitter Guru", "Shitpost Goblin", "HR", "Sales Guy", "Tech Support", "BD"
  ];

  return (
    <section id="demo" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-12">
          In your browser.
        </h2>
        
        <div className="bg-black rounded-3xl p-8 mb-12">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {styles.map((style, index) => (
              <span 
                key={index}
                className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {style}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-2 justify-center">
            <button className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm">
              🤖 AI-T9
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
              🔎 Analyze  
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
              💬 Get Answers
            </button>
          </div>
        </div>
        
        <p className="text-xl text-gray-600 mb-8">
          Works everywhere you communicate
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500">
          <div>In your WhatsApp</div>
          <div>In your iMessage</div>
          <div>In your Telegram</div>
          <div>In your email</div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
