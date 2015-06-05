function random(maxValue)  
{  
return Math.floor(Math.random() * maxValue + 1); 
}  

function pickSuit()  
{  
suit = random(4);  
if(suit == 1)  
return "红桃";  
if(suit == 2)  
return "草花";  
if(suit == 3)  
return "方块";  
if(suit==4)  
return "红心";  
}  

function cardName(card)  
{  
if(card == 1)  
return "Ace";  
if(card == 11)  
return "侍从";  
if(card == 12)  
return "皇后";  
if(card == 13)  
return "国王";  
return "" + card;  
}  

function cardValue(card)  
{  
if(card == 1)  
return 11;  
if(card > 10)  
return 10;  
return card;  
}  

function PickACard(strWho)  
{  
card = random(13);  
suit = pickSuit();  
//alert(strWho + " picked the " + cardName(card) + " of " + suit);  
return cardValue(card);  
}  

function NewHand(form)  
{  
form.dealer.value = 0;  
form.you.value = 0;  
form.dealer.value = eval(form.dealer.value) + PickACard("Dealer");  
form.you.value = eval(form.you.value) + PickACard("You");  
} 
function Dealer(form) 
{ 
while(form.dealer.value < 16) 
{ 
form.dealer.value = eval(form.dealer.value) + PickACard("Dealer"); 
} 
} 

function User(form) 
{ 

form.you.value = eval(form.you.value) + PickACard("You"); 
if(form.you.value > 21) 
{ 
alert("玩家超过21点了，电脑胜了!"); 
form.c.value = parseInt(form.c.value) + 1; //先转换成数字 
form.cm.value = parseInt(form.cm.value) + (form.you.value-form.dealer.value); //同上 
form.um.value-=form.you.value-form.dealer.value; 
if(form.um.value<=0) //好像等于0的时候也应该判定为输吧？ 
alert("你没有筹码了，请重新开始游戏！"); 
} 
} 
function LookAtHands(form)  
{  

if(form.dealer.value > 21)  
{  
alert("电脑超过21点了，玩家胜出!");  
form.u.value = parseInt(form.u.value) + 1; //先转换成数字 
form.cm.value-=form.dealer.value-form.you.value; 
form.um.value = parseInt(form.um.value) + (form.dealer.value-form.you.value); //先转换成数字 
if(form.cm.value<=0) //好像等于0的时候也应该判定为玩家赢吧？ 
alert("恭喜你成为最后的大赢家！");  
}  
else if(form.you.value<16) 
{  
alert("点数不够16，玩家输了！"); /* 点数不够16是什么意思？是点数必须达到16否则就判为输吗？这样的话应该首先判断这一条； 
或者是由于电脑的点数一定是大于16的，如果电脑没有超过21那么玩家必输，这个逻辑是成立的，但是好像alert不应该这么写。 
*/ 
form.c.value = parseInt(form.c.value) + 1; //先转换成数字 
form.cm.value = parseInt(form.cm.value) + 1; //同上 
form.um.value--;  
if(form.um.value<=0) //等于0 
alert("你没有筹码了，请重新开始游戏！");  
}  
else if(form.you.value > form.dealer.value)  
{  
alert("玩家胜出了!");  
form.u.value = parseInt(form.u.value) + 1; //先转换成数字 
form.cm.value-=form.you.value-form.dealer.value;  
form.um.value = parseInt(form.um.value) + (form.you.value-form.dealer.value); //先转换成数字 
if(form.cm.value<=0) //等于0 
alert("恭喜你成为最后的大赢家！");  
}  
else if(form.dealer.value == form.you.value)  
{  
alert("平局!");  
}  
else  
{  
alert("电脑胜了!");  
form.c.value = parseInt(form.c.value) + 1; //先转换成数字 
form.cm.value = parseInt(form.cm.value) + (form.dealer.value-form.you.value); //同上 
form.um.value-=form.dealer.value-form.you.value;  
if(form.um.value<=0) //等于0 
alert("你没有筹码了，请重新开始游戏！");  
}  
}  
function ReStart(form){  
form.c.value=0;  
form.u.value=0;  
form.cm.value=100;  
form.um.value=100;  

}  

