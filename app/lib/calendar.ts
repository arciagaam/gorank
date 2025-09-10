export const getCalendarDays = (date: Date): Date[] => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const firstDayOfWeek = firstDay.getDay();

    const daysInMonth = lastDay.getDate();

    const days: Date[] = [];

    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
        const prevDate = new Date(year, month, -i);
        days.push(prevDate);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        days.push(new Date(year, month, day));
    }

    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
        days.push(new Date(year, month + 1, day));
    }

    return days;
};
