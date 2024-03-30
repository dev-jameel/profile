import { useRef, useEffect } from 'react';
import './cube.css';

const Cube = (newClass) => {
    const cubeRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const moveX = (clientX - innerWidth / 2) / 10;
            const moveY = (clientY - innerHeight / 2) / 10;

            cubeRef.current.style.transform = `rotateX(${moveY}deg) rotateY(${moveX}deg)`;
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        let isDragging = false;
        let previousX = 0;
        let previousY = 0;

        const cubeElement = cubeRef.current; // Capture the current value of cubeRef.current

        const handleMouseDown = (e) => {
            isDragging = true;
            previousX = e.clientX;
            previousY = e.clientY;
        };

        const handleMouseMove = (e) => {
            if (isDragging) {
                const deltaX = e.clientX - previousX;
                const deltaY = e.clientY - previousY;
                previousX = e.clientX;
                previousY = e.clientY;

                const currentTransform = cubeElement.style.transform;
                const rotateXMatch = currentTransform.match(/rotateX\((-?\d+)deg\)/);
                const rotateYMatch = currentTransform.match(/rotateY\((-?\d+)deg\)/);

                const currentX = rotateXMatch ? parseFloat(rotateXMatch[1]) : 0;
                const currentY = rotateYMatch ? parseFloat(rotateYMatch[1]) : 0;

                cubeElement.style.transform = `rotateX(${currentX - deltaY}deg) rotateY(${currentY + deltaX}deg)`;
            }
        };

        const handleMouseUp = () => {
            isDragging = false;
        };

        cubeElement.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            cubeElement.removeEventListener('mousedown', handleMouseDown); // Use the captured value
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div className={`scene ${newClass}`}>
            <div className="cube" ref={cubeRef}>
                <div className="cube__face cube__face--front"></div>
                <div className="cube__face cube__face--back"></div>
                <div className="cube__face cube__face--right"></div>
                <div className="cube__face cube__face--left"></div>
                <div className="cube__face cube__face--top"></div>
                <div className="cube__face cube__face--bottom"></div>
            </div>
        </div>
    );
};

export default Cube;
