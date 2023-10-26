export function generalTypeGuard<Tinput, Toutput extends Tinput>(value: Tinput, key: string): value is Toutput {
    return (value as Toutput)[key] !== undefined;
}
export function isDefined<T>(value: T): value is NonNullable<T> {
    return value !== null && value !== undefined;
}

export function notDefined<T>(value: T | null | undefined): value is null | undefined {
    return value === null || value === undefined;
}

export function definedNumber(value: string | number | null | undefined): value is number {
    if (value === '' || value === null || value === undefined) {
        return false;
    }

    return !Number.isNaN(+value);
}

export function isArrayOfPrimitive<T>(array: T[] | number[] | string[]): array is string[] | number[] {
    return typeof array[0] !== 'object';
}
