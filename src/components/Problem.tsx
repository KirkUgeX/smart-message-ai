
const Problem = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          Messages are easy -<br />
          <span className="text-gray-400">but right ones aren't</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8">
            <div className="text-4xl mb-4">⏳</div>
            <h3 className="text-xl font-semibold mb-4">Messaging takes too long</h3>
            <p className="text-gray-600">
              People spend too much time thinking about what to say
            </p>
          </div>
          
          <div className="text-center p-8">
            <div className="text-4xl mb-4">😬</div>
            <h3 className="text-xl font-semibold mb-4">Messages often sound wrong</h3>
            <p className="text-gray-600">
              The wrong tone can make you seem unprofessional or awkward
            </p>
          </div>
          
          <div className="text-center p-8">
            <div className="text-4xl mb-4">💸</div>
            <h3 className="text-xl font-semibold mb-4">Bad messages cost opportunities</h3>
            <p className="text-gray-600">
              A poorly written message can end a conversation before it starts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
