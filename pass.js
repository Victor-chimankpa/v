// generating random password
let password = document.getElementById('result')
function getRandomString(length) {
    let pasLength = 12
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIGKLMNOPQRSTUVWXYZ' + '123456789' + '!@#$%?^';
    const charactersLength = characters.length;
    for(let i = 0; i <= pasLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    document.getElementById('result').value = result
}
function copyPassword(){
    let copyText = document.getElementById('button')
    copyText.Selected()
    document.execCommand('copy')
}


