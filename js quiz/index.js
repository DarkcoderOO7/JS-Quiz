var data=[
    {
        question: 'Which framework is related to javascript',
        a: '.net',
        b: 'Flask',
        c: 'React',
        d:'Django',
        correct: 'c'
    },
    {
        question: 'Which is not a programming language',
        a: 'HTML',
        b: 'C',
        c: 'Python',
        d:'Java',
        correct: 'a'
    },
    {
        question: 'Which is not a framework ',
        a: 'react',
        b: 'javascrip',
        c: 'Angular',
        d:'Django',
        correct: 'b'
    },
    {
        question: 'CSS is a _____ language',
        a: 'programming',
        b: 'framework',
        c: 'Blockchain',
        d:'Stylesheet',
        correct: 'd'
    }

]
var quiz=document.getElementById('quiz')
var answer=document.querySelectorAll('.answer')
var qsn=document.getElementById('qsn')
var option_a= document.getElementById('a_value')
var option_b= document.getElementById('b_value')
var option_c= document.getElementById('c_value')
var option_d= document.getElementById('d_value')

var submitbtn=document.getElementById('submit')

var curntqsn=0
var quizscr=0

load()

function load()
{
    deselect()
    console.log(answer)
    qsn.innerHTML=data[curntqsn].question
    option_a.innerText=data[curntqsn].a
    option_b.innerText=data[curntqsn].b
    option_c.innerText=data[curntqsn].c
    option_d.innerText=data[curntqsn].d
   

}
submitbtn.addEventListener('click',()=>{
    var selectedoption;
    answer.forEach(answer=>{
        if(answer.checked)
        {
            selectedoption=answer.id
            console.log(selectedoption)
        }
    })
    if(selectedoption==data[curntqsn].correct)
    {
        quizscr= quizscr+1

    }
    curntqsn=curntqsn+1
    if(curntqsn==data.length)
    {
        document.getElementById('qsndiv').innerHTML=`<h1>You have answered ${quizscr} correctly out of ${data.length}</h1>`
    }
    else{
    load()
    }
})

    function deselect()
    {
        answer.forEach(answer=>answer.checked=false)
    }

















