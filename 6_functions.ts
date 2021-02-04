// =====================================================================================================================
// ====================================================== function =====================================================
// =====================================================================================================================
function add(a: number, b: number): number {
    return a + b;
}

function toUpperCase(str: string): string {
    return str.toUpperCase();
}

// =====================================================================================================================
// =================================================== function void ===================================================
// =====================================================================================================================
function someFunction_1(name: string): void {
    console.log(name)
}

someFunction_1("Hello TypeScript !!!");

// =====================================================================================================================
// =================================================== function never ==================================================
// =====================================================================================================================
function someFunction_2(message: string): never {
    throw new Error(message)
}

function someFunction_3(message: string): never {
    while (true) {

    }
}

// someFunction_2('Some Error !!!');

// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
interface Position {
    x: number | undefined;
    y: number | undefined;
}

interface PositionWithDefault extends Position{
    default: string;
}

function position(): Position
function position(a: number): PositionWithDefault
function position(a: number, b: number): Position

function position(a?: number, b?: number) {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    }
    if (a && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }
    return {x: a, y: b}
}

console.log('Empty: ', position());
console.log('One parameter: ', position(10));
console.log('Two parameters: ', position(10, 20));
