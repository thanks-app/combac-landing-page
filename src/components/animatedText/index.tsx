import { motion } from "framer-motion";
import type { Target } from "framer-motion";

interface Props {
  text: string;
  initial?: Target;
  whileInView?: Target;
}

function AnimatedText({ text, initial, whileInView }: Props) {
  const isArabic = /[\u0600-\u06FF]/.test(text);

  if (isArabic) {
    return (
      <div dir="rtl" className="inline-block">
        {text.split(" ").map((word, wordIndex) => (
          <div key={wordIndex} className="inline-block whitespace-pre text-inherit">
            <motion.span
              className="inline-block whitespace-pre z-10"
              initial={{ opacity: 0, y: "20%", ...initial }}
              whileInView={{ opacity: 1, y: "0%", ...whileInView }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: wordIndex * 0.1 }}
            >
              {word}
            </motion.span>{" "}
          </div>
        ))}
      </div>
    );
  }

  let charIndex = 0;
  return text.split(" ").map((word, wordIndex) => (
    <div key={wordIndex} className="inline-block whitespace-pre text-inherit">
      {word.split("").map((char, index) => {
        charIndex++;
        return (
          <motion.span
            key={index}
            className="inline-block whitespace-pre z-10"
            initial={{ opacity: 0, y: "-80%", ...initial }}
            whileInView={{ opacity: 1, y: "0%", ...whileInView }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", delay: charIndex * 0.05 }}
          >
            {char}
          </motion.span>
        );
      })}{" "}
    </div>
  ));
}

export default AnimatedText;
