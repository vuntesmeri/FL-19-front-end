function task1() {
    const firstNum = prompt('First number', '');
        if (!Number.isNaN(Number(firstNum))) {
            const secondNum = prompt('Second number', '');
            if (!Number.isNaN(Number(secondNum)) && firstNum <= secondNum) {
                const result = [];
                for (let i = parseInt(firstNum)+1; i < secondNum; i++) {
                    result.push(i);
                }
                alert(`First number: ${firstNum}
Second number: ${secondNum}\n
Numbers between: ${result.join(' ')}`);
                } else {
                    alert('Invalid input data');
                }
        } else {
            alert('Invalid input data');
        }  
}
