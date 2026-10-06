import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
    {
        id: 1,
        question: "What products do you offer?",
        answer:"We offer a wide range of high-quality products designed to meet different customer needs.",
    },
    {
        id: 2,
        question: "How can I place an order?",
        answer:"Select the product you want, add it to your cart, and proceed to checkout to place your order.",
    },
    {
        id: 3,
        question: "What payment methods do you accept?",
        answer:"We accept credit/debit cards, UPI, net banking, and other available online payment methods.",
    },
    {
        id: 4,
        question: "How long does delivery take?",
        answer:"Orders are usually delivered within 3–7 business days, depending on your location.",
    },
    {
        id: 5,
        question: "Can I cancel my order?",
        answer:"Yes, you can cancel your order if it has not been shipped yet.",
    },
    {
        id: 6,
        question: "Do you offer returns or exchanges?",
        answer:"Yes, eligible products can be returned or exchanged according to our return policy.",
    },
    {
        id: 7,
        question: "How can I track my order?",
        answer:"Once your order is shipped, you will receive tracking information to check its delivery status.",
    },
    {
        id: 8,
        question: "How can I contact customer support?",
        answer: "You can contact our support team through email, phone, or the Contact Us page.",
    },
];

function App() {
    const [search, setSearch] = useState("");
    const [faqId, setfaqId] = useState(null);

    const filteredFaqs = faqs.filter((faq) =>
        faq.question.toLowerCase().includes(search.toLowerCase())
    );

    const handleToggle = (id) => {
        if (faqId === id) {
            setfaqId(null);
        } else {
            setfaqId(id);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="flex gap-4 mb-6 ">
                <h1 className="text-3xl font-bold mb-4">
                    FAQ
                </h1>

                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none"
                />
            </div>
            <div className="space-y-3">
                {filteredFaqs.map((faq) => (
                    <div
                        key={faq.id}
                        className="border border-gray-300 rounded-md"
                    >
                        <button
                            onClick={() => handleToggle(faq.id)}
                            className="w-full flex items-center justify-between px-4 py-3 text-left"
                        >
                            <span className="font-medium">
                                {faq.question}
                            </span>

                            {faqId === faq.id ? (
                                <ChevronUp size={20} />
                            ) : (
                                <ChevronDown size={20} />
                            )}
                        </button>

                        {faqId === faq.id && (
                            <p className="border-t border-gray-300 px-4 py-3 text-gray-600">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
}

export default App;