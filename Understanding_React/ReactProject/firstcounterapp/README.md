COUNTER APP <br>
First counter app using react+vite

--> using arrow function, Counter reusable component


    function Couter() {
        const [counter, setCounter] = useState(0);

        const handleDecrement = () => {
            setCounter(counter-1);
        }

        const handleIncrement = () => {
            setCounter(counter+1);
        }
    }
    return {
        <>
            body...
        </>
    }


    Exported this file to app.jsx

    
    In App.jsx import the component Counter.jsx in return part of the function