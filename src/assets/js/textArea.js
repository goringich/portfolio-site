const textArea = document.querySelectorAll("[data-autoresize]")

textArea.forEach(item => {
    item.addEventListener("input", event => {
        let textAreaH = item.offsetHeight;
        let $this = event.target;

        $this.style.height = textAreaH + "px";
        $this.style.height = $this.scrollHeight + "px";
    })
})
