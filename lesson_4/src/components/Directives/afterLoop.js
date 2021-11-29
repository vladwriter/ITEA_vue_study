const afterloop = (el, binding) => {
    console.log('Element number - ' + (binding.value.index+1))
    if(binding.value.index === binding.value.array.length -1){
        binding.value.callBack()
    }
}

export default afterloop