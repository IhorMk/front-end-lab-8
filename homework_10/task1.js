const debounce = (callback, time) => {
  let interval = 0;
  return () => {
    clearTimeout(interval);
    interval = setTimeout(callback, time);
  };
};

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log("Iterator value ", iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();