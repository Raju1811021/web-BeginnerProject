document.getElementById("u4").addEventListener('click',calculate);
document.getElementById("u2").addEventListener('click',calculate);
document.getElementById("u3").addEventListener('click',calculate);
document.getElementById("u1").addEventListener('click',calculate);
output_container=document.getElementById("s2");
show='';
total=undefined;
oprend='';
function calculate(element)
{
    e=element.target.innerHTML;
    if(!isNaN(e))
    {
        show+=e;
        output_container.value=show;
    }
    else if(e=='+'||e=='-'||e=='*'||e=='/'||e=='%'||e=='!'||e=='.')
    {
        show+=e;
        output_container.value=show;
    }
    else if(e=='Back')
    {
        show=show.slice(0,show.length-1);
        output_container.value=show;
    }
    else if(e=='clr')
    {
        show='';
        output_container.value=show;
    }
    else if(e=='ceil')
    {
        output_container.value=Math.ceil(output_container.value);
    }
    else if(e=='floor')
    {
        output_container.value=Math.floor(output_container.value);
    }
    else if(e=='=')
    {
        for(i=0;i<show.length;i++)
        {
            if(!isNaN(show[i])||show[i]=='.')
            {
                oprend+=show[i];
                continue;
            }
            if(show.indexOf(oprend)==0)
                total=Number(oprend);
            else
                total=result(total,oprend,operator)
            operator=show[i];
            oprend='';
        }
        total=result(total,oprend,operator);
        output_container.value=total;
        oprend='';
        show='';
    }
}
function result(op1,op2,op)
{
    if(op=="+")
        return(Number(op1)+Number(op2));
    if(op=="*")
        return(Number(op1)*Number(op2));
    if(op=="-")
        return(Number(op1)-Number(op2));
    if(op=="/")
        return(Number(op1)/Number(op2));
    if(op=='%')
        return(Number(op1)%Number(op2));
    if(op=='!')
        return(factorial(parseInt(op1)));
}
function factorial(n)
{
    var fact=1;
    for(i=1;i<=n;i++)
        fact=fact*i;
    return(fact);
}