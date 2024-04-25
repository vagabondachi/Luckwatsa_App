import React, { useState, useEffect } from 'react';

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeek = daysOfWeek[time.getDay()];
    const dayOfMonth = time.getDate();
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];
    const monthName = monthNames[time.getMonth()];

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const dayPeriod = hours < 12 ? 'AM' : 'PM';

    const digitMinutes = (minutes < 10 ? '0' : '') + minutes;
    const formattedTime = hours + ':' + digitMinutes;

    return (
        <div className="time-container">
            <span>{formattedTime}</span>
            <span>{dayPeriod}</span>
            <div className="additional-info">
                <span>{dayOfWeek}</span>
                <span>{dayOfMonth} {monthName}</span>
            </div>
        </div>
    );
}
