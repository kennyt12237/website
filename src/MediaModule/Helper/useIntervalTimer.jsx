export default function useIntervalTimer(callback, time) {

	let interval;

	const start = () => {
		interval = setInterval(callback, time);
	}

	const stop = () => {
		clearInterval(interval);
	}

	return { start, stop}
}