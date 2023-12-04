// CLASS IN JS 
//------------ 

// const mobil = {
//     transmisi: 'Manual',
//     bahanBakar: 'Bensin',
//     mesin: 1500,
//     nyalakanMesin : function () {
//         console.log('Mobil ${this.transmisi} dinyalakan')
//     },
// };

// const mobil2 = {
//     transmisi: 'Matic',
//     bahanBakar: 'Solar',
//     mesin: 2000,
//     nyalakanMesin : function () {
//         console.log('Mobil ${this.transmisi} dinyalakan')
//     },
// };

class Mobil {
    constructor(transmisi,bahanBakar,mesin){
        this.transmisi = transmisi;
        this.bahanBakar = bahanBakar;
        this.mesin = mesin;
    }
    nyalakanMesin () {
        console.log('Mobil ${this.transmisi} dinyalakan')
    }
}

const mobil1 = new Mobil("Manual","Bensin",1500);
mobil1.nyalakanMesin();
const mobil2 = new Mobil("Matic","Solar",2000);
mobil2.nyalakanMesin();


// INHERITANCE
class Toyota extends Mobil{
    constructor(transmisi,bahanBakar,mesin,merek,warna){
            super(transmisi,bahanBakar,transmisi);
            this.merek = merek;
            this.warna = warna;
    }
}

const Agya = new Toyota("Matic","Bensin",1000,"Agya","Putih");
console.log(Agya);
