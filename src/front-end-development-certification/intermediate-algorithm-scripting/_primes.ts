/**
 * Implements a couple of useful methods to cope with prime numbers
 */
export default class Primes {

    /**
     * Cache for better performance
     */
    private static _known: number[] = [2, 3, 5, 7, 11];

    /**
     * Calculate all primes until the given number and store it in the cache
     */
    private static _calculate(until: number): number[] {
        const lastPrime = Primes._known[Primes._known.length - 1];
        if (until <= lastPrime) {
            return Primes._known;
        }
        let i: number, j: number;
        for (i = lastPrime + 2; i <= until; i += 2) {
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

    /**
     * Get all primes to the given threshold
     */
    static to(to: number): number[] {
        return Primes.range(1, to);
    }

    /**
     * Get a range of primes within the given borders
     */
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

    /**
     * Check if the given number is a prime
     */
    static is(prime: number): boolean {
        return Primes._calculate(prime).indexOf(prime) >= 0;
    }
}