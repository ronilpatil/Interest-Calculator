function calculate(){

    const p=document.getElementById("Principal").value;
    const r=document.getElementById("Rate").value;
    const t=document.getElementById("Time").value;
    const checked=document.querySelector('input[name="choice"]:checked').value
    var a=0.00
    var interest=0.00
    const result=document.getElementById("Result")
    if(p==""||r==""||t==""){
        result.innerHTML="Complete all the fields!"
        return
    }
    if(checked=="Simple"){
    a=p*(1+(r*t)/100)
    }
    else if(checked=="Compound"){
    a=p*Math.pow(1+(r/100),t)
    }
    interest=a-p
    result.innerHTML=`Interest: ${interest.toFixed(2)}<br>Total Amount: ${a.toFixed(2)}`
    return

    }