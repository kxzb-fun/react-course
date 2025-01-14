import { useState } from "react";

// 单个 FAQ 项目组件
function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div>
      <h3 onClick={onToggle} style={{ cursor: "pointer" }}>
        {question} {isOpen ? "▲" : "▼"}
      </h3>
      {isOpen && <p>{answer}</p>}
    </div>
  );
}

// 父组件：管理所有 FAQ 的状态
export default function FAQList() {
  const [openIndex, setOpenIndex] = useState(null); // 保存当前展开的索引

  const faqData = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "What is a component?", answer: "A component is a reusable piece of UI." },
    { question: "What is state?", answer: "State is a way to manage dynamic data in React." },
  ];

  return (
    <div>
      <h1>FAQ</h1>
      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
