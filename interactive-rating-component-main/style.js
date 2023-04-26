var btn = document.getElementById("submit")
var hasil = document.getElementById("hasil")
var container = document.getElementById("container")
var containerhidden = document.getElementById("container-hidden")
var rate=[]
for(var i=0;i<6;i++)
{
    rate[i]=document.getElementById("rate"+[i])
}

rate1.onclick = function()
{
    ratee1()
}
rate2.onclick = function()
{
    ratee2()
}
rate3.onclick = function()
{
    ratee3()
}
rate4.onclick = function()
{
    ratee4()
}
rate5.onclick = function()
{
    ratee5()
}

btn.onclick=function()
{
    click()
}
function click()
{
    if(btn.innerHTML=="mmk")
    {
        btn.innerHTML="Submit"
    }
    else
    {
        btn.innerHTML="mmk"
    }
}
function ratee1()
{
    if (rate1.style.background=="orange")
    {
        rate1.style.background="hsl(216, 12%, 54%)"
    }
    else
    {
        rate1.style.background="orange"
        rate2.style.background="hsl(216, 12%, 54%)"
        rate3.style.background="hsl(216, 12%, 54%)"
        rate4.style.background="hsl(216, 12%, 54%)"
        rate5.style.background="hsl(216, 12%, 54%)"

    }
    hasil.innerHTML="you selected 1 out of 5"
}
function ratee2()
{
    if (rate2.style.background=="orange")
    {
        rate2.style.background="hsl(216, 12%, 54%)"
    }
    else
    {
        rate2.style.background="orange"
        rate1.style.background="hsl(216, 12%, 54%)"
        rate3.style.background="hsl(216, 12%, 54%)"
        rate4.style.background="hsl(216, 12%, 54%)"
        rate5.style.background="hsl(216, 12%, 54%)"
    }
    hasil.innerHTML="you selected 2 out of 5"
}
function ratee3()
{
    if (rate3.style.background=="orange")
    {
        rate3.style.background="hsl(216, 12%, 54%)"

    }
    else
    {
        
        rate3.style.background="orange"
        rate2.style.background="hsl(216, 12%, 54%)"
        rate1.style.background="hsl(216, 12%, 54%)"
        rate4.style.background="hsl(216, 12%, 54%)"
        rate5.style.background="hsl(216, 12%, 54%)"
    }
    hasil.innerHTML="you selected 3 out of 5"
}
function ratee4()
{
    if (rate4.style.background=="orange")
    {
        rate4.style.background="hsl(216, 12%, 54%)"
    }
    else
    {
        rate4.style.background="orange"
        rate2.style.background="hsl(216, 12%, 54%)"
        rate3.style.background="hsl(216, 12%, 54%)"
        rate1.style.background="hsl(216, 12%, 54%)"
        rate5.style.background="hsl(216, 12%, 54%)"
    }
    hasil.innerHTML="you selected 4 out of 5"
}
function ratee5()
{
    if (rate5.style.background=="orange")
    {
        rate5.style.background="hsl(216, 12%, 54%)"
    }
    else
    {
        rate5.style.background="orange"
        rate2.style.background="hsl(216, 12%, 54%)"
        rate3.style.background="hsl(216, 12%, 54%)"
        rate4.style.background="hsl(216, 12%, 54%)"
        rate1.style.background="hsl(216, 12%, 54%)"
    }
    hasil.innerHTML="you selected 5 out of 5"
}
btn.onclick = function submit()
{
    if(rate1.style.background=="orange"||rate2.style.background=="orange"||rate3.style.background=="orange"
    ||rate4.style.background=="orange"||rate5.style.background=="orange")
    {
        container.style.display="none"
        containerhidden.style.display="grid"
    }
    else{
        
    }
}
