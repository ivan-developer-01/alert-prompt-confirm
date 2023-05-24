function prompts({ modalMessage = "Введите текст:",
		modalCancelBtnMessage = "Отмена",
		modalSubmitBtnMessage = "Отправить"} = {}) {

	const modalOuter = document.createElement("div");
	modalOuter.classList.add("modal-outer");

	const modalElem = document.createElement("div"),
		  modalBgElem = document.createElement("div"),
		  modalMessageElem = document.createElement("div"),
		  modalInputWrapper = document.createElement("div"),
		  modalInput = document.createElement("input"),
		  modalBtnWrapper = document.createElement("div"),
		  modalCancelBtn = document.createElement("button"),
		  modalSubmitBtn = document.createElement("button");
		  
	// add CSS classes
	modalBgElem.classList.add("modal-bg");

	modalElem.classList.add("modal");
	modalMessageElem.classList.add("modal-message");
	modalInputWrapper.classList.add("modal-input-wrapper");
	modalInput.classList.add("modal-input");
	modalBtnWrapper.classList.add("modal-btn-wrapper");
	modalCancelBtn.classList.add("modal-cancel-btn");
	modalSubmitBtn.classList.add("modal-submit-btn");

	[modalCancelBtn, modalSubmitBtn].forEach(btn => {
		btn.classList.add("modal-btn");
	});

	// add nesting (add all elements to needed structure)
	modalBtnWrapper.appendChild(modalCancelBtn);
	modalBtnWrapper.appendChild(modalSubmitBtn);
	modalInputWrapper.appendChild(modalInput);
	modalElem.appendChild(modalMessageElem);
	modalElem.appendChild(modalInputWrapper);
	modalElem.appendChild(modalBtnWrapper);
	modalOuter.appendChild(modalBgElem);
	modalOuter.appendChild(modalElem);

	modalInput.setAttribute("type", "text");
	modalMessageElem.innerHTML = modalMessage;
	modalCancelBtn.textContent = modalCancelBtnMessage;
	modalSubmitBtn.textContent = modalSubmitBtnMessage;

	document.body.appendChild(modalOuter);

	function keyEsc(event) {
		if (event.key === "Escape") {
			remove();
		}
	}

	window.addEventListener("keydown", keyEsc);

	function remove() {
		modalOuter.remove();
		window.removeEventListener("keydown", keyEsc);
	}

	return new Promise((resolve, reject) => {
		modalCancelBtn.addEventListener("click", () => {
			resolve(null);
			remove();
		});

		modalSubmitBtn.addEventListener("click", () => {
			resolve(modalInput.value);
			remove();
		});

		modalInput.addEventListener("keydown", (event) => {
			if (event.key === "Enter") {
				resolve(modalInput.value);
				remove();
			}

			if (event.key === "Escape") {
				modalCancelBtn.click();
			}
		});

		modalInput.focus();
	});
}

function alerts({ modalMessage = "",
		modalSubmitBtnMessage = "OK"} = {}) {

	const modalOuter = document.createElement("div");
	modalOuter.classList.add("modal-outer");

	const modalElem = document.createElement("div"),
		  modalBgElem = document.createElement("div"),
		  modalMessageElem = document.createElement("div"),
		  modalBtnWrapper = document.createElement("div"),
		  modalCloseBtn = document.createElement("div"),
		  modalSubmitBtn = document.createElement("button");
		  
	// add CSS classes
	modalBgElem.classList.add("modal-bg");

	modalElem.classList.add("modal");
	modalElem.classList.add("modal-alert");
	modalMessageElem.classList.add("modal-message");
	modalBtnWrapper.classList.add("modal-btn-wrapper");
	modalCloseBtn.classList.add("modal-close-button");
	modalSubmitBtn.classList.add("modal-submit-btn");

	[modalSubmitBtn].forEach(btn => {
		btn.classList.add("modal-btn");
	});

	// add nesting (add all elements to needed structure)
	modalElem.appendChild(modalCloseBtn);
	modalBtnWrapper.appendChild(modalSubmitBtn);
	modalElem.appendChild(modalMessageElem);
	modalElem.appendChild(modalBtnWrapper);
	modalOuter.appendChild(modalBgElem);
	modalOuter.appendChild(modalElem);

	modalMessageElem.innerHTML = modalMessage;
	modalCloseBtn.textContent = "✖";
	modalSubmitBtn.textContent = modalSubmitBtnMessage;

	document.body.appendChild(modalOuter);

	function keyEsc(event) {
		if (event.key === "Escape" || event.key === "Enter") {
			remove();
		}
	}

	window.addEventListener("keydown", keyEsc);

	function remove() {
		modalOuter.remove();
		window.removeEventListener("keydown", keyEsc);
	}

	return new Promise((resolve, reject) => {
		modalCloseBtn.addEventListener("click", () => {
			resolve();
			remove();
		});

		modalSubmitBtn.addEventListener("click", () => {
			resolve();
			remove();
		});

		modalSubmitBtn.focus();
	});
}

function confirms({ modalMessage = "Вы уверены?",
		modalCancelBtnMessage = "Нет",
		modalSubmitBtnMessage = "Да"} = {}) {

	const modalOuter = document.createElement("div");
	modalOuter.classList.add("modal-outer");

	const modalElem = document.createElement("div"),
		  modalBgElem = document.createElement("div"),
		  modalMessageElem = document.createElement("div"),
		  modalBtnWrapper = document.createElement("div"),
		  modalCancelBtn = document.createElement("button"),
		  modalSubmitBtn = document.createElement("button");
		  
	// add CSS classes
	modalBgElem.classList.add("modal-bg");

	modalElem.classList.add("modal");
	modalElem.classList.add("modal-confirm");
	modalMessageElem.classList.add("modal-message");
	modalBtnWrapper.classList.add("modal-btn-wrapper");
	modalCancelBtn.classList.add("modal-cancel-btn");
	modalSubmitBtn.classList.add("modal-submit-btn");

	[modalCancelBtn, modalSubmitBtn].forEach(btn => {
		btn.classList.add("modal-btn");
	});

	// add nesting (add all elements to needed structure)
	modalBtnWrapper.appendChild(modalCancelBtn);
	modalBtnWrapper.appendChild(modalSubmitBtn);
	modalElem.appendChild(modalMessageElem);
	modalElem.appendChild(modalBtnWrapper);
	modalOuter.appendChild(modalBgElem);
	modalOuter.appendChild(modalElem);

	modalMessageElem.innerHTML = modalMessage;
	modalCancelBtn.textContent = modalCancelBtnMessage;
	modalSubmitBtn.textContent = modalSubmitBtnMessage;

	document.body.appendChild(modalOuter);

	function keyEsc(event) {
		if (event.key === "Escape") {
			remove();
		}
	}

	window.addEventListener("keydown", keyEsc);

	function remove() {
		modalOuter.remove();
		window.removeEventListener("keydown", keyEsc);
	}

	return new Promise((resolve, reject) => {
		modalCancelBtn.addEventListener("click", () => {
			resolve(false);
			remove();
		});

		modalSubmitBtn.addEventListener("click", () => {
			resolve(true);
			remove();
		});

		function keyEsc(event) {
			if (event.key === "Escape") {
				remove();
				resolve(false);
			}
		}
	
		window.addEventListener("keydown", keyEsc);

		modalSubmitBtn.focus();
	});
}
