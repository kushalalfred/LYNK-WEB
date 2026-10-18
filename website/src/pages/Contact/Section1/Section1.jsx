import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import mapImg from '../../../assets/contactImg.png';

export default function Section1() {
    const contactRef = useRef(null);

    useEffect(() => {
        const media = gsap.matchMedia();

        media.add('(prefers-reduced-motion: no-preference)', () => {
            const context = gsap.context(() => {
                gsap.timeline({ defaults: { ease: 'power3.out' } })
                    .fromTo('.contact-intro', { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.65 })
                    .fromTo('.contact-visual', { autoAlpha: 0, x: -24 }, { autoAlpha: 1, x: 0, duration: 0.6 }, '-=0.35')
                    .fromTo('.contact-form', { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.65 }, '-=0.4')
                    .fromTo('.contact-note', { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.4 }, '-=0.25');
            }, contactRef);

            return () => context.revert();
        }, contactRef);

        return () => media.revert();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const subject = 'Contact form suggestion';
        const body = [
            `Name: ${formData.get('name')}`,
            `Contact: ${formData.get('contact')}`,
            '',
            'Message:',
            formData.get('message'),
        ].join('\n');

        window.location.href = `mailto:lkni810@aucklanduni.ac.nz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section
            ref={contactRef}
            className="mx-auto w-full max-w-7xl py-12 sm:py-16 lg:py-20"
            aria-labelledby="contact-heading"
        >
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <div className="contact-visual order-2 lg:order-1">
                    <div className="contact-visual-frame relative overflow-hidden rounded-[2rem] bg-[#EAE6DC] p-5 sm:p-8">
                        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#FF5A5F]/10" />
                        <img
                            src={mapImg}
                            className="relative mx-auto h-64 w-full object-contain sm:h-80 lg:h-[420px]"
                            alt="Illustration showing how to get in touch with LYNK"
                        />
                        <div className="contact-visual-card relative mx-auto mt-2 max-w-sm rounded-2xl border border-white/70 bg-white/80 px-5 py-4 text-center shadow-sm backdrop-blur">
                            <p className="font-bold text-[#162032]">We’re here to help</p>
                            <p className="mt-1 text-sm text-gray-600">
                                Send us your question or suggestion and we’ll get back to you.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <div className="contact-intro mb-8 text-center lg:text-left">
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#FF5A5F]">
                            Contact LYNK
                        </p>
                        <h1 id="contact-heading" className="text-3xl font-extrabold leading-tight text-[#162032] sm:text-4xl lg:text-5xl">
                            We’d love to hear from you
                        </h1>
                        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0 dark:text-gray-300">
                            Have a question about our modular carry systems, or an idea to share? Drop us a message.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="contact-form rounded-3xl border border-[#162032]/[0.06] bg-white p-6 shadow-[0_20px_60px_rgba(22,32,50,0.10)] sm:p-8 lg:p-10"
                    >
                        <h2 className="mb-7 text-2xl font-bold text-[#162032]">Send us a message</h2>

                        <div className="mb-5">
                            <label htmlFor="contact-name" className="mb-2 block text-left text-sm font-semibold text-[#162032]">
                                Name
                            </label>
                            <input
                                id="contact-name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="contact-field w-full rounded-xl border border-gray-300 bg-[#F7F5F0]/60 px-4 py-3.5 text-[#162032] outline-none transition focus:border-[#FF5A5F] focus:ring-4 focus:ring-[#FF5A5F]/15"
                                placeholder="Your name"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="contact-details" className="mb-2 block text-left text-sm font-semibold text-[#162032]">
                                Email or phone
                            </label>
                            <input
                                id="contact-details"
                                name="contact"
                                type="text"
                                autoComplete="email"
                                required
                                className="contact-field w-full rounded-xl border border-gray-300 bg-[#F7F5F0]/60 px-4 py-3.5 text-[#162032] outline-none transition focus:border-[#FF5A5F] focus:ring-4 focus:ring-[#FF5A5F]/15"
                                placeholder="How can we reach you?"
                            />
                        </div>

                        <div className="mb-7">
                            <label htmlFor="contact-message" className="mb-2 block text-left text-sm font-semibold text-[#162032]">
                                Message
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                required
                                rows="5"
                                className="contact-field w-full resize-y rounded-xl border border-gray-300 bg-[#F7F5F0]/60 px-4 py-3.5 text-[#162032] outline-none transition focus:border-[#FF5A5F] focus:ring-4 focus:ring-[#FF5A5F]/15"
                                placeholder="Tell us what’s on your mind"
                            />
                        </div>

                        <button
                            type="submit"
                            className="contact-send-button w-full rounded-xl bg-[#162032] px-6 py-4 font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#24344d] focus:outline-none focus:ring-4 focus:ring-[#FF5A5F]/30"
                        >
                            Send message
                        </button>
                        <p className="contact-note mt-4 text-center text-sm text-gray-500">
                            Your email app will open with your message ready to send.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
