var COL = { "Rajis": "#c2306b", "Chava": "#e0783a", "Oliver": "#3a78e0", "Chachis": "#2a9d6f" };

// c = [texto, siguiente escena, amor propio, migajas, nota opcional]
var SC = {
  r1: { bg: "calle", l: [
    ["N", "Lunes, 11 am. Llevas dos horas afuera de la escuela con Oliver y Chachis, esperando a Chava."],
    ["Chava", "(mensaje) ando con los compas, al rato te busco 😘"],
    ["Oliver", "Rajis... ya van tres veces este mes."],
    ["Chachis", "Y siempre con un emoji para que no te enojes."]
  ], c: [
    ["«Es que anda ocupado, sí me va a buscar»", "r2", 0, 1, "Justificarlo ayuda a aguantar la espera, pero el mensaje no cambia: te dejó plantada otra vez."],
    ["«La neta sí me dolió»", "r2", 1, 0, "Nombrar lo que sientes es el primer paso para dejar de tragártelo."]
  ]},
  r2: { l: [
    ["Chachis", "Amiga, te trata del culo. ¿Cuándo fue la última vez que te preguntó cómo estabas?"],
    ["N", "Piensas. No te acuerdas."],
    ["Oliver", "No te decimos que lo dejes por chismosos. Te lo decimos porque te queremos."]
  ], c: [
    ["«No es tan malo, también tiene cosas bonitas»", "r3", 0, 1, "Las cosas bonitas no cancelan lo que duele. Las migajas saben rico cuando llevas hambre."],
    ["«Déjenme pensarlo...»", "r3", 1, 0, "Escuchar sin ponerte a la defensiva ya es un avance."]
  ]},
  r3: { bg: "noche", l: [
    ["N", "La 3pm. Chava aparece tambaleándose."],
    ["Chava", "No hagas drama, ya vine, ¿no?"],
    ["Chava", "Ven, bebé, me haces falta."],
    ["N", "Su abrazo huele a mentira Ese «me haces falta» te calienta el pecho otra vez."]
  ], c: [
    ["Abrazarlo y olvidar la espera", "r4", -1, 2, "Esa frase fue una migaja: poquito cariño justo cuando ya ibas a irte."],
    ["«Me dejaste esperando dos horas. Eso no está bien»", "r4", 2, 0, "Pusiste un hecho sobre la mesa sin gritar. Eso cuesta y vale."]
  ]},
  r4: { bg: "dia", l: [
    ["N", "Al día siguiente le cuentas que te dolió."],
    ["Chava", "Ay, es que eres bien intensa. Por eso me desespero contigo."],
    ["N", "De pronto la culpable eres tú."]
  ], c: [
    ["«Perdón, tienes razón, soy intensa»", "r5", -1, 1, "Pedir perdón por sentir es como se aprende a callar. Que te duela que te planten no es ser intensa."],
    ["«No. Lo que pasó fue real y no lo voy a minimizar»", "r5", 2, -1, "No dejaste que te cambiaran la historia."]
  ]},
  r5: { l: [
    ["Oliver", "No te pedimos que lo dejes hoy. Te pedimos que te veas con claridad."],
    ["Chachis", "Haz una lista: qué te da y qué te quita. A ver qué pesa más."]
  ], c: [
    ["Hacer la lista en tu cuaderno", "r6", 1, 0, "Poner las cosas en papel saca lo que la ilusión esconde."],
    ["Enojarte con ellos y dejar de contestarles", "r6", -1, 1, "Alejarte de quien te cuida hace que las migajas parezcan banquete."]
  ]},
  r6: { bg: "noche", l: [
    ["N", "Cuatro días sin saber de Chava. Y de pronto:"],
    ["Chava", "(mensaje) Te extraño. ¿Nos vemos hoy? 😘"],
    ["N", "Te tiembla el celular en la mano."]
  ], c: [
    ["Contestar en dos segundos: «¡Sí!»", "r7", -1, 2, "Responder al instante entrena a que aparezca cuando él quiera."],
    ["No contestar todavía y respirar", "r7", 1, 0, "No responder de inmediato te devuelve un poco de control."],
    ["«Podemos hablar, pero necesito que cumplas lo que dices»", "r7", 2, 0, "Pusiste una condición clara. Ahora ves si cumple."]
  ]},
  r7: { bg: "dia", l: [
    ["N", "Se ven en la plaza. Chava trae flores de gasolinera."],
    ["Chava", "Prometo cambiar. Dame otra oportunidad, Rajis."],
    ["N", "Oliver y Chachis están a dos mesas, fingiendo no mirar."]
  ], c: [
    ["«Está bien, otra vez»", "rf", -2, 2, "Sin cambios reales, «otra vez» es la misma historia con flores nuevas."],
    ["«Hasta aquí. Merezco a alguien que sí llegue»", "rf", 3, -1, "Elegirte a ti no es fácil, pero es amor propio."],
    ["«Si cambias de verdad, lo vemos. Pero yo sigo con mi vida»", "rf", 1, 0, "Te pones primero y mides con hechos, no con promesas."]
  ]},
  rf: { e: 1 }
};

