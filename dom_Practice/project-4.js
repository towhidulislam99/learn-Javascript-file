

const extractText = () =>{
    const fileInput = document.getElementById('imageInput');
    const outputDiv = document.getElementById('output');

    const imageFile = fileInput.files[0];

    if (!imageFile){
        outputDiv.textContent = 'Please Select an Image File';
        return;
    }

    Tesseract.recognize(
        imageFile,
        'eng'
    ).then(({data}) =>{
        outputDiv.textContent = data.text;
    }).catch( (error) => {
        console.error('Error' , error);
        outputDiv.textContent = 'Error';
    })
}