const collectlds = (arr) => {
    return getTransformedArray(getFilteredArray(arr, el => el.rating > 3), el => el.id);
}