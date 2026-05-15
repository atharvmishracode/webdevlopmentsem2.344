<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Counter Application</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      text-align: center;
      margin-top: 100px;
    }

    .container {
      background: white;
      padding: 30px;
      width: 300px;
      margin: auto;
      border-radius: 10px;
      box-shadow: 0px 0px 10px gray;
    }

    h1 {
      color: #333;
    }

    h2 {
      margin: 20px 0;
      color: #555;
    }

    button {
      padding: 10px 20px;
      margin: 10px;
      border: none;
      border-radius: 5px;
      background-color: #007bff;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  </style>
</head>

<body>

  <div class="container">
    <h1>Counter Application</h1>

    <h2 id="counter">0</h2>

    <button onclick="increment()">Increment</button>
    <button onclick="decrement()">Decrement</button>
    <button onclick="resetCounter()">Reset</button>
  </div>

  <script>
    let count = 0;

    function increment() {
      count++;
      document.getElementById("counter").innerText = count;
    }

    function decrement() {
      count--;
      document.getElementById("counter").innerText = count;
    }

    function resetCounter() {
      count = 0;
      document.getElementById("counter").innerText = count;
    }
  </script>

</body>
</html>