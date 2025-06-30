function doubleOrTriple(number , doDouble){
if(doDouble === true){
    const result = number * 3;
    return result;

}
else{
    const result = number * 4;
    return result;
}
}
console.log(doubleOrTriple(22, true));
console.log(doubleOrTriple(22, false));

