            var start=new Date().getTime();
            function getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                    }
                return color;
                }
            function makeShapeAppear() {
                if(Math.random()>0.5) {
                    document.getElementById("shape").style.borderRadius="50%";
                }
                else {
                    document.getElementById("shape").style.borderRadius="0";
                }
                document.getElementById("shape").style.backgroundColor=getRandomColor();
                document.getElementById("shape").style.width=(Math.random()*400)+100;
                document.getElementById("shape").style.height=Math.random()*350;
                document.getElementById("shape").style.top=Math.random()*350;
                document.getElementById("shape").style.left=Math.random()*1000;
                document.getElementById("shape").style.display="block";
                start=new Date().getTime();
            }
            function afterDelay() {
                setTimeout(makeShapeAppear,Math.random()*2000);
            }
            afterDelay();
            document.getElementById("shape").onclick=function() {
                document.getElementById("shape").style.display="none";
                var end=new Date().getTime();
                var timeTaken=(end-start)/1000;
                document.getElementById("timeTaken").innerHTML=timeTaken+" s";
                afterDelay();
            } 