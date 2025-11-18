import { useEffect, useState } from "react";

const BSOD_CODE = ["b", "s", "o", "d"];

export const useBSODCode = () => {
	const [isActivated, setIsActivated] = useState(false);
	const [input, setInput] = useState<string[]>([]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			const key = e.key.toLowerCase();
			const newInput = [...input, key].slice(-BSOD_CODE.length);
			setInput(newInput);

			if (newInput.join("") === BSOD_CODE.join("")) {
				setIsActivated(true);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [input]);

	const reset = () => setIsActivated(false);

	return { isActivated, reset };
};