var END = [
  ["Final de migajas", "Sigues en el ciclo: te aferras a un «me haces falta» y dejas de verte a ti. No es tu culpa, y se puede cambiar. Empieza por escuchar a Oliver y Chachis."],
  ["Final en proceso", "Ya ves el patrón, aunque todavía dudas. Vas bien: mide a Chava por lo que hace, no por lo que promete."],
  ["Final de banquete propio", "Te elegiste. Oliver y Chachis te abrazan y se van por tacos. Las migajas se quedaron en la banqueta."]
];

var app = document.getElementById("app");
var st, cur, li, fbk, nextId;

function esc(t) { return String(t).replace(/</g, "&lt;"); }

function menu() {
  app.innerHTML =
    '<h1>Migajas</h1>' +
    '<p class="sub">Eres Rajis. Sales con Chava, que te trata mal y te da cariño a cuentagotas. Oliver y Chachis, tus amigos, te dicen que lo dejes. ¿Te conformas con las migajas?</p>' +
    '<button class="go" id="st">Empezar</button>' +
    '<p class="note">Si algo de esto se parece a tu vida, hablarlo con alguien de confianza o con un profesional ayuda. Si hay violencia o miedo, busca apoyo de inmediato.</p>';
  document.getElementById("st").onclick = start;
}

function start() { st = { a: 0, m: 0 }; cur = "r1"; li = 0; fbk = null; draw(); }

function draw() {
  var s = SC[cur];
  if (s.e) return finish();
  var bg = s.bg || "calle";
  var top = '<div class="top"><span>Amor propio ' + st.a + ' · Migajas ' + st.m + '</span><button id="mn">Menú</button></div>';
  var who = "", txt, ch = "", sp = "";
  if (fbk) {
    who = "Nota"; txt = '<p class="fb">' + esc(fbk) + '</p>';
  } else {
    var ln = s.l[li];
    who = ln[0] == "N" ? "" : ln[0];
    txt = '<p class="txt">' + esc(ln[1]) + '</p>';
    if (who && COL[who]) sp = '<div class="sp" style="background:' + COL[who] + '">' + who[0] + '</div>';
    if (li == s.l.length - 1 && s.c) {
      ch = '<div class="ch">';
      s.c.forEach(function (c, i) { ch += '<button data-c="' + i + '">' + esc(c[0]) + '</button>'; });
      ch += '</div>';
    }
  }
  var hint = ch ? "" : '<div class="hint">Toca para continuar</div>';
  app.innerHTML = top + '<div class="stage ' + bg + '">' + sp + '</div>' +
    '<div class="box" id="bx" tabindex="0"><div class="who" style="color:' + (COL[who] || "var(--mute)") + '">' + who + '</div>' + txt + hint + ch + '</div>';
  document.getElementById("mn").onclick = function (e) { e.stopPropagation(); menu(); };
  app.querySelectorAll("[data-c]").forEach(function (b) {
    b.onclick = function (e) { e.stopPropagation(); pick(+b.dataset.c); };
  });
  var bx = document.getElementById("bx");
  bx.onclick = adv;
  bx.focus({ preventScroll: true });
}

function adv() {
  var s = SC[cur];
  if (fbk) { fbk = null; cur = nextId; li = 0; return draw(); }
  if (li < s.l.length - 1) { li++; draw(); }
}

function pick(i) {
  var c = SC[cur].c[i];
  st.a += c[2]; st.m += c[3]; nextId = c[1];
  if (c[4]) { fbk = c[4]; draw(); } else { cur = nextId; li = 0; draw(); }
}

document.addEventListener("keydown", function (e) {
  if ((e.key == "Enter" || e.key == " ") && document.activeElement && document.activeElement.id == "bx") {
    e.preventDefault(); adv();
  }
});

function finish() {
  var sc = st.a - st.m, i = sc < 2 ? 0 : sc < 7 ? 1 : 2;
  app.innerHTML = '<div class="box end" style="border-top:2px solid var(--line);border-radius:18px;cursor:default">' +
    '<h2>' + END[i][0] + '</h2><p class="sub">Amor propio: ' + st.a + ' · Migajas: ' + st.m + '</p>' +
    '<p class="txt">' + END[i][1] + '</p>' +
    '<div class="ch"><button class="go" id="re">Jugar otra vez</button></div>' +
    '<p class="note">Si algo de esto se parece a tu vida, hablarlo con alguien de confianza o con un profesional ayuda.</p></div>';
  document.getElementById("re").onclick = start;
}

menu();
