const countersEl = document.querySelectorAll('.counter');

countersEl.forEach(counterEl => {
    // initial num is zero
    counterEl.innerText = "0";
    incrementCounter();

    function incrementCounter() {
        // To convert to numbers we can use -> + <- or -> parseInt() <-
        // let currentNum = +counterEl.innerText;
        let currentNum = parseInt(counterEl.innerText);
        // get attribute of thr data -------<
        const dataCeil = counterEl.getAttribute("data-ceil");
        const increment = dataCeil / 20;
        currentNum = Math.ceil(currentNum + increment);
        
        if (currentNum < dataCeil) {
            counterEl.innerText = currentNum

            // increment after 0.5ms----------<
            setTimeout(incrementCounter, 50)
        } else {
            counterEl.innerText = dataCeil;   
        }
    }
})