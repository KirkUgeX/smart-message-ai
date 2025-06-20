
const Solution = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-12">
          AI-T9 Predicts Meaning,<br />
          <span className="text-gray-400">Not Just Words</span>
        </h2>
        
        <div className="bg-black text-white rounded-3xl p-8 md:p-12 mb-12">
          <div className="text-left space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm">
                S
              </div>
              <span className="text-gray-300">Stephen</span>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-4 max-w-md">
              <p className="text-sm">
                Hey! Can you help with the project report? I need to update the data urgently
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex space-x-2">
                <button className="bg-gray-700 px-4 py-2 rounded-full text-sm">Official</button>
                <button className="bg-green-600 px-4 py-2 rounded-full text-sm">🔎 Analyze</button>
                <button className="bg-blue-600 px-4 py-2 rounded-full text-sm">💬 Get Answers</button>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-xl text-gray-600">
          In your browser. In your phone. In your everything.
        </p>
      </div>
    </section>
  );
};

export default Solution;
