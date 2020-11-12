let properties = ['background', 'background-color', 'padding', 'border', 'color', 'border-radius']

const newProperty = document.querySelector(".property")
// const newValue2 = document.querySelector(".value")

newProperty.addEventListener('input', (e) => {
    let newInput = e.target.value
    clearAll();
    properties
        .filter((property) => property.substr(0, newInput.length) === newInput)
        .forEach((property) => addRule(property));
})

newProperty.addEventListener('focusin', () => {
    newProperty.value = ''
    properties.forEach(item => addRule(item))
})




const addRule = (property) => {
    const container = document.querySelector('.rule-container')
    const newRule = document.createElement('div')
    newRule.className = 'newRule'
    newRule.className += ' active'
    let ruleContent = document.createTextNode(property)
    newRule.appendChild(ruleContent)
    container.appendChild(newRule)
    newRule.addEventListener('click', (e) => {
        newProperty.value = e.target.textContent
        clearAll()
    })
}

const clearAll = () => {
    const items = document.querySelector('.rule-container')
    while (items.firstChild) {
        items.removeChild(items.firstChild)
    }

}