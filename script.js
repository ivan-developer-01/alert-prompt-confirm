function $_(selector) {
    return document.querySelector(selector);
}

const alertButton = $_(".alert-button"),
      promptButton = $_(".prompt-button"),
      confirmButton = $_(".confirm-button");

[alertButton, promptButton, confirmButton].forEach(btn => {
    btn.addEventListener("click", async () => {
        const splittedClass = btn.classList[0]?.split("-");
        const functionName = splittedClass[0] + "s"; // e.g. alerts ("alert" + "s")

        const input = $_("." + splittedClass[0] + "-input");
        
        await alerts({
            modalMessage: await window[functionName]({
                modalMessage: input.value
            })
        });
    });
});
