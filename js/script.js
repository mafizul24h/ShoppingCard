
// Phone Increase 
document.getElementById('phone-plus').addEventListener('click', function(){
    // console.log('Plus Button');
    const inputValue = document.getElementById('phone-qtn');
    const inputValuString = inputValue.value;
    const phoneQuantaty = parseInt(inputValuString);
    // console.log(phoneQuantaty);

    const newphoneQuantaty = phoneQuantaty + 1;
    // console.log(newphoneQuantaty);

    inputValue.value = newphoneQuantaty;
})

// Phone Decrease 
document.getElementById('phone-minus').addEventListener('click', function(){
    // console.log('Plus Button');
    const inputValue = document.getElementById('phone-qtn');
    const inputValuString = inputValue.value;
    const phoneQuantaty = parseInt(inputValuString);
    // console.log(phoneQuantaty);

    const newphoneQuantaty = phoneQuantaty - 1;
    // console.log(newphoneQuantaty);

    inputValue.value = newphoneQuantaty;
})