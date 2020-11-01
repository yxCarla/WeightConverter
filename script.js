var outputs = document.getElementById('outputs');

function hideAll() {
    chosen_gram.style.display = 'none';
    chosen_kilogram.style.display = 'none';
    chosen_MT.style.display = 'none';
    chosen_pound.style.display ='none';
    chosen_ounce.style.display = 'none';
    outputs.style.display = 'none';
}

var chosen_gram = document.getElementById('gram_starting');
var chosen_kilogram = document.getElementById('kilogram_starting');
var chosen_MT = document.getElementById('mt_starting');
var chosen_pound= document.getElementById('pound_starting');
var chosen_ounce = document.getElementById('ounce_starting');

function chosenGram() {
    chosen_gram.style.display = 'block';
    chosen_kilogram.style.display = 'none';
    chosen_MT.style.display = 'none';
    chosen_pound.style.display ='none';
    chosen_ounce.style.display = 'none';
    outputs.style.display = 'block';

    footerInfo.innerHTML = "You are converting from Grams (S.I)";
}

function chosenKilogram() {
    chosen_kilogram.style.display = 'block';
    chosen_gram.style.display = 'none';
    chosen_MT.style.display = 'none';
    chosen_pound.style.display ='none';
    chosen_ounce.style.display = 'none';
    outputs.style.display = 'block';

    footerInfo.innerHTML = "You are converting from Kilograms (S.I)";
}

function chosenMT() {
    chosen_gram.style.display = 'none'
    chosen_kilogram.style.display = 'none';
    chosen_MT.style.display = 'block';
    chosen_pound.style.display ='none';
    chosen_ounce.style.display = 'none';
    outputs.style.display = 'block';

    footerInfo.innerHTML = "You are converting from Metric Tons (S.I)";
}

function chosenPound() {
    chosen_gram.style.display = 'none'
    chosen_kilogram.style.display = 'none';
    chosen_MT.style.display = 'none';
    chosen_pound.style.display ='block';
    chosen_ounce.style.display = 'none';
    outputs.style.display = 'block';

    footerInfo.innerHTML = "You are converting from Pounds (U.S)";
}

function chosenOunce() {
    chosen_gram.style.display = 'none'
    chosen_kilogram.style.display = 'none';
    chosen_MT.style.display = 'none';
    chosen_pound.style.display ='none';
    chosen_ounce.style.display = 'block';
    outputs.style.display = 'block';

    footerInfo.innerHTML = "You are converting from Ounces (U.S)";
}

var gramOutput = document.getElementById('gram_output');
var kilogramOutput = document.getElementById('kilogram_output');
var mtOutput = document.getElementById('mt_output');
var poundOutput = document.getElementById('pound_output');
var ounceOutput = document.getElementById('ounce_output');


function convertNoGram() {
    var gram_output = gram_starting.value;
    var gram_output = ((gram_starting.value) * 1);

    gramOutput.innerHTML = 'Gram:' + " " + gram_output.toFixed(3);
    var kilogram_output = gram_starting.value;
    var kilogram_output = ((gram_starting.value) * 0.001);

    kilogramOutput.innerHTML = 'Kilogram:' + " " + kilogram_output.toFixed(3);

    var mt_output = gram_starting.value;
    var mt_output = ((gram_starting.value) * 0.000001);

    mtOutput.innerHTML = 'Metric Ton:' + " " + mt_output.toFixed(6);
    
    var pound_output = gram_starting.value;
    var pound_output = ((gram_starting.value) * 0.0022046244);

    poundOutput.innerHTML = 'Pound:' + " " + pound_output.toFixed(6);

    var ounce_output = gram_starting.value;
    var ounce_output = ((gram_starting.value) * 0.0352739907);

    ounceOutput.innerHTML = 'Ounce:' + " " + ounce_output.toFixed(6);
}

