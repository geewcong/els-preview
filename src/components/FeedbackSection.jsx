import { useState } from 'react';

export default function FeedbackSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    viewerType: '',
    rating: '',
    feedback: '',
    agree: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="feedback" className="py-16 sm:py-24 bg-muted">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-sm border border-border">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">Your feedback has been received</h3>
            <p className="text-muted-foreground mb-6">We truly appreciate it.</p>
            <button onClick={() => { setSubmitted(false); setFormData({ email: '', viewerType: '', rating: '', feedback: '', agree: false }); }}
              className="text-primary font-medium hover:underline">
              Submit another response
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="feedback" className="py-16 sm:py-24 bg-muted">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Help us <span className="text-primary">improve</span>
          </h2>
          <p className="text-muted-foreground">Help us improve Emotion Little Stars for every child and family.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email</label>
            <input type="email" required placeholder="Please enter a valid email address"
              value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>

          {/* Viewer Type */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Viewer Type</label>
            <select required value={formData.viewerType} onChange={e => setFormData({...formData, viewerType: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
              <option value="">Please select a viewer type</option>
              <option value="parent">Parent</option>
              <option value="educator">Educator</option>
              <option value="collaborator">Potential Collaborator</option>
              <option value="child">Child</option>
            </select>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Rating</label>
            <select required value={formData.rating} onChange={e => setFormData({...formData, rating: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
              <option value="">Please select a rating</option>
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Good</option>
              <option value="3">⭐⭐⭐ Average</option>
              <option value="2">⭐⭐ Below Average</option>
              <option value="1">⭐ Poor</option>
            </select>
          </div>

          {/* Feedback */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">What should we improve next?</label>
            <textarea required rows={4} placeholder="Please share at least a few words"
              value={formData.feedback} onChange={e => setFormData({...formData, feedback: e.target.value})}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-vertical" />
          </div>

          {/* Agree */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" required checked={formData.agree} onChange={e => setFormData({...formData, agree: e.target.checked})}
              className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary/50" />
            <span className="text-sm text-muted-foreground">I agree that my feedback may be reviewed to improve Emotion Little Stars content and website experience.</span>
          </label>

          <button type="submit"
            className="w-full py-3 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            Submit Feedback
          </button>
        </form>
      </div>
    </section>
  );
}
