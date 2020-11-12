const createBtn = document.querySelector(".create")
const container = document.querySelector(".main-container")
const newBtnContainer = document.querySelector(".newButtonContainer")
let inputContainer = document.querySelector(".input-container")
let newColor = null
const addProperty = document.querySelector(".add-property")
let selectedProperty = document.querySelector(".property")
let selectedValue = document.querySelector(".value")

let newProperty = document.querySelector(".property")
let newValue = document.querySelector(".value")



// const newRule = {}
const newRule = []

// const property = ['background', 'background-color', 'padding', 'border', 'color', 'border-radius']

// newProperty.addEventListener('input', (e) => {
//     let newInput = e.target.value
//     clearAll()
//     for (let i = 0; i < property.length; i++) {
//         if (property[i].substr(0, newInput.length) === newInput && newInput.length >= 1) {
//             addRule(property[i])
//         }
//     }
// })

// newProperty.addEventListener('focusin', () => {
//     property.forEach(item => {
//         addRule(item)
//     })
// })


const clearAll = () => {
    const items = document.querySelector('.rule-container')
    while (items.firstChild) {
        items.removeChild(items.firstChild)
    }

}
// const addRule = (property) => {
//     const container = document.querySelector('.rule-container')
//     const newRule = document.createElement('div')
//     newRule.className = 'newRule'
//     newRule.className += ' active'
//     let ruleContent = document.createTextNode(property)
//     newRule.appendChild(ruleContent)
//     container.appendChild(newRule)
//     newRule.addEventListener('click', (e) => {
//         newProperty.value = e.target.textContent
//         clearAll()
//     })
// }

const bodyClick = document.querySelector('body')
bodyClick.addEventListener('click', () => {
    const ruleContainer = document.querySelector('.rule-container')
    const newRule = document.querySelector('.newRule')
    if (ruleContainer.contains(event.target)) {
        newRule.classList.remove('active')
        newRule.classList.add('not-active')
        newProperty.value = ''
        clearAll()
    }
})


const handleCreateRule = () => {
    let newPropertyData = newProperty.value
    let newValueData = newValue.value
    if (newRule.length !== 0) {
        let doesContainProperty = () => newRule.some(item => Object.keys(item).includes(newPropertyData))
        console.log(!doesContainProperty);
        if (!doesContainProperty) {
            const newRuleObj = {}
            newRuleObj['property'] = newPropertyData
            newRuleObj['value'] = newValueData
            newRuleObj['id'] = 1
            newRule.push(newRuleObj)
            let inputs = document.querySelectorAll("input")
            inputs.forEach((input) => (input.value = ""))
            showNewRule()
        }
    } else {
        const newRuleObj = {}
        newRuleObj['property'] = newPropertyData
        newRuleObj['value'] = newValueData
        newRuleObj['id'] = 1
        newRule.push(newRuleObj)
        let inputs = document.querySelectorAll("input")
        inputs.forEach((input) => (input.value = ""))
        showNewRule()
    }
    console.log(newRule);
}



newValue.addEventListener("change", handleCreateRule)

const showNewRule = () => {
    removeAllRules()
    const showRuleContainer = document.querySelector(".show-rule-container")


    for (let item of newRule) {
        let containerDiv = document.createElement("div")
        containerDiv.className = "individual-rule-container"
        let newProperty = document.createElement("div")
        newProperty.className = "rule new-property"
        let newValue = document.createElement("div")
        newValue.className = "rule new-value"
        let editIcon = document.createElement("i")
        editIcon.className = "fas fa-edit"
        let deleteIcon = document.createElement("i")
        deleteIcon.className = "fas fa-trash"
        let newPropertyData = document.createTextNode(`${item.property}`)
        let newValueData = document.createTextNode(`${item.value}`)
        newProperty.appendChild(newPropertyData)
        newValue.appendChild(newValueData)
        containerDiv.appendChild(newProperty)
        containerDiv.appendChild(newValue)
        containerDiv.appendChild(editIcon)
        containerDiv.appendChild(deleteIcon)
        showRuleContainer.appendChild(containerDiv)
        showNewStyles()
        showStyles()
    }
    const editRule = document.querySelector('.fa-edit')
    editRule.addEventListener('click', handleEditRule)
    const deleteRule = document.querySelector('.fa-trash')
    deleteRule.addEventListener('click', handleDeleteRule)
}

const removeAllRules = () => {
    const ruleItems = document.getElementsByClassName("individual-rule-container")
    while (ruleItems[0]) {
        ruleItems[0].parentNode.removeChild(ruleItems[0])
    }
}


createBtn.addEventListener("click", function () {
    container.classList.remove("main-container-hidden")
    const newBtn = document.querySelector('.new-button')
    if (!newBtnContainer.contains(newBtn)) {
        createNewButton()
    }

})

const createNewButton = () => {
    const newBtn = document.createElement("button")
    const buttonName = document.createTextNode("Change Me")
    newBtn.appendChild(buttonName)
    newBtn.className = "new-button"
    newBtnContainer.appendChild(newBtn)
    handleStylesContainer()
}

const handleStylesContainer = () => {
    const codeContainer = document.querySelector(".code")

    // begin button code
    const beginButtonCodeContainer = document.createElement("div")
    beginButtonCodeContainer.className = "begin-code"
    const beginButtonCode = document.createTextNode(`.btn {`)
    beginButtonCodeContainer.appendChild(beginButtonCode)
    codeContainer.appendChild(beginButtonCodeContainer)

    // end button code
    const endButtonCodeContainer = document.createElement("div")
    endButtonCodeContainer.className = "end-code"
    const endButtonCode = document.createTextNode(`}`)
    endButtonCodeContainer.appendChild(endButtonCode)
    codeContainer.appendChild(endButtonCodeContainer)

    const codeResultsContainer = document.querySelector(".code-results")
    codeResultsContainer.appendChild(codeContainer)
}

const showStyles = () => {
    removeAllStyles()
    const beginButtonCodeContainer = document.querySelector(".begin-code")
    if (newRule !== null) {
        for (let item of newRule) {

            const addRuleCode = document.createElement("div")
            addRuleCode.className = "rule-code"
            const newBackgroundText = document.createTextNode(
                `${item.property}: ${item.value};`
            )
            addRuleCode.appendChild(newBackgroundText)
            beginButtonCodeContainer.appendChild(addRuleCode)
        }
    }
}

const removeAllStyles = () => {
    const styles = document.getElementsByClassName("rule-code")
    while (styles[0]) {
        styles[0].parentNode.removeChild(styles[0])
    }
}



const showNewStyles = () => {
    const newButton = document.querySelector(".new-button")
    for (let item of newRule) {
        newButton.style[item.property] = item.value
    }
}


const handleEditRule = (event) => {
    const propertyToUpdate = event.target.parentNode.children[0].innerText
    const valueToUpdate = event.target.parentNode.children[1].innerText
    newProperty.value = propertyToUpdate
    newValue.value = valueToUpdate
}

const handleDeleteRule = (event) => { }




