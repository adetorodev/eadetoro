'use client';

import { Button } from '@/components/Button';
import { Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.',
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="container-custom py-24 min-h-[80vh] flex flex-col md:flex-row gap-16 md:gap-24 relative">
      {/* Background glow */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-brand-primary/10 blur-[120px] pointer-events-none" />

      {/* Left side text */}
      <div className="flex-1 z-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Get in touch.</h1>
        <p className="text-lg text-content-secondary leading-relaxed mb-12 max-w-md">
          I'm currently open to new roles, freelance consulting, and collaborative research opportunities. Send me a message and I'll get back to you as soon as I can.
        </p>

        <div className="flex flex-col gap-6">
          <a href="mailto:adetoroe787@gmail.com" className="flex items-center gap-4 text-content-secondary hover:text-brand-primary transition-colors group">
            <div className="w-12 h-12 rounded-full bg-background-secondary border border-border flex items-center justify-center group-hover:border-brand-primary/50 transition-colors">
              <Mail size={20} />
            </div>
            <span className="font-medium">adetoroe787@gmail.com</span>
          </a>

          <Link href="https://www.linkedin.com/in/ezadetoro/" target="_blank" className="flex items-center gap-4 text-content-secondary hover:text-brand-primary transition-colors group">
            <div className="w-12 h-12 rounded-full bg-background-secondary border border-border flex items-center justify-center group-hover:border-brand-primary/50 transition-colors">
              <Linkedin size={20} />
            </div>
            <span className="font-medium">LinkedIn Profile</span>
          </Link>

          <Link href="https://github.com/adetorodev" target="_blank" className="flex items-center gap-4 text-content-secondary hover:text-brand-primary transition-colors group">
            <div className="w-12 h-12 rounded-full bg-background-secondary border border-border flex items-center justify-center group-hover:border-brand-primary/50 transition-colors">
              <Github size={20} />
            </div>
            <span className="font-medium">GitHub Projects</span>
          </Link>

          <Link href="https://drive.google.com/file/d/1y47NZyhMUXoYRhrJkCeb44pyEjbSSe82/view?usp=sharing" target="_blank" className="flex items-center gap-4 text-content-secondary hover:text-brand-primary transition-colors group">
            <div className="w-12 h-12 rounded-full bg-background-secondary border border-border flex items-center justify-center group-hover:border-brand-primary/50 transition-colors">
              <Mail size={20} />
            </div>
            <span className="font-medium">Resume</span>
          </Link>
        </div>
      </div>

      {/* Right side form */}
      <div className="flex-1 w-full max-w-md z-10">
        <form
          onSubmit={handleSubmit}
          className="bg-background-secondary border border-border rounded-2xl p-8 flex flex-col gap-6 shadow-xl"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-content-secondary">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background-primary border border-border rounded-lg h-12 px-4 text-content-primary focus:outline-none focus:border-brand-primary transition-colors"
              placeholder="John Doe"
              disabled={isLoading}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-content-secondary">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background-primary border border-border rounded-lg h-12 px-4 text-content-primary focus:outline-none focus:border-brand-primary transition-colors"
              placeholder="john@example.com"
              disabled={isLoading}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-content-secondary">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-background-primary border border-border rounded-lg p-4 text-content-primary focus:outline-none focus:border-brand-primary transition-colors resize-none"
              placeholder="How can we work together?"
              disabled={isLoading}
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </Button>

          {submitStatus.type === 'success' && (
            <div className="flex items-gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <Check size={20} className="text-green-500 flex-shrink-0" />
              <p className="text-sm text-green-400">{submitStatus.message}</p>
            </div>
          )}

          {submitStatus.type === 'error' && (
            <div className="flex items-gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <AlertCircle size={20} className="text-red-500 flex-shrink-0" />
              <p className="text-sm text-red-400">{submitStatus.message}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
