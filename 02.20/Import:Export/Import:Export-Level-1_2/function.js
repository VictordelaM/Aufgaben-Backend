export const first = (names,nums) => {
    console.log("first",names[0])
    console.log("first",nums[0])}

export const removeLast = (names,nums) => {
    console.log("removeLast", ...names.slice(0,-1))
    console.log("removeLast", ...nums.slice(0,-1))
}

export const onlyLast = (names,nums) => {
    console.log("onlyLast",...names.pop())
    console.log("onlyLast",...nums.pop())
}

export const removeFirst = (names,nums) => {
    console.log("names", names)
    console.log("removeFirst",...names.slice(1,(nums.length -1)))
    console.log("removeFirst",...nums.slice(1,(nums.length -1)))
}

// export const removeLast = (names,nums) => {
    
// }