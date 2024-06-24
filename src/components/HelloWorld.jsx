import { createSignal, onCleanup } from "solid-js";
import { Button } from '@components/util/Button';

export default function CountingComponent() {
	const [count, setCount] = createSignal(0);
	const interval = setInterval(
		() => setCount(c => c + 1),
		1000
	);

	const handleClick = () => console.log('Nested handleClick')

	onCleanup(() => clearInterval(interval));
    
	return (
		<div class="w-full py-4 my-2 flex flex-col justify-center">
			<p>Count value is {count()}</p>
			<Button 
				text='my nested button'
				variant='secondary'
				handleClick={handleClick}
			/>
		</div>
	);
};
