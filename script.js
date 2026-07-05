    // ===== UTILITY =====
  function getArray() {
    return document.getElementById("input").value
      .split(",")
      .map(Number);
  }

  function print(data) {
    document.getElementById("output").textContent = data;
  }

  // ===== MAP CLONE (HOF + CALLBACK) =====
  function myMap(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }

    return result;
  }

  function runMap() {
    let arr = getArray();
  
    let result = myMap(arr, function(x) {
      return x * 2;
    });

    print("Map Result:\n" + JSON.stringify(result));
  }

  // ===== FILTER CLONE =====
  function myFilter(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }

    return result;
  }

  function runFilter() {
    let arr = getArray();

    let result = myFilter(arr, function(x) {
      return x > 2;
    });

    print("Filter Result:\n" + JSON.stringify(result));
  }

  // ===== REDUCE CLONE =====
  function myReduce(arr, callback, initial) {
    let accumulator = initial;

    for (let i = 0; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
  }

  function runReduce() {
    let arr = getArray();

    let result = myReduce(arr, function(sum, x) {
      return sum + x;
    }, 0);

    print("Reduce Result (Sum):\n" + result);
  }

  // ===== RECURSION VISUALIZER =====
  function factorial(n, depth = 0) {
    let indent = " ".repeat(depth * 2);
    log += indent + "factorial(" + n + ")\n";

    if (n === 0 || n === 1) { 
      log += indent + "return 1\n";
      return 1;
    }

    let result = n * factorial(n - 1, depth + 1);

    log += indent + "return " + result + "\n";
    return result;
  }

  let log = "";

  function runRecursion() {
    let n = Number(document.getElementById("recInput").value);
    log = "";

    let result = factorial(n);

    print("Recursion Steps:\n\n" + log + "\nFinal Result: " + result);
  }