document.getElementById("runBtn").addEventListener("click", runFizzBuzz);

function runFizzBuzz() {
    const output = document.getElementById("output");
    output.innerHTML = ""; //remove  text output resaults

    const limit = 100;

    for (let i = 1; i <= limit; i++) {
        let text = "";

        if (i % 3 === 0 && i % 5 === 0 ) {
           text = "FizzBuzz"
        } else if (i % 3 === 0) {
          text = "Fizz";
        } else if (i % 5 === 0) {
            text = "Buzz"
        } else {
            text = i;
        }
        const li = document.createElement("li");
        li.textContent = text;
        output.appendChild(li);
    }
}