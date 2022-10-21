const complimentBtn = document.getElementById("complimentButton")

let fortuneBtn = document.querySelector('#fortuneButton')





const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

let getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/").then(res =>{
        const data = res.data
        alert(data)
    })
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)

//Part Two-----------------------------------------------

const catBtn = document.querySelector('#getCatButton')

let getCat = () => {
    axios.get("http://localhost:4000/api/cat/").then(res =>{
        const data = res.data
        alert(data)
    })
}


catBtn.addEventListener('click', getCat)














