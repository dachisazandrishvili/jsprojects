// Bakuriani:

// 1. Dialog Kokhta - starts at $58 per night
// 2. Hydeout Bakuriani - starts at $81 per night
// 3. Kokhta-amount-two - starts at $60 per night
// 4. Snow King Hotel - starts at $126 per night
// 5. Villa Mtashi - starts at $203 per night
// Gonio:
// 6. Bude - starts at $73 per night
// 7. Gold Guest House - starts at $70 per night
// 8. minervahome - starts at $130 per night
// 9. Pano Hotel - starts at £57 per night
// 10. Studio Gonio Lemon - starts at $120 per night

// Gudauri:
// 11. Gogi Resort - starts at $87 per night
// 12. Gudauri Lodge - starts at $150 per night
// 13. Hotel Carpe Diem Gudauri - starts at $95 per night
// 14. Quadrum Hotel - starts at $89 per night
// 15. Zen Summer Gudauri - starts at $44 per night

// Kvariati:
// 16. Casa Del Mar - starts at £40 per night
// 17. Hotel Montana - starts at $110 per night
// 18. Hotel Otsneba - starts at $37 per night
// 19. Kvariati beach - starts at $128 per night
// 20. Villa Deluxe Kvariati - starts at $140 per night

// Tskaltubo:
// 21. Forest Apartments - starts at $37 per night
// 22. Hotel Samta - starts at $65 per night
// 23. Tskaltubo Epic Hotel & Spa - starts at $92 per night
// 24. Tskaltubo Plaza Hotel - starts at $130 per night
// 25. Tskaltubo Village - Nature Resort - starts at $89 per night



// variable of an input for messege 


// creating objects
function obj(name,price,place){
  this.name = name,
  this.price = price,
  this.place = place
}


// // bakuriani 
// let DialogKokhta = new obj("Dialog Kokhta","£40","bakuriani");
let HydeoutBakuriani = new obj("Hydeout Bakuriani","$81","bakuriani");
let KokhtAmountTwo = new obj("Kokhta amount two","$60","bakuriani");
let SnowKingHotel = new obj("Snow King Hotel","$126","bakuriani");
let BillaMtashi = new obj("Villa Mtashi","$73","bakuriani");


// gonio
let Bude = new obj("Bude","$73","gonio");
let GoldGuestHouse = new obj("Gold Guest House","gonio");
let Minervahome = new obj("minervahome","$130","gonio");
let PanoHotel = new obj("Pano Hotel","£57","gonio");
let StudioGonioLemon = new obj("Studio Gonio Lemon","$120","gonio");

// gudauri
let GogiResort = new obj("Gogi Resort","$87","gudauri");
let GudauriLodge = new obj("gudauri Lodge","$55","gudauri");
let HotelCarpeDiemGudauri = new obj("Hotel Carpe Diem Gudauri","$95","gudauri");
let QuadrumHotel = new obj("Quadrum Hotel", "$89","gudauri");
let ZenSummerGudauri = new obj("Zen Summer Gudauri","$44","gudauri");

// tskaltubo

let ForestApartments = new obj("Forest Apartments","$37","tskaltubo");
let HotelSamta = new obj("Hotel Samta","$65","tskaltubo");
let TskaltuboEpicHotel = new obj("Tskaltubo Epic Hotel","$92","tskaltubo");
let TskaltuboPlazaHotel = new obj("Tskaltubo Plaza Hotel","$130","tskaltubo");
let TskaltuboVillage = new obj("Tskaltubo Village","$89","tskaltubo");

// kvariati

let CasaDelMar = new obj("Casa Del Mar","£40","kvariati");
let HotelMontana = new obj("Hotel Montana","$110","kvariati");
let HotelOtsneba = new obj("Hotel Otsneba","$37","kvariati");
let KvariatiBeach = new obj("Kvariati beach","$128","kvariati");
let VillaDeluxeKvariati= new obj("Villa Deluxe Kvariati","$140","kvariati");

// // ბათუმი
// // Batumi Sheraton Hotel
// // Hilton Batumi
// // Hotel Old Town
// // Orbi City Batumi
// // Radisson Blu Hotel Batumi
// //თბილისი
// // Pullman Tbilisi Axis Towers
// // Radisson Blu Iveria Hotel Tbilisi
// // Sheraton Grand Tbilisi 
// // Swissotel tbilisi
// // Tbilisi The Biltmore  Hotel
// //ურეკი
// // Argo Hotel
// // hotel David
// // Kolkhida
// // Ritsa
// // Ureki Magnetic Resort
// //ქობულეთი
// // Chveni Ezo Boutique Hotel
// // Hotel Chateau Kvirike
// // Hotel Nobilis Hall
// // Kobuleti georgia palace hotel & spa
// // Magnetic Beach Resort
// //შეკვეთილი
// // Aparthotel Majak Shekvetili
// // best hotel in shekvetili
// // Black Sea Riviera Hotel
// // Graphica Black Sea
// // Shekvetili Paragraph Resort & Spa


