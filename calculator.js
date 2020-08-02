function calculate(){

            const p=document.getElementById("Principal").value;
            const r=document.getElementById("Rate").value;
            const t=document.getElementById("Time").value;
            const checked=document.querySelector('input[name="choice"]:checked').value
            var a=null
            const result=document.getElementById("Result")
            if(p==""||r==""||t==""){
                result.innerHTML="Complete all the fields!"
                return
            }
            if(checked=="Simple"){
            a=p+(p*r*t)/100
            }
            else if(checked=="Compound"){
            a=p*Math.pow(1+(r/100),t)
            }
           
            result.innerHTML="Total Amount: "+a.toFixed(2)
            }