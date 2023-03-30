// Getting ready to practice React Hooks by using useState and useEffect
import { useState, useEffect } from 'react'

export default function Clock(props) {

    const [ date, setDate ] = useState();

    useEffect(() => {
        let myInterval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(myInterval)
        }
    }, []);

    return (
        <>
            {date?.toLocaleTimeString(props.locale)}
        </>
    );
}

Clock.defaultProps = {
    locale: "fr-CA"
}
