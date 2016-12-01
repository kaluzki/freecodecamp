export default (arr: number[]) : number => {
    const min = Math.min.apply(undefined, arr) - 1,
          max = Math.max.apply(undefined, arr);
    return (max*(max+1))/2 - (min*(min+1))/2;
}