document.addEventListener("DOMContentLoaded", () =>{
    const params = new URL(window.location.href)
    .searchParams
    const moodBrut = params.get("mood");
    let moodLast = [];
    moodLast.push(moodBrut);
    console.log(moodLast);
});

const at = new URL(window.location.href).searchParams;
const pastMoodBrut = at.get("mood");
let pastMood = [];
pastMood.push(pastMoodBrut);