export const getyears = () => {
    const minYear = 2006
    const maxYear = 2020
    const years = [];
    for (
        var i = minYear;
        i <= maxYear;
        i++
    ) {
        years.push({ id: i, name: i });
    }
    return years;
};