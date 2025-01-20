import { useState } from "react";

// 单个 FAQ 项目组件
function FAQItem({ qa }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h3 onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
        {qa.question} {isOpen ? "▲" : "▼"}
      </h3>
      {isOpen && <p>{qa.answer}</p>}
    </div>
  );
}

export default function FAQList() {
  const faqData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is a component?",
      answer: "A component is a reusable piece of UI.",
    },
    {
      question: "What is state?",
      answer: "State is a way to manage dynamic data in React.",
    },
  ];

  return (
    <div>
      <h1>FAQ</h1>
      {faqData.map((faq, index) => (
        <FAQItem key={index} qa={faq} />
      ))}
    </div>
  );
}
