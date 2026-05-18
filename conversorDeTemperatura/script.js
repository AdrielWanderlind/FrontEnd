    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");

    // Celsius -> Fahrenheit
    celsiusInput.addEventListener("input", () => {
      let c = parseFloat(celsiusInput.value);

      if (isNaN(c)) {
        fahrenheitInput.value = "";
        return;
      }

      let f = (c * 9/5) + 32;

      fahrenheitInput.value = f.toFixed(2);
    });

    // Fahrenheit -> Celsius
    fahrenheitInput.addEventListener("input", () => {
      let f = parseFloat(fahrenheitInput.value);

      if (isNaN(f)) {
        celsiusInput.value = "";
        return;
      }

      let c = (f - 32) * 5/9;

      celsiusInput.value = c.toFixed(2);
    });