// // batumi
let BatumiSheratonHotel = new obj("Batumi Sheraton Hotel","$129","batumi");
let HiltonBatumi = new obj("Hilton Batumi","$200","batumi");
let HotelOldTown = new obj("Hotel Old Town","$125","batumi");
let OrbiCityBatumi = new obj("Orbi City Batumi","$99","batumi");
let RadissonBluHotelBatumi = new obj("Radisson Blu Hotel Batumi","$197","batumi");

// // tbilisi

let PullmanTbilisiAxisTowers = new obj("Pullman Tbilisi Axis Towers","$123","tbilisi");
let RadissonBluIveriaHotelTbilisi= new obj("Radisson Blu Iveria Hotel Tbilisi","$132","tbilisi");
let SheratonGrandTbilisi = new obj("Sheraton Grand Tbilisi","$165","tbilisi");
let SwissotelTbilisi = new obj("Swissotel tbilisi","$118","tbilisi");
let TbilisiTheBiltmoreHotel = new obj("Tbilisi The Biltmore  Hotel","$135","tbilisi");

// // ureki
let ArgoHotel = new obj("Argo Hotel","$56","ureki");
let HotelDavid = new obj("hotel David","$76","ureki");
let Kolkhida = new obj("Kolkhida","$114","ureki");
let Ritsa = new obj("Ritsa","$40","ureki");
let UrekiMagneticResort = new obj("Ureki Magnetic Resort","$215","ureki");

// kobuleti
let ChveniEzoBoutiqueHotel = new obj("Chveni Ezo Boutique Hotel","$25","kobuleti");
let HotelChateauKvirike = new obj("Hotel Chateau Kvirike","$115","kobuleti");
let HotelNobilisHall = new obj("Hotel Nobilis Hall","$89","kobuleti");
let KobuletiGeorgiaPalaceHotel = new obj("Kobuleti georgia palace hotel","$68","kobuleti");
let MagneticBeachResort = new obj("Magnetic Beach Resort","$53","kobuleti");

// shekvetili
let AparthotelMajakShekvetili = new obj("Aparthotel Majak Shekvetili","$67","shekvetili");
let BestHotelInShekvetili = new obj("best hotel in shekvetili","$76","shekvetili");
let BlackSeaRivieraHotel= new obj("Black Sea Riviera Hotel","$543","shekvetili");
let GraphicaBlackSea = new obj("Graphica Black Sea","$134","shekvetili");
let ShekvetiliParagraphResort = new obj("Shekvetili Paragraph Resort","$300","shekverili");

function listToUpperString(list){
  let lst2 = []

  for(i of list){
    let m = i.replace(i[0],i[0].toUpperCase())
    for(let i = 1; i < m.length; i++){
      j = m.replace(m[i],m[i].toLowerCase())
    }
    lst2.push(j)
  }
  for(let i = 0; i < list.length; i++){
    list.pop(i)
  }
  for(i of lst2){
    list.push(i)
  }

  // let setLst2 = new Set(lst2)
  // let lst3 = Array.from(setLst2)
  // for(i of lst3){
  //   str += i
  // }
  // let str2 = str.replace("undefined","")
  // lst.push(str2)
  // console.log(lst)
}

const listToUpper = (list,lst2) =>{
  for(i of list){
    let m = i.replace(i[0],i[0].toUpperCase())
    lst2.push(m)
  }
}

const listToLower = (list,lst2) =>{
  for(i of list){
    let m = i.replace(i[0],i[0].toLowerCase())
    lst2.push(m)
  }
}
listToUpperString(["Dialog","Kokhta"])
let m = []
listToUpper(["hi","hi"],m)
console.log(m)


