function Contact() {
    return (
        <>
            <div className="">
                <input
                    className="flex-1 border border-gray-700 rounded-lg p-2 w-full"
                    type="text"
                    placeholder="Name"
                    required
                />
                <input
                    className="flex-1 border border-gray-700 rounded-lg p-2 w-full mt-3"
                    type="email"
                    placeholder="Email"
                    required
                />
                <textarea
                    name="message"
                    className="flex-1 border border-gray-700 rounded-lg p-2 w-full min-h-50 max-h-100 mt-3"
                    id="message-input"
                    placeholder="Your Message"
                ></textarea>
                <div className="flex justify-end mt-3">
                    <button
                        className="bg-amber-300 hover:bg-amber-400 text-gray-950 font-sm px-5 py-1 rounded-lg"
                        type="submit"
                        id="submit-btn"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}

export default Contact;
