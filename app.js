const teamMember = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: `./img/wayne-barnett-founder-ceo.jpg`,
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: `./img/angela-caroll-chief-editor.jpg`,
    },
    {
        name: "Walter Gordon",
        role: "Office Manager	",
        photo: `./img/walter-gordon-office-manager.jpg`,
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: `./img/angela-lopez-social-media-manager.jpg`,
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: `./img/scott-estrada-developer.jpg`,
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: `./img/barbara-ramos-graphic-designer.jpg`,
    },
]



console.log(teamMember)

const imgContainer = document.querySelector(".img-container")

for (let i = 0; i < teamMember.length; i++) {
    let teamUser = teamMember[i]
    imgContainer.innerHTML +=
        `<div class="team-member">
    <img src="${teamUser.photo}" alt="">
    <div class="team-footer">
        <h3>${teamUser.name}</h3>
        <p>${teamUser.role}</p>
    </div>
    </div>`
}

