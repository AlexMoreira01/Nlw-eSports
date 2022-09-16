export function convertMinutesToHourString(minutesAmount: number) {
    // Dividindo por 60 e arredondando para baixo
    const hours = Math.floor(minutesAmount / 60);
    const minutes = minutesAmount % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}