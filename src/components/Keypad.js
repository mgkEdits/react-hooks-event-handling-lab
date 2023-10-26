// Code Keypad Component Here

function Keypad (){

    const handlePasswordInput = () => {
        console.log('Entering password...');
    }

    return (
        <div><input type="password" onChange={handlePasswordInput} /></div>
    )
}

export default Keypad;