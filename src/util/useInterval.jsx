// godly function made by Dan Abramov -- source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import {useEffect, useRef} from 'react';
export const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            // tick()
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}