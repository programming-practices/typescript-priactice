interface Rect {
    readonly id: string;
    color?: string;
    size: {
        width: number;
        height: number;
    }
}

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect: RectWithArea = {
    id: '1',
    size: {
        width: 10,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
};
