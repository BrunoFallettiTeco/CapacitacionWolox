// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  const now = Date.now();
  return new Promise((resolve, reject) => {
    setInterval(() => { resolve(Date.now() - now); }, time);
  });
}

export function asyncDelay() {

}
