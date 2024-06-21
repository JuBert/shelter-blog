import { createSignal, onCleanup } from "solid-js";

export default function CountingComponent() {
	const [count, setCount] = createSignal(0);
	const interval = setInterval(
		() => setCount(c => c + 1),
		1000
	);

	onCleanup(() => clearInterval(interval));
    
	return (
		<div class="w-full p-4 my-2 flex justify-center">
			<p>Count value is {count()}</p>
		</div>
	);
};
