const findDuplicates = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          console.log(`Duplicate element: ${arr[i]}`);
        }
      }
    }
  };
  
  const arr = [1, 2, 3, 4, 5, 2, 3];
  findDuplicates(arr);
  