const classBuilder = (el, binding) => {
    const modificator = 'bg'
    el.classList.add(`${modificator}-${binding.value}`)
}

export default classBuilder