function random(maxValue)  
{  
return Math.floor(Math.random() * maxValue + 1); 
}  

function pickSuit()  
{  
suit = random(4);  
if(suit == 1)  
return "����";  
if(suit == 2)  
return "�ݻ�";  
if(suit == 3)  
return "����";  
if(suit==4)  
return "����";  
}  

function cardName(card)  
{  
if(card == 1)  
return "Ace";  
if(card == 11)  
return "�̴�";  
if(card == 12)  
return "�ʺ�";  
if(card == 13)  
return "����";  
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
alert("��ҳ���21���ˣ�����ʤ��!"); 
form.c.value = parseInt(form.c.value) + 1; //��ת�������� 
form.cm.value = parseInt(form.cm.value) + (form.you.value-form.dealer.value); //ͬ�� 
form.um.value-=form.you.value-form.dealer.value; 
if(form.um.value<=0) //�������0��ʱ��ҲӦ���ж�Ϊ��ɣ� 
alert("��û�г����ˣ������¿�ʼ��Ϸ��"); 
} 
} 
function LookAtHands(form)  
{  

if(form.dealer.value > 21)  
{  
alert("���Գ���21���ˣ����ʤ��!");  
form.u.value = parseInt(form.u.value) + 1; //��ת�������� 
form.cm.value-=form.dealer.value-form.you.value; 
form.um.value = parseInt(form.um.value) + (form.dealer.value-form.you.value); //��ת�������� 
if(form.cm.value<=0) //�������0��ʱ��ҲӦ���ж�Ϊ���Ӯ�ɣ� 
alert("��ϲ���Ϊ���Ĵ�Ӯ�ң�");  
}  
else if(form.you.value<16) 
{  
alert("��������16��������ˣ�"); /* ��������16��ʲô��˼���ǵ�������ﵽ16�������Ϊ���������Ļ�Ӧ�������ж���һ���� 
���������ڵ��Եĵ���һ���Ǵ���16�ģ��������û�г���21��ô��ұ��䣬����߼��ǳ����ģ����Ǻ���alert��Ӧ����ôд�� 
*/ 
form.c.value = parseInt(form.c.value) + 1; //��ת�������� 
form.cm.value = parseInt(form.cm.value) + 1; //ͬ�� 
form.um.value--;  
if(form.um.value<=0) //����0 
alert("��û�г����ˣ������¿�ʼ��Ϸ��");  
}  
else if(form.you.value > form.dealer.value)  
{  
alert("���ʤ����!");  
form.u.value = parseInt(form.u.value) + 1; //��ת�������� 
form.cm.value-=form.you.value-form.dealer.value;  
form.um.value = parseInt(form.um.value) + (form.you.value-form.dealer.value); //��ת�������� 
if(form.cm.value<=0) //����0 
alert("��ϲ���Ϊ���Ĵ�Ӯ�ң�");  
}  
else if(form.dealer.value == form.you.value)  
{  
alert("ƽ��!");  
}  
else  
{  
alert("����ʤ��!");  
form.c.value = parseInt(form.c.value) + 1; //��ת�������� 
form.cm.value = parseInt(form.cm.value) + (form.dealer.value-form.you.value); //ͬ�� 
form.um.value-=form.dealer.value-form.you.value;  
if(form.um.value<=0) //����0 
alert("��û�г����ˣ������¿�ʼ��Ϸ��");  
}  
}  
function ReStart(form){  
form.c.value=0;  
form.u.value=0;  
form.cm.value=100;  
form.um.value=100;  

}  

