// Hint: use setInterval, create a new Promise and measure time with Date.now()

const maxDelay = 60000;

export function delay(time) {
  const now = Date.now();
  return new Promise((resolve, reject) => {
    if (time < maxDelay) {
      setInterval(() => { resolve(Date.now() - now); }, time);
    } else {
      reject(new Error('This time is too much !'));
    }
  });
}

export async function asyncDelay(time) {
  const delayedTime = await delay(time);
  return delayedTime;
}
