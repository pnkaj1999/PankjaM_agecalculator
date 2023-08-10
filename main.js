function calculate()
{
    setInterval(()=>{
        let birthdate = new Date(document.getElementById("birthdate").value);
        let now = new Date();
        let ageinMs = now.getTime()-birthdate.getTime();

        let ageIns= ageinMs/1000;
        let ageInMins = ageIns/60;
        let ageInHours = ageInMins/60;
        let ageInDays = ageInHours/24;
        let ageInMonths = ageInDays/30.437;
        let ageInYears = ageInMonths/12;

        document.querySelector("#years").innerHTML=Math.floor(ageInYears);
        document.querySelector("#month").innerHTML=Math.floor(ageInMonths%12);
        document.querySelector("#day").innerHTML=Math.floor(ageInDays%30.437);
        document.querySelector("#hours").innerHTML=Math.floor(ageInHours%24);
        document.querySelector("#minutes").innerHTML=Math.floor(ageInMins%60);
        document.querySelector("#second").innerHTML=Math.floor(ageIns%60);

    },1000);
}