function convertNoKilogram() {
    var gram_output = kilogram_starting.value;
    var gram_output = ((kilogram_starting.value) * 1000);

    gramOutput.innerHTML = 'Gram:' + " " + gram_output.toFixed(3);

    var kilogram_output = kilogram_starting.value;
    var kilogram_output = ((kilogram_starting.value) * 1);

    kilogramOutput.innerHTML = 'Kilogram:' + " " + kilogram_output.toFixed(3);

    var mt_output = kilogram_starting.value;
    var mt_output = ((kilogram_starting.value) * 0.001);

    mtOutput.innerHTML = 'Metric Ton:' + " " + mt_output.toFixed(3);
    
    var pound_output = kilogram_starting.value;
    var pound_output = ((kilogram_starting.value) * 2.2046244202);

    poundOutput.innerHTML = 'Pound:' + " " + pound_output.toFixed(3);

    var ounce_output = kilogram_starting.value;
    var ounce_output = ((kilogram_starting.value) * 35.273990723);

    ounceOutput.innerHTML = 'Ounce:' + " " + ounce_output.toFixed(3);
}

function convertNoMT() {
    var gram_output = mt_starting.value;
    var gram_output = ((mt_starting.value) * 1000000);
    gramOutput.innerHTML = 'Gram:' + " " + gram_output.toFixed(3);

    var kilogram_output = mt_starting.value;
    var kilogram_output = ((mt_starting.value) * 1000);

    kilogramOutput.innerHTML = 'Kilogram:' + " " + kilogram_output.toFixed(3);

    var mt_output = mt_starting.value;
    var mt_output = ((mt_starting.value) * 1);

    mtOutput.innerHTML = 'Metric Ton:' + " " + mt_output.toFixed(3);
    
    var pound_output = mt_starting.value;
    var pound_output = ((mt_starting.value) * 204.6244202);

    poundOutput.innerHTML = 'Pound:' + " " + pound_output.toFixed(3);

    var ounce_output = mt_starting.value;
    var ounce_output = ((mt_starting.value) * 35273.990723);

    ounceOutput.innerHTML = 'Ounce:' + " " + ounce_output.toFixed(3);
}

function convertNoPound() {
    var gram_output = pound_starting.value;
    var gram_output = ((pound_starting.value) * 453.592);
    gramOutput.innerHTML = 'Gram:' + " " + gram_output.toFixed(3);

    var kilogram_output = pound_starting.value;
    var kilogram_output = ((pound_starting.value) * 0.453592);

    kilogramOutput.innerHTML = 'Kilogram:' + " " + kilogram_output.toFixed(3);

    var mt_output = pound_starting.value;
    var mt_output = ((pound_starting.value) * 0.000453592);

    mtOutput.innerHTML = 'Metric Ton:' + " " + mt_output.toFixed(6);
    
    var pound_output = pound_starting.value;
    var pound_output = ((pound_starting.value) * 1);

    poundOutput.innerHTML = 'Pound:' + " " + pound_output.toFixed(3);

    var ounce_output = pound_starting.value;
    var ounce_output = ((pound_starting.value) * 16);

    ounceOutput.innerHTML = 'Ounce:' + " " + ounce_output.toFixed(3);
}

function convertNoOunce() {
    var gram_output = ounce_starting.value;
    var gram_output = ((ounce_starting.value) * 28.3495);
    gramOutput.innerHTML = 'Gram:' + " " + gram_output.toFixed(3);

    var kilogram_output = ounce_starting.value;
    var kilogram_output = ((ounce_starting.value) * 0.0283495);

    kilogramOutput.innerHTML = 'Kilogram:' + " " + kilogram_output.toFixed(3);

    var mt_output = ounce_starting.value;
    var mt_output = ((ounce_starting.value) * 0.0000283495);

    mtOutput.innerHTML = 'Metric Ton:' + " " + mt_output.toFixed(6);
    
    var pound_output = ounce_starting.value;
    var pound_output = ((ounce_starting.value) * 0.0625);

    poundOutput.innerHTML = 'Pound:' + " " + pound_output.toFixed(2);

    var ounce_output = ounce_starting.value;
    var ounce_output = ((ounce_starting.value) * 1);

    ounceOutput.innerHTML = 'Ounce:' + " " + ounce_output.toFixed(2);
}

var footerInfo = document.getElementById('footer_info');
