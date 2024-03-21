const inputName = document.querySelector("#name"),
    inputRelationship = document.querySelector('#relationship'),
    inputNumber = document.querySelector('#number'),
    elForm = document.querySelector('form'),
    LocalData = JSON.parse(window.localStorage.getItem('contactCards'))

console.log(LocalData);
const contactCards = LocalData || []



elForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const numberValue = inputNumber.value,
        relationshipValue = inputRelationship.value,
        nameValue = inputName.value;

    const contactObj = {
        name: nameValue,
        relationship: relationshipValue,
        number: numberValue
    }


    contactCards.push(contactObj)


    renderCards()

    window.localStorage.setItem('contactCards', JSON.stringify(contactCards))

})


const renderCards = () => {
    for (item of contactCards) {
        const card = document.createElement('li');
        card.setAttribute('class', "card flex items-start justify-center flex-col bg-white border border-white p-1 p-2 gap-2 m-1 border-current")
        card.innerHTML = `
                    <h3 class="font-bold text-2xl">${item.name}</h3>
                    <span>${item.relationship}</span>
                    <a class="text-sky-500">${item.number}</a>

        `
        document.querySelector('.list').append(card)
        inputName.value = null
        inputRelationship.value = null
        inputNumber.value = null
    }
    window.localStorage.setItem('contactCards', JSON.stringify(contactCards))


}
renderCards()