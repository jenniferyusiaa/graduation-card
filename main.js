onload = () => {
  // const flowerLayout = document.querySelector(".flower-layout");
  // const c = setTimeout(() => {
  //   // document.body.classList.remove("not-loaded");
  //   flowerLayout.classList.remove("not-loaded");
  //   clearTimeout(c);
  // }, 1000);

  // gsap.fromTo(
  //   ".text-layout h1",
  //   {
  //     opacity: 0,
  //   },
  //   {
  //     opacity: 1,
  //     duration: 5,
  //     delay: 1,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: "linear",
  //   }
  // );

  const buttonLayout = document.querySelector(".text-layout button");
  const textLayout = document.querySelector(".text-layout");

  buttonLayout.addEventListener("click", () => {
    gsap.fromTo(
      textLayout,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 2.5,
      }
    );

    const flowerLayout = document.querySelector(".flower-layout");
    const c = setTimeout(() => {
      flowerLayout.classList.remove("not-loaded");
      clearTimeout(c);
    }, 2000);
  });

  const h1SpanContainer = new SplitType(".text-layout h1", {
    types: "words, chars",
  });
  const h1Span = h1SpanContainer.chars;

  const h2SpanContainer = new SplitType(".text-layout h2", {
    types: "words, chars",
  });
  const h2Span = h2SpanContainer.chars;

  let tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
  });

  gsap.fromTo(
    ".button",
    {
      transform: "translateY(100%)",
    },
    {
      transform: "translateY(0)",
      duration: 2.5,
    }
  );

  tl.fromTo(
    h1Span,
    {
      opacity: 0,
      y: "100%",
    },
    {
      opacity: 1,
      y: 0,
      duration: 2,
      stagger: 0.1,
    }
  );
};
