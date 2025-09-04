import React, { useState } from "react";
import faqData from "./faqData";

const Faq = () => {
  const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null);

  const handleToggleAnswer = (index) => {
    setVisibleAnswerIndex(visibleAnswerIndex === index ? null : index); 
  };

  return (
    <div className="bg-black w-full mb-5 pb-5 text-white">
      <div id="faqheader" className="flex justify-center text-[24px] md:text-[50px] font-bold mb-8 p-10">
        FREQUENTLY ASKED QUESTIONS
      </div>

      {faqData.map((faq, index) => {
        const open = visibleAnswerIndex === index;
        return (
          <div
            key={index}
            className="flex flex-col justify-center items-center mb-4 px-4 md:px-0"
          >
            <div
              className={[
                "flex flex-col w-full max-w-[800px] rounded-xl transition-all ease-in duration-100",
                open
                  ? "border border-white/40 shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
                  : "border border-white/10",
              ].join(" ")}
            >
              <button
                type="button"
                className={[
                  "flex flex-row justify-between items-center bg-white/5 text-white p-4 md:p-5 w-full cursor-pointer",
                  open ? "rounded-t-xl" : "rounded-xl",
                ].join(" ")}
                onClick={() => handleToggleAnswer(index)}
                aria-expanded={open}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="text-sm md:text-base text-left">
                  {faq.question}
                </span>
                
              </button>
              {open && (
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className="bg-white/5 text-white p-4 md:p-5 w-full rounded-b-xl transition-all ease-in duration-300 text-sm md:text-base"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
