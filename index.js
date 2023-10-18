const MyComponent = () => {
  let count = 20;

  console.log(++count);
  console.log(count++);
  return count;
};

export default MyComponent;
