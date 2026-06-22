"use client";

import { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
        alert("Message sent!");
    };

    return (
        <section id="contact" className="px-8 py-16">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
                <input
                    name="name"
                    placeholder="Your Name"
                    onChange={handleChange}
                    required
                    className="border p-2 rounded"
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    required
                    className="border p-2 rounded"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    onChange={handleChange}
                    required
                    className="border p-2 rounded"
                />
                <button type="submit" className="bg-black text-white py-2 rounded">
                    Send
                </button>
            </form>
        </section>
    );
};

export default Contact;