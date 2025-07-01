
        function exchange() {
            const dollar = parseFloat(document.getElementById('amount_dollar').value) || 0;
            const rate = parseFloat(document.getElementById('rate').value) || 4100;
            const riel = dollar * rate;
            document.getElementById('result').value = riel.toLocaleString();
        }