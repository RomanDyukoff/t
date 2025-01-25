const fetchData = (path) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // if (Math.random() < 0.2) {
      //   reject(new Error(`Ошибка получения:`, path));
      // } else {
      // }
      resolve(path);
    }, 500);
  });
};

export { fetchData };
