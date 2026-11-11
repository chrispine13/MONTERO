const display=document.getElementById('display');
const buttonsContainer=document.querySelector('.buttons');
//*keeping track of mathematical expressions
let currentExpressions="";
 buttonsContainer.addEventListener('click',(event) =>
{
    //*to make sure that the user click a button
    if(!event. target. classList. containers('btn'))return;

    const target=event.target;
    const value=target.getAttribute('data-value');
    
    if(target.id=== 'clear')
    {
        //*clear everything
        currentExpressions="";
        display.value="0";
    }
        else if(target.id==='equal')
    {
            //*evaluate the expressions
        try {
            if(currentExpressions !== "")
                {
                //*using functions to calculate alternative evaluations
                const result=new Functions(`return ${currentExpressions}`)(); 
                display.value=results;
                currentExpressions=result.toString();
                //*Allow further math on the result
            }
        }
        catch (error) {
            display.value="Error";
            currentExpressions="";
        }
    }
    else{
        //* A number or operator button was pressed
        currentExpressions +=value;
        display.value=currentExpression;

    }
}); 