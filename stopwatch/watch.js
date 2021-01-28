document.querySelector("#button").addEventListener('click',watch)
function watch(ele)
{
    if(ele.target.innerHTML=='START')
    {
        h=setInterval(SEC,1000);
        ele.target.innerHTML='STOP';

    }
    else if(ele.target .innerHTML=='STOP')
    {
        clearInterval(h);
        ele.target.innerHTML='START';
    }
    else if(ele.target.innerHTML=='RESET')
    {
        m=0;s=0;
        document.querySelector("#min").innerHTML='0'+m;
        document.querySelector("#sec").innerHTML='0'+s;
        clearInterval(h);
        document.querySelector('#start').innerHTML='START';
    }
}
s=1;
m=0;
function SEC()
{
    var sec=document.querySelector("#sec");
    var min=document.querySelector("#min");
    if(s<=9)
        sec.innerHTML='0'+s;
    else
        sec.innerHTML=s;
    if(s==59)
    {
        m++;
        if(m<=9)
            min.innerHTML='0'+m;
        else
            min.innerHTML=m;
        s=1;
    }
    s++;
}