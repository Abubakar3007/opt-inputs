let otpInputs = document.querySelectorAll(".input_otp input");

otpInputs.forEach((input, index) => {
	input.dataset.index = index;
	input.addEventListener("keyup", handleOtp);
	input.addEventListener("paste", handleOnPasteOtp);
});

function handleOtp(e) {

	const input = e.target;
	let value = input.value;
	let isValidInput = value.match(/[0-9a-z]/gi);
	input.value = "";
	input.value = isValidInput ? value[0] : "";

	let fieldIndex = input.dataset.index;
	if (fieldIndex < otpInputs.length - 1 && isValidInput) {
		input.closest("li").nextElementSibling.querySelector("input").focus();
	}

	if (e.key === "Backspace" && fieldIndex > 0) {
		input.closest("li").previousElementSibling.focus();
	}

	if (fieldIndex == otpInputs.length - 1 && isValidInput) {
	}
}

function handleOnPasteOtp(e) {
	const data = e.clipboardData.getData("text");
	const value = data.split("");
	if (value.length === otpInputs.length) {
		otpInputs.forEach((input, index) => (input.value = value[index]));
	}
}