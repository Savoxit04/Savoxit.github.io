var tanya = true;
while(tanya){


var p = prompt('Masukan pilihan anda(gajah,orang,semut):')

var comp = Math.random();

if(comp < 0.34) {
    comp = 'gajah';
} else if(comp > 0.34 && comp < 0.67) {
    comp = 'orang';
} else {
    comp = 'semut';
}

var hasil ='';
if(p == comp) {
    hasil = 'SERI!'
} else if (p == 'gajah') {
    hasil =(comp == 'orang') ? 'MENANG' : 'KALAH';
} else if (p == 'orang') {
    if (comp == 'gajah') {
        hasil = 'KALAH!';
    } else {
        hasil = 'MENANG!';
    }
} else if (p == 'semut') {
    if (comp == 'gajah') {
        hasil = 'MENANG';
    } else {
        hasil = 'KALAH';
    }
} else {
    hasil = ' memasukan pilihan yang salah';
}

alert (
    'Kamu memasukan: '+  p +' sedangkan komputer memilih: '+  comp +'\nMaka hasilnya : Kamu '+  hasil);
tanya = confirm ('lagi') 
}
alert ('Terima kasih sudah bermain :)')