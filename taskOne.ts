abstract class AClass {
  Numbers: Array<number>;

  constructor(n: number) {
    this.Numbers = new Array(n);
    this.fill();
  }
  
  private fill():void {
    for(let i = 0; i < this.Numbers.length; i++) {
      this.Numbers[i] = Math.floor(Math.random() * 10 + 1);
    }
  }

  public factorial(Numbers: Array<number>):Array<number> {
    return Numbers.map(num => {
      let fact: number = 1;
      for(let i: number = 2; i <= num; i++) {
        fact *= i;
      }
      return fact;
    });
  }

  abstract sort():Array<number>

}

class Class1 extends AClass {
  sort(): Array<number> {
    const newNumbers: Array<number> = this.Numbers;
    //сортировка Шелла
    const arrSize: number = newNumbers.length;
    for (let step: number = Math.floor(arrSize / 2); step > 0; step = Math.floor(step / 2)) {
      for(let pass: number = step; pass < arrSize; pass++) {
        for(let replacement = pass - step; replacement >= 0 &&  newNumbers[replacement] > newNumbers[replacement + step]; replacement -= step) {
          let tmp: number = newNumbers[replacement];
          newNumbers[replacement] = newNumbers[replacement + step];     
          newNumbers[replacement + step] = tmp;
        }
      }
    }
    return this.factorial(newNumbers);
  }
}

class Class2 extends AClass {
  sort(): Array<number> {
    const newNumbers: Array<number> = this.Numbers;
    //шейкерная сортировка
    let left = 0;
    let right = newNumbers.length - 1;
    while (left < right) {
      for (let i: number = left; i < right; i++) {
        if (newNumbers[i] > newNumbers[i + 1]) {
          let tmp: number = newNumbers[i];
          newNumbers[i] = newNumbers[i + 1];
          newNumbers[i + 1] = tmp;
        }
      }
      right--;
      for (let i: number = right; i > left; i--) {
        if (newNumbers[i] < newNumbers[i - 1]) {
          let tmp: number = newNumbers[i];
          newNumbers[i] = newNumbers[i - 1];
          newNumbers[i - 1] = tmp;
        }
      }
      left++;
    }                  
    return this.factorial(newNumbers);
  }
}

const newArr1 = new Class1(10);
console.log("Initial Array");
console.log(newArr1.Numbers);
console.log("\nSorted factorial Array");
const arr1 = newArr1.sort();
console.log(arr1);

console.log('\n====================================================\n');

const newArr2 = new Class2(10);
console.log("Initial Array");
console.log(newArr2.Numbers);
console.log("\nSorted factorial Array");
const arr2 = newArr2.sort();
console.log(arr2);



