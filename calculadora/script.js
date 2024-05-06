document.getElementById('calcType').addEventListener('change', function() {
    const calcType = this.value;
    const calculatorInputs = document.getElementById('calculatorInputs');

    calculatorInputs.innerHTML = '';

    switch(calcType) {
        case 'imc':
            calculatorInputs.innerHTML = `
                Peso (kg): <input type="number" id="weight" step="0.01" required>
                Altura (m): <input type="number" id="height" step="0.01" required>
            `;
            break;
        case 'velocity':
            calculatorInputs.innerHTML = `
                Distância (m): <input type="number" id="distance" step="0.01" required>
                Tempo (s): <input type="number" id="time" step="0.01" required>
            `;
            break;
        case 'temperature':
            calculatorInputs.innerHTML = `
                Temperatura (°C): <input type="number" id="temperature" step="0.01" required>
            `;
            break;
        case 'time':
            calculatorInputs.innerHTML = `
                Horas: <input type="number" id="hours" step="0.01" required>
                Minutos: <input type="number" id="minutes" step="0.01" required>
                Segundos: <input type="number" id="seconds" step="0.01" required>
            `;
            break;
        case 'volume':
            calculatorInputs.innerHTML = `
                Comprimento (m): <input type="number" id="length" step="0.01" required>
                Largura (m): <input type="number" id="width" step="0.01" required>
                Altura (m): <input type="number" id="height" step="0.01" required>
            `;
            break;
        case 'area':
            calculatorInputs.innerHTML = `
                Comprimento (m): <input type="number" id="length" step="0.01" required>
                Largura (m): <input type="number" id="width" step="0.01" required>
            `;
            break;
        case 'data':
            calculatorInputs.innerHTML = `
                Tamanho dos dados (MB): <input type="number" id="dataSize" step="0.01" required>
                Velocidade de transferência (Mbps): <input type="number" id="speed" step="0.01" required>
            `;
            break;
    }
});

document.getElementById('calculateButton').addEventListener('click', function() {
    const calcType = document.getElementById('calcType').value;
    let result;

    switch(calcType) {
        case 'imc':
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);
            result = weight / (height * height);
            break;
        case 'velocity':
            const distance = parseFloat(document.getElementById('distance').value);
            const time = parseFloat(document.getElementById('time').value);
            result = distance / time;
            break;
        case 'temperature':
            const temperature = parseFloat(document.getElementById('temperature').value);
            result = temperature * 9 / 5 + 32;
            break;
        case 'time':
            const hours = parseFloat(document.getElementById('hours').value);
            const minutes = parseFloat(document.getElementById('minutes').value);
            const seconds = parseFloat(document.getElementById('seconds').value);
            result = hours + minutes / 60 + seconds / 3600;
            break;
        case 'volume':
            const lengthVolume = parseFloat(document.getElementById('length').value);
            const width = parseFloat(document.getElementById('width').value);
            const heightVolume = parseFloat(document.getElementById('height').value);
            result = lengthVolume * width * heightVolume;
            break;
        case 'area':
            const lengthArea = parseFloat(document.getElementById('length').value);
            const widthArea = parseFloat(document.getElementById('width').value);
            result = lengthArea * widthArea;
            break;
        case 'data':
            const dataSize = parseFloat(document.getElementById('dataSize').value);
            const speed = parseFloat(document.getElementById('speed').value);
            result = dataSize * 8 / speed;
            break;
    }

    document.getElementById('result').innerText = `Resultado: ${result}`;
});
