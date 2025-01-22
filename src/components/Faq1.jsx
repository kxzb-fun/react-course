import { useState } from "react";

// 单个 FAQ 项目组件
function FAQItem({ qa, isOpen, toggleClick }) {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* <h3 onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}> */}
      <h3 onClick={toggleClick} style={{ cursor: "pointer" }}>
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
  const handleToggle=(index)=>{
    console.log(index)
    setIsOpen(index)
  }
  const [isOpen, setIsOpen] = useState(-1);// index -1    012

  return (
    <div>
      <h1>FAQ</h1>
      {faqData.map((faq, index) => (
        <FAQItem key={index} qa={faq} toggleClick={()=>handleToggle(index)} isOpen={isOpen===index}/>
      ))}
    </div>
  );
}
