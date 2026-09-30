const $=s=>document.querySelector(s);
let current=0, selected=null, answers=[], studentName="";

function show(id){
  ["start","quiz","result","review"].forEach(x=>$("#"+x).classList.add("hidden"));
  $("#"+id).classList.remove("hidden");
}
function level(i){
  if(i<10) return "FUNDAMENTOS";
  if(i<20) return "APLICAÇÃO";
  if(i<30) return "INTERPRETAÇÃO";
  return "DESAFIO SQL";
}
function render(){
  const q=questions[current]; selected=null; $("#confirmBtn").disabled=true;
  $("#counter").textContent=`Questão ${current+1} de ${questions.length}`;
  const pct=Math.round((current/questions.length)*100);
  $("#percent").textContent=pct+"%"; $("#bar").style.width=pct+"%";
  $("#difficulty").textContent=level(current);
  $("#question").textContent=q.question;
  $("#options").innerHTML="";
  q.options.forEach((opt,i)=>{
    const b=document.createElement("button"); b.className="option"; b.textContent=`${String.fromCharCode(65+i)}) ${opt}`;
    b.onclick=()=>{document.querySelectorAll(".option").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");selected=i;$("#confirmBtn").disabled=false};
    $("#options").appendChild(b);
  });
}
$("#startBtn").onclick=()=>{
  const input=$("#studentName");
  const name=input.value.trim().replace(/\s+/g," ");
  if(!name){
    $("#nameError").textContent="Digite seu nome antes de iniciar.";
    input.focus();
    return;
  }
  studentName=name;
  $("#nameError").textContent="";
  show("quiz");
  render();
};
$("#confirmBtn").onclick=()=>{
  answers[current]=selected; current++;
  if(current<questions.length) render(); else finish();
};
function finish(){
  $("#studentResultName").textContent=`Resultado de ${studentName}`;
  const score=answers.reduce((n,a,i)=>n+(a===questions[i].answer),0), pct=Math.round(score/questions.length*100);
  $("#score").textContent=score; $("#resultPercent").textContent=pct+"% de aproveitamento";
  if(score<=19){$("#resultIcon").textContent="📚";$("#resultTitle").textContent="Você precisa revisar";$("#resultMessage").textContent="Alguns conceitos importantes ainda precisam ser revisados. Volte aos comandos SQL, confira seus erros e tente novamente!";}
  else if(score<=31){$("#resultIcon").textContent="👍";$("#resultTitle").textContent="Bom resultado!";$("#resultMessage").textContent="Você já domina boa parte do conteúdo, mas ainda existem alguns pontos que podem melhorar. Revise seus erros para avançar ainda mais.";}
  else{$("#resultIcon").textContent="🏆";$("#resultTitle").textContent="Parabéns! Excelente desempenho!";$("#resultMessage").textContent="Você demonstrou ótimo domínio dos comandos SQL estudados. Continue assim!";}
  show("result");
}
function review(){
  const list=$("#reviewList"); list.innerHTML="";
  let errors=0;
  questions.forEach((q,i)=>{
    if(answers[i]!==q.answer){
      errors++;
      const d=document.createElement("article");d.className="review-item";
      d.innerHTML=`<h3>Questão ${i+1}</h3><div class="question"></div><p class="wrong"><b>Sua resposta:</b> ${q.options[answers[i]]??"Não respondida"}</p><p class="correct"><b>Resposta correta:</b> ${q.options[q.answer]}</p><p class="explanation"><b>Por quê?</b> ${q.explanation}</p>`;
      d.querySelector(".question").textContent=q.question; list.appendChild(d);
    }
  });
  if(!errors) list.innerHTML='<article class="review-item"><h3>🎉 Nenhum erro!</h3><p>Você acertou todas as questões.</p></article>';
  show("review");
}
$("#reviewBtn").onclick=review;
$("#backBtn").onclick=()=>show("result");
$("#restartBtn").onclick=()=>{
  current=0; selected=null; answers=[];
  show("start");
  $("#studentName").value=studentName;
  $("#studentName").focus();
};
