import { useEffect } from "react";

interface BSODScreenProps {
	isActive: boolean;
	onClose: () => void;
}

const BSODScreen = ({ isActive, onClose }: BSODScreenProps) => {
	useEffect(() => {
		if (!isActive) return;

		const handleKeyPress = (e: KeyboardEvent) => {
			if (e.key === "Escape" || e.key === "Enter") {
				onClose();
			}
		};

		const handleClick = () => {
			onClose();
		};

		window.addEventListener("keydown", handleKeyPress);
		window.addEventListener("click", handleClick);

		return () => {
			window.removeEventListener("keydown", handleKeyPress);
			window.removeEventListener("click", handleClick);
		};
	}, [isActive, onClose]);

	if (!isActive) return null;

	return (
		<div className="fixed inset-0 z-[99999] bg-[#0000AA] text-white font-mono flex items-center justify-center p-8 animate-fade-in cursor-pointer">
			<div className="max-w-4xl w-full space-y-6">
				{/* Title Bar */}
				<div className="bg-[#AAAAAA] text-black px-4 py-2 font-bold text-center">
					Windows
				</div>

				{/* Main Error Content */}
				<div className="space-y-4 text-white">
					<p className="text-center text-xl font-bold">
						A fatal exception 0E has occurred at 0028:C0011E36 in
						VXD VMM(01) +
					</p>
					<p className="text-center text-xl font-bold">
						00010E36. The current application will be terminated.
					</p>

					<div className="border-2 border-white p-6 mt-8 space-y-3">
						<p>
							* Press any key to terminate the current
							application.
						</p>
						<p>
							* Press CTRL+ALT+DEL again to restart your computer.
							You will
						</p>
						<p className="pl-4">
							lose any unsaved information in all applications.
						</p>
					</div>

					<div className="mt-8 space-y-2 text-sm">
						<p>Press any key to continue _</p>
					</div>
				</div>

				{/* Easter Egg Message */}
				<div className="mt-12 text-center text-xs opacity-75 space-y-1">
					<p>Just kidding! Your computer is fine (probably).</p>
					<p className="italic">
						Click anywhere or press ESC to escape this nightmare
					</p>
				</div>

				{/* System Info */}
				<div className="absolute bottom-4 left-4 text-xs opacity-50">
					<p>FATAL_EXCEPTION_ERROR_404_DEVELOPER_NOT_FOUND</p>
					<p>Stack Overflow karma: DEPLETED</p>
				</div>
			</div>
		</div>
	);
};

export default BSODScreen;
