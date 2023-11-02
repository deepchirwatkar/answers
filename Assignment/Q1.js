function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
  
    if (number % 2 === 0 || number % 3 === 0) return false;
  
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }
  
    return true;
  }
  
  function findPrimeFactors(x) {
    const primeFactors = [];
    let number = x;
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      while (number % i === 0) {
        if (isPrime(i)) {
          primeFactors.push(i);
        }
        number /= i;
      }
    }
  
    if (number > 1 && isPrime(number)) {
      primeFactors.push(number);
    }
  
    return primeFactors;
  }
  
  function reverseDigitsAndCheckPrimeFactors(x) {
    const primeFactors = findPrimeFactors(x);
  
    if (primeFactors.length > 0) {
      return ['Yes', primeFactors];
    } else {
      return 'No';
    }
  }
  
  
  const x = 12345; 
  const result = reverseDigitsAndCheckPrimeFactors(x);
  console.log(result);
  