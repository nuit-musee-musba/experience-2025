import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

function shuffleText(text, probability) {
  return text
    .split('')
    .map((char) => {
      if (Math.random() < probability) {
        return randomChars[
          Math.floor(Math.random() * randomChars.length)
        ];
      }
      return char;
    })
    .join('');
}

export default function shuffleTextAnimation(target, newText, options = {}) {
  const { duration = 1, delay = 0, steps = 10 } = options;

  gsap.registerPlugin(TextPlugin);

  const interval = duration / steps;
  const tl = gsap.timeline({ delay: delay });

  for (let i = 0; i < steps; i++) {
    const isLastStep = i === steps - 1;

    tl.to(target, {
      duration: interval,
      text: {
        value: (() => {
          return newText
            .split('')
            .map((char) => {
              if (isLastStep) return char;
              return randomChars[
                Math.floor(Math.random() * randomChars.length)
              ];
            })
            .join('');
        })(),
      },
      ease: 'none',
    });
  }

  return tl;
}
