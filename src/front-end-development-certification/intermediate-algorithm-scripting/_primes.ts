export default class Primes {
    private static _known: number[] = [2, 3, 5, 7, 11];

    private static _calculate(num: number): number[] {
        const lastPrime = Primes._known[Primes._known.length - 1];
        if (num <= lastPrime) {
            return Primes._known;
        }
        let i: number, j: number;
        for (i = lastPrime + 2; i <= num; i += 2) {
            for (j = 2; j < i / 2; j++) {
                if (i % j === 0) {
                    break;
                }
            }
            if (i % j) {
                Primes._known.push(i);
            }
        }
        return Primes._known;
    }

    static to(to: number): number[] {
        return Primes.range(1, to);
    }

    static range(from: number, to: number): number[] {
        const range: number[] = [],
            known = Primes._calculate(to);

        for (let i = 0; known[i] <= to; i++) {
            if (known[i] >= from) {
                range.push(known[i])
            }
        }
        return range;
    }

    static is(prime: number): boolean {
        return Primes._calculate(prime).indexOf(prime) >= 0;
    }
}