let hotelLst = ["Dialog","Kokhta","Hydeout","Bakuriani","Kokhta-amount-two","Snow","King","Hotel","Villa","Mtashi","Bude","Gold","Guest","House","minervahome","Pano","Hotel","Studio","Gonio","Lemon","Gogi","Resort","Gudauri","Lodge","Hotel","Carpe","Diem","Gudauri","Quadrum","Hotel","Zen","Summer","Casa","Del","Mar","Montana","Otsneba","Kvariati","beach","Forest","Apartments","Samta","Tskaltubo","Epic","Plaza","Village","Batumi","Sheraton","Hilton","Old","Town","Orbi","City","Radisson","Blu","Pullman","Tbilisi","Axis","Towers","Iveria","Sheraton","Grand","Swissotel","the","Biltmore","Argo","David","Kolkhida","Ritsa","Ureki","Magnetic","resort","Chveni","Ezo","Boutique","Chateau","Kvirike","Nobilis","Hall","Kobuleti","georgia","palace","Aparthotel","Majak","Shekvetili","best","in","Black","sea","Riviera","Graphica","Paragraph"]
let lowerCaseHotelList = []
let upperCaseHotelList = []

listToUpper(hotelLst,upperCaseHotelList)
listToLower(hotelLst,lowerCaseHotelList)
// making object mini database

let hotels = {
  HydeoutBakuriani:HydeoutBakuriani,
  KokhtAmountTwo:KokhtAmountTwo,
  SnowKingHotel:SnowKingHotel,
  BillaMtashi:BillaMtashi,
  Bude:Bude,
  GoldGuestHouse:GoldGuestHouse,
  Minervahome:Minervahome,
  PanoHotel:PanoHotel,
  StudioGonioLemon:StudioGonioLemon,
  GogiResort:GogiResort,
  GudauriLodge:GudauriLodge,
  HotelCarpeDiemGudauri:HotelCarpeDiemGudauri,
  QuadrumHotel:QuadrumHotel,
  ZenSummerGudauri:ZenSummerGudauri,
  ForestApartments:ForestApartments,
  HotelSamta:HotelSamta,
  TskaltuboEpicHotel:TskaltuboEpicHotel,
  TskaltuboPlazaHotel:TskaltuboPlazaHotel,
  TskaltuboVillage:TskaltuboVillage,
  CasaDelMar:CasaDelMar,
  HotelMontana:HotelMontana,
  HotelOtsneba:HotelOtsneba,
  KvariatiBeach:KvariatiBeach,
  VillaDeluxeKvariati:VillaDeluxeKvariati,
  BatumiSheratonHotel:BatumiSheratonHotel,
  HiltonBatumi:HiltonBatumi,
  HotelOldTown:HotelOldTown,
  OrbiCityBatumi:OrbiCityBatumi,
  RadissonBluHotelBatumi:RadissonBluHotelBatumi,
  PullmanTbilisiAxisTowers:PullmanTbilisiAxisTowers,
  RadissonBluIveriaHotelTbilisi:RadissonBluIveriaHotelTbilisi,
  SwissotelTbilisi:SwissotelTbilisi,
  TbilisiTheBiltmoreHotel:TbilisiTheBiltmoreHotel,
  ArgoHotel:ArgoHotel,
  HotelDavid:HotelDavid,
  Kolkhida:Kolkhida,
  Ritsa:Ritsa,
  UrekiMagneticResort:UrekiMagneticResort,
  ChveniEzoBoutiqueHotel:ChveniEzoBoutiqueHotel,
  HotelChateauKvirike:HotelChateauKvirike,
  HotelNobilisHall:HotelNobilisHall,
  KobuletiGeorgiaPalaceHotel:KobuletiGeorgiaPalaceHotel,
  MagneticBeachResort:MagneticBeachResort,
  AparthotelMajakShekvetili:AparthotelMajakShekvetili,
  BestHotelInShekvetili:BestHotelInShekvetili,
  BlackSeaRivieraHotel:BlackSeaRivieraHotel,
  GraphicaBlackSea:GraphicaBlackSea,
  ShekvetiliParagraphResort:ShekvetiliParagraphResort,
}

let mes = document.getElementById("mes");
let btn = document.getElementById("btn");
let txtArea = document.getElementById("mesageArea");

let sentence = "price of this hotel is >";


let lst = []
let lst2 = []
let answer = ""

function uniq(a) {
  Array.from(new Set(a));
  console.log(a)
}


btn.addEventListener("click",function(){
  lst2 = []
  let forObj = ""
  lst.push(mes.value)
    let m = lst[0].split(" ")
    for(k of m){
      for(let i = 0; i < hotelLst.length; i++){
        if(k === lowerCaseHotelList[i] || k === upperCaseHotelList[i]){
          lst2.push(k)
        }
      }
    }
    
  uniq(lst2)
  listToUpperString(lst2)
  let p = new Set(lst2)
  let l = Array.from(p) 
  for(i of l){
    forObj += i
  }
  console.log(forObj)
  forObj = ""
})





// dachi hotel  DachiHotel