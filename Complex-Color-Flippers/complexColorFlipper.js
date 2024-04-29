const colors = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'];
//f15025
document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function()
{
    let colorArray = '#';
    for (let i=0; i<6; i++)
    {
        colorArray += colors[getRandomNumber()] //i.e colorArray = colorArray + colors
    }
    color.textContent = colorArray;
    document.body.style.backgroundColor = colorArray
});

//up until this place, we are generating 6 values of 000000 (black) constantly.
//the function below lets us generate random6 values of color

function getRandomNumber() 
{
    return Math.floor(Math.random() * colors.length);
}