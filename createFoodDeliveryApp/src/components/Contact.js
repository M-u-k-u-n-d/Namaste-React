import React from 'react';

const Contact = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <div className="bg-gray-100 rounded-lg p-6">
                <p className="text-gray-700 mb-4">If you have any questions or inquiries, feel free to reach out to us.</p>
                <p className="text-gray-700 mb-2"><span className="font-bold">Email:</span> mukundtiwari251103@gmail.com</p>
                <p className="text-gray-700 mb-2"><span className="font-bold">Phone:</span> +91-7217717263</p>
                <p className="text-gray-700 mb-2"><span className="font-bold">Address:</span> Ballia, UttarPradesh, India</p>

                {/* Text box for contacting */}
                <textarea 
                    className="w-full h-40 p-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none mt-4 placeholder-gray-400" 
                    placeholder="Contact me here..."
                ></textarea>
            </div>
        </div>
    );
}

export default Contact;
