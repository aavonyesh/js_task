let kuklaBilet=5;
let heyvanBilet=8;
let kinoBilet=7;

let biletArr=[];
let reportText=(`
    1-Kukla tamasasi
    2-Heyvan tamasasi
    3-Kinoteatr
    `)
let typeBilet=prompt(reportText);
if (typeBilet=="1" || typeBilet=="2" || typeBilet=="3") {
    let countBilet = Number(prompt("Bilet sayini daxil edin: "))
    if (typeBilet=="1") {
        let payment=kuklaBilet*countBilet;
        alert("Odenis: "+payment +"azn");
    }
    if (typeBilet=="2") {
        let payment=heyvanBilet*countBilet;
        alert("Odenis: "+payment +"azn");
    }
    if (typeBilet=="3") {
        let payment=kinoBilet*countBilet;
        alert("Odenis: "+payment +"azn");
    }
biletArr.push(countBilet);
alert("umumi bilet sayi: "+ biletArr[0]);
}
else{
    alert("duzgun deyer daxil edilmeyib");
}