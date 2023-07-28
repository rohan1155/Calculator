let result = "";
let input = document.querySelector('input');

document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        console.log(e.target);
        if (e.target.innerHTML == "=") {
            result = eval(result);
            input.value = result;
        }

        else if (e.target.innerHTML == "AC") {
            result = "";
            input.value = result;
        }

        else if (e.target.innerHTML == "DEL") {
            result = result.substring(0, result.length-1);
            input.value = result;
        }

        else if (e.target.innerHTML == "%") {
            result = result / 100;
            input.value = result;
        }

        else {
            result += e.target.innerHTML;
            input.value = result;
        }
    });
});
