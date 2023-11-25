export const getDayAgo = (targetDate) => {
    const currentDate = new Date();
    const targetDateTime = new Date(targetDate).getTime();
    const currentDateTime = currentDate.getTime();
    const deff = currentDateTime - targetDateTime;
    const deffDays = Math.floor(deff / (24 * 60 * 60 * 1000));
    return deffDays;
}