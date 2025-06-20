
const PhoneDemo = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-16">
          See AI-T9 in action
        </h2>
        
        <div className="flex justify-center">
          <div className="relative">
            {/* iPhone Frame */}
            <div className="w-80 h-[650px] bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 pt-4 pb-2">
                  <span className="text-lg font-semibold">9:41</span>
                  <div className="w-24 h-6 bg-black rounded-full"></div>
                  <div className="flex space-x-1">
                    <div className="w-4 h-4 bg-black rounded-sm"></div>
                    <div className="w-4 h-4 bg-black rounded-sm"></div>
                    <div className="w-4 h-4 bg-black rounded-sm"></div>
                  </div>
                </div>

                {/* Header */}
                <div className="flex items-center px-4 py-3 border-b border-gray-200">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                    S
                  </div>
                  <span className="font-semibold">Stephen</span>
                </div>

                {/* Message */}
                <div className="px-4 py-6 space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                      <p className="text-sm">
                        Hey! Can you help with the project report? I need to update the data urgently
                      </p>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex justify-end">
                    <div className="bg-blue-500 text-white rounded-2xl rounded-br-sm px-4 py-3 max-w-xs">
                      <p className="text-sm">
                        Of course! I'll update the data and have the report ready in 30 minutes. Do you need any specific sections prioritized?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {/* AI Suggestions */}
                  <div className="flex space-x-2 mb-3 overflow-x-auto">
                    <button className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs whitespace-nowrap">
                      Official
                    </button>
                    <button className="bg-green-600 text-white px-3 py-1 rounded-full text-xs whitespace-nowrap">
                      🔎 Analyze
                    </button>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs whitespace-nowrap">
                      💬 Get Answers
                    </button>
                  </div>

                  {/* Text Input */}
                  <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center">
                    <span className="text-gray-500 text-sm flex-1">To: Company Name</span>
                    <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xl text-gray-600 mt-12">
          AI-T9 understands context and suggests the perfect response
        </p>
      </div>
    </section>
  );
};

export default PhoneDemo;
