console.log("töötab")

nimi="Rihhard"

console.log(nimi)
console.log("nimi")
//console.log(Rihhard)
nimi="Paul"

console.log(nimi)

number=1
number=2
number=3
number=4
console.log(number)

number=number+1
number=number+1
number=number+1
number=number+1
number=number+1
console.log(number)

nimi=nimi+1
console.log(nimi)
if (nimi==="Paul1"){//===kontrollib kas vasak pool ja parem pool on identsed
console.log("kõik on korrektne")
}
if(number> 8){
    console.log("kogus piisav!")
}

/// kõiki asju saab kontrollida, kas on identne:
// ===

// Numbrite eriomadus on, et saan vaadata:
// > suurem    < väiksem     >= suurem/võrdne

// Sõnade eriomadus on, et saan kontrollida sisu:
// funktsioonide abil
// .startsWith()
// .endsWith()
// .includes()
// .charAt()
// jnejneif (nimi.startsWith()) {
  


nimi = "Toomas"
nimi = "Pille"
nimi = "Mart"


if (nimi.startsWith("P")) {
    console.log("Nimi algab P-ga")
  } else{
      console.log("nimi ei alga P-ga")
  }
  
  

if (nimi[1]==="a") {
    console.log("Nime teine täht on a")
  } else{
      console.log("nime teine täht pole a")
  }
email="paul@google.com"

if (email.includes("@")){
    console.log("email on korrektne")
}

// m@m.ee
if (email.length >= 6) {
    console.log("Email on korrektne")
  } else {
    console.log("Email pole korrektne")
  }

// .length
// [2]--> kindel tähemärk. kolmas täht.
// boolean  

// kolm tüüpi.
// 1. Sõna -> "Paul"  . "paul@google.com"
// String

// 2. Number -> number = 1

// 3. Kahendväärtus ehk boolean.
// sisselogitud/mitte
// makstud/mitte
// registreerunud/mitte
// täisealine/mitte
// raha piisavalt/mitte
// linnuke/mitte

// Sõnal on jutumärgid ümber ja värvub oranžiks
// Number on kirjutatud kui number ja värvub roheliseks
// Kahendväärtus on kindel sõna: true/false ja värvub siniseks

täisealine = false
täisealine = true
if (täisealine) {
  console.log("On täisealine")
} else {
  console.log("On alaealine")
}