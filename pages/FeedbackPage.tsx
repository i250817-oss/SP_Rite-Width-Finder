import React, { useState } from 'react';

interface FeedbackPageProps {
  onNavigate: (page: string) => void;
}

const FeedbackPage: React.FC<FeedbackPageProps> = ({ onNavigate }) => {
  const [feedbackType, setFeedbackType] = useState<'bug' | 'feature' | 'suggestion'>('bug');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!name || !email || !title || !description) {
      alert('Please fill in all fields');
      return;
    }

    // Prepare feedback data
    const feedbackData = {
      type: feedbackType,
      name,
      email,
      title,
      description,
      timestamp: new Date().toISOString()
    };

    // Log to console (in production, this would be sent to a server)
    console.log('Feedback submitted:', feedbackData);

    // Create GitHub issue format
    const githubIssueBody = `
**Feedback Type:** ${feedbackType.toUpperCase()}
**Name:** ${name}
**Email:** ${email}

## ${title}

${description}

---
*Submitted via SP_Rite Width Finder on ${new Date().toLocaleString()}*
    `;

    // Show success message
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setName('');
      setEmail('');
      setTitle('');
      setDescription('');
      setSubmitted(false);
    }, 3000);

    // Alert user with next steps
    alert(
      `Thank you for your feedback!\n\nType: ${feedbackType}\nTitle: ${title}\n\nYou can also submit this directly on GitHub: https://github.com/i250817-oss/SP_Rite-Width-Finder/issues`
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">💬 Feedback & Bug Reports</h2>
        <p className="text-slate-300 text-lg">
          Help us improve SP_Rite Width Finder by reporting bugs, suggesting features, or sharing your feedback.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-slate-300">Your feedback has been received and will be reviewed shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Feedback Type */}
                <div>
                  <label className="block text-white font-semibold mb-3">
                    Feedback Type *
                  </label>
                  <div className="flex gap-4">
                    {['bug', 'feature', 'suggestion'].map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="feedbackType"
                          value={type}
                          checked={feedbackType === type}
                          onChange={(e) => setFeedbackType(e.target.value as 'bug' | 'feature' | 'suggestion')}
                          className="w-4 h-4"
                        />
                        <span className="text-slate-300 capitalize">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ahmad Ali"
                    className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Title */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Brief summary of your feedback"
                    className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Description *
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Please provide detailed information about your feedback..."
                    rows={6}
                    className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  Submit Feedback
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Info Panel */}
        <div className="space-y-6">
          {/* How to Report a Bug */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4">🐛 How to Report a Bug</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">1.</span>
                <span>Describe the issue clearly</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">2.</span>
                <span>Include steps to reproduce</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">3.</span>
                <span>Share expected vs actual behavior</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">4.</span>
                <span>Include screenshots if possible</span>
              </li>
            </ul>
          </div>

          {/* Feature Requests */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4">✨ Feature Requests</h3>
            <p className="text-slate-300 text-sm mb-4">
              Have an idea to make SP_Rite Width Finder better? We'd love to hear it!
            </p>
            <a
              href="https://github.com/i250817-oss/SP_Rite-Width-Finder/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-400 hover:text-blue-300 font-semibold"
            >
              View GitHub Issues →
            </a>
          </div>

          {/* Contact Info */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4">📧 Contact Ahmad Ali</h3>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/ahmad-ali-745606385/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-400 hover:text-blue-300 text-sm font-semibold"
              >
                🔗 LinkedIn Profile
              </a>
              <a
                href="https://github.com/i250817-oss/SP_Rite-Width-Finder"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-400 hover:text-blue-300 text-sm font-semibold"
              >
                🐙 GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
