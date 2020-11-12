let newValue = document.querySelector(".value")

const handleCreateRule = () => {
    let newPropertyData = newProperty.value
    let newValueData = newValue.value
    let doesContainProperty = () => newRule.some(item => Object.values(item).includes(newPropertyData))
    if (!doesContainProperty()) {
        const newRuleObj = {}
        newRuleObj['property'] = newPropertyData
        newRuleObj['value'] = newValueData
        newRuleObj['id'] = 1
        newRule.push(newRuleObj)
        let inputs = document.querySelectorAll("input")
        inputs.forEach((input) => (input.value = ""))
        showNewRule()
    } else {
        console.log(`you already have a property of ${newPropertyData}`);
    }
}

newValue.addEventListener("change", handleCreateRule)
newValue.addEventListener('focusin', () => {
    let newInput = newProperty.value
    let checkProperty = () => newRule.some(item => Object.values(item).includes(newInput))
    if (checkProperty()) {
        console.log(`you already have chose this property`);
    }
})

