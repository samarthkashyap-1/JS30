const toggle = document.querySelectorAll(".boxs");
      function toggleit() {
        this.classList.toggle("boxshov");
      }
      function toggleword(e) {
        this.classList.toggle("boxs-active");
      }
      toggle.forEach((boxs) => boxs.addEventListener("click", toggleit));
      toggle.forEach((boxs) => boxs.addEventListener("click", toggleword));