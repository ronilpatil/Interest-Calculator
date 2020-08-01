function calculate(){
            const p=document.getElementById("Principal").value;
            const r=document.getElementById("Rate").value;
            const t=document.getElementById("Time").value;
            const a=p*Math.pow(1+(r/100),t)
            var result=document.getElementById("Result")
            result.innerHTML="Total Amount: "+a.toFixed(2)
            }