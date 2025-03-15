import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [emailCount, setEmailCount] = useState(0);
    const [lastSendTime, setLastSendTime] = useState(0);

    useEffect(() => {
        const storedEmailCount = localStorage.getItem("emailCount");
        const storedLastSendTime = localStorage.getItem("lastSendTime");
        if (storedEmailCount && storedLastSendTime) {
            setEmailCount(parseInt(storedEmailCount));
            setLastSendTime(parseInt(storedLastSendTime));
        }
    }, []);

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        const now = new Date().getTime();
        const timeDiff = now - lastSendTime;

        if (timeDiff > 2592000000) {
            // 1 hari
            setEmailCount(0);
            localStorage.setItem("emailCount", 0);
        }

        if (emailCount >= 200) {
            // batas pengiriman email
            console.log("Batas pengiriman email telah tercapai");
            setLoading(false);
            return;
        }

        try {
            await emailjs.sendForm(
                "service_y3qqpgt",
                "template_2nwiavs",
                e.target,
                "Px_mZGKn4K4z3KZAp"
            );
            setLoading(false);
            setSuccess(true);
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            setLoading(false, error);
            setSuccess(false, error);
        }
    };

    return (
        <div>
            <form onSubmit={sendEmail}>
                <input
                    className="flex-1 border border-gray-700 rounded-lg p-2 w-full"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    className="flex-1 border border-gray-700 rounded-lg p-2 w-full mt-3"
                    type="email"
                    placeholder="Email"
                    name="email_from"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    name="message"
                    className="flex-1 border border-gray-700 rounded-lg p-2 w-full min-h-50 mt-3"
                    id="message-input"
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <div className="flex justify-end mt-3">
                    <button
                        className="bg-amber-300 hover:bg-amber-400 cursor-pointer text-gray-950 font-sm px-5 py-1 rounded-lg"
                        type="submit"
                        id="submit-btn"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </div>
                {success && (
                    <p className="text-sm text-green-500 mt-3">
                        Email berhasil terkirim!
                    </p>
                )}
            </form>
        </div>
    );
}

export default Contact;
