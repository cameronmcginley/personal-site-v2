// textAnimate.js
function TextAnimate() {
  return {
    text: "Alpine Animation",
    char: -1,
    animate() {
      let timer = setInterval(() => {
        this.char++;
        if (this.char === this.text.length) {
          clearInterval(timer);
          timer = null;
          return;
        }
      }, 50);
    },
  };
}

export default TextAnimate;
