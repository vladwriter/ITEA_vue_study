const afterloop = (el, binding) => {
    const data = binding.value
    const callBack = () => {
        console.log('Array is over')
    }
    const counter = (arr, idx) => {
        if (arr[idx]) {
            setTimeout(() => {
                console.log(arr[idx])
                counter(arr, idx + 1)
            }, 1000)
        } else {
            callBack()
        }
    }
    el.addEventListener('click', () => {
        counter(data, 0)
    })
}

export default afterloop