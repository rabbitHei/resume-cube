window.onload = function () {
    /*��ȡ����Ԫ��*/
    var pic ;//ħ��ȫ������
    var bd = document.querySelector("body");//body
    var box = document.querySelector(".box");//����ħ��ģ��
    var cube = document.querySelectorAll(".box div");//ħ��S
    var nav = document.querySelectorAll(".nav li a");//����S
    var firstA = document.querySelector(".firstA");//����
    var pTxt = document.querySelectorAll(".txt-bt");//�ײ�����
    var random = function (e) {
        var num =Math.round(Math.random()*e);
        return num;
    }//���������
    var numArr1 = [1,2,3,8,9,10,15,16,17,22,23,24];//ħ������
    var numArr2 = [4,5,6,7,11,12,13,14,18,19,20,21,25];//ħ������
    var pop =document.querySelector(".pop");//������
    var back = pop.querySelector(".back");//���ذ�ť
    var video =pop.querySelector("video");//��Ƶ
    var videoArr = ["ani2.webm","ani3.webm","ani4.webm","ani7.webm","v_mushi.webm","v_xuezhe_in.webm"];//��Ƶ��
    var titleArr =["Introduce","Skill","Hobby","Experience","Evaluate"," Contact"];//������
    var pCont = document.querySelectorAll(".pCont");//��������
    var bgImgArr =["1920x1200.jpg","1920x12001.jpg","1920x12002.jpg","1920x12003.jpg","1920x12004.jpg","1920x12005.jpg","1920x12006.jpg","1920x12007.jpg","1920x12008.jpg","1920x12009.jpg","1920x120010.jpg","1920x120011.jpg","1920x120012.jpg","1920x120013.jpg","1920x120014.jpg","bd123.jpg","bd321.jpg"];//������
    var bdPersonArr =["peo1_03.png","peo2_03.png","peo3_03.png","peo4_03.png","peo5_03.png","peo6_03.png","peo7_03.png","peo8_03.png","peo9_03.png"];//������

    /*���������رտ���*/
    firstA.addEventListener("animationend", function (e) {
        if(e.animationName=="oneA"){
            this.style.display="none";//�Ӷ��������ᴥ������¼� �����ж϶�����
        }
    })
    /*ע������ƶ�ħ�������¼�*/
    mouseMove();
    function mouseMove() {
        bd.onmousemove = function (e) {
            /*x,yԲ������*/
            var x = bd.offsetWidth / 2;
            var y = bd.offsetHeight / 2;
            //���λ��
            var mx = e.clientX;
            var my = e.clientY;
            //Բ�ľ���
            var dx = mx - x;
            var dy = my - y;
            //�Ƕ�
            var yAngle = Math.ceil(dx / 30);//����
            yAngle = yAngle > 15 ? 15 : yAngle;
            yAngle = yAngle < -15 ? -15 : yAngle;
            var xAngle = Math.ceil(dy / 30);//����
            xAngle = xAngle > 15 ? 15 : xAngle;
            xAngle = xAngle < -15 ? -15 : xAngle;
            //console.log(yAngle,xAngle);
            box.style.transform = "translate(-50%,-50%) rotateX(" + (-xAngle) + "deg) rotateY(" + yAngle + "deg)";

        }
    }

    /*��ħ�����¼�*/
    everySquare();
    function everySquare() {
        for (var i = 0; i < cube.length; i++) {
            //����ħ������
            cube[i].index = i;
            cube[i].onmouseenter = direction;//�����¼�
            cube[i].onmouseleave = function () {
                this.style.transform = "none";
                for (var i = 0; i < pTxt.length; i++) {
                    pTxt[i].classList.remove("now");
                }
            }//�뿪�¼�
            cube[i].onclick= function () {
                //ħ����ɢ
                for(var i=0;i<numArr1.length;i++){
                    cube[numArr1[i]-1].style.transform="translate("+random(-600)+"px,"+(random(600)-300)+"px) rotateY(30deg)";
                }
                for(var j=0;j<numArr2.length;j++){
                    cube[numArr2[j]-1].style.transform="translate("+random(600)+"px,"+(random(600)-300)+"px) rotateY(-30deg)";
                }
                this.style.transform="scale3d(0.1,0.1,0.1)";
                pic=this.index;
                //������
                if(pic>=6){
                    pop.querySelector(".popA1").style.display="none";
                    video.src="";
                    pop.querySelector(".popA2").style.display="block";
                    var bgiNum = random(bgImgArr.length);
                    console.log(bgiNum);
                    pop.querySelector(".popA2").style.backgroundImage="url(images/"+bgImgArr[bgiNum]+")";
                    pop.querySelector(".popA2 h3").innerHTML=pic+1;
                    pop.classList.add("current");
                }else {
                    pop.querySelector(".popA1").style.display="inline-block";
                    pop.querySelector(".popA2").style.display="none";
                    if(pic==1||pic==2||pic==3){
                        pop.querySelector(".popA1").style.right="auto";
                        pop.querySelector(".popA1").style.left="10%";
                    }else{
                        pop.querySelector(".popA1").style.left="auto";
                        pop.querySelector(".popA1").style.right="10%";
                    }
                    for(var k=0;k<pCont.length;k++){
                        pCont[k].style.display="none";
                    }
                    pCont[pic].style.display="block";
                    pop.classList.add("current");
                    video.src="./videos/"+videoArr[pic];
                    pop.querySelector("h4").innerHTML=titleArr[pic];
                }
                pop.style.top="0";
                pop.style.opacity= "1";
                back.onclick= function () {
                    pop.classList.remove("current");
                    pop.style.top="100%";
                    pop.style.opacity= "0";
                    cube[pic].style.transform="scale3d(0.1,0.1,0.1)";
                    setTimeout(function () {
                        for(var i =0;i<cube.length;i++){
                            cube[i].style.transform="none";
                        }
                    },1000)
                }
            }//����¼�
        }
        function direction(e) {
            var fx = e.clientX;
            var fy = e.clientY;
            var lx;
            var ly;
            //����ƶ�
            this.onmousemove = function (e) {
                lx = e.clientX;
                ly = e.clientY;
                var disx = lx - fx;
                var disy = ly - fy;
                //console.log(disx,disy);
                if (disx != 0 || disy != 0) {
                    this.onmousemove = null;
                    var absx = Math.abs(disx);
                    var absy = Math.abs(disy);
                    if (absx >= absy) {
                        this.style.transform = "translateZ(" + 100 + "px) rotateY(" + (disx / absx * 360) + "deg)";
                    } else {
                        this.style.transform = "translateZ(" + 100 + "px) rotateX(" + (-disy / absy * 360) + "deg)";
                    }
                }
            }//�����ж�
            //�ı�ײ�����
            var index = this.index;
            if (index >= 6) {
                pTxt[6].querySelector("span").innerHTML = index + 1;
                pTxt[6].classList.add("now");
                var tbSpan= pTxt[6].querySelectorAll("span");
                for(var j =0;j<tbSpan.length;j++){
                    tbSpan[j].style.transitionDelay=j/20+"s";
                }
            } else {
                pTxt[index].classList.add("now");
                var pSpans = pTxt[index].querySelectorAll("span");
                for(var i =0;i<pSpans.length;i++){
                    pSpans[i].style.transitionDelay=i/20+"s";
                }
            }

        }
    }

    /*�������л�*/
    navLetGo();
    function navLetGo() {
        for (var i = 0; i < nav.length; i++) {
            nav[i].onclick = function () {
                for (var j = 0; j < nav.length; j++) {
                    nav[j].classList.remove("active");
                }
                this.classList.add("active");
            }
        }
    }
    
}