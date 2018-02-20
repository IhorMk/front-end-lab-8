const forEach = (arr, el) => {
    let i = 0;
    while (i < arr.length) {
        el(arr[i]);
        i++;
    }
}