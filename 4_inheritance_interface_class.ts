interface ICock {
    date: Date;

    setTime(data: Date): void
}

class Clock implements ICock {
    date: Date = new Date();

    setTime(data: Date): void {
        this.date = data;
    }
}
