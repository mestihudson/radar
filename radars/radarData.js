//This is the title for your window tab, and your Radar
document.title = "Radar de Práticas de Testes SUPDE";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adotamos'}
                  ,{'r':200,'name':'Experimentamos'}
                  ,{'r':300,'name':'Avaliaremos'}
                  ,{'r':400,'name':'Evitaremos'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = Ferramenta
//   c = Prática
//
// blipSize:
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
    { "quadrant": "Q2",
        "left" : 45,
        "top" : 18,
        "color" : "red", //#8FA227
        "items" : [

			{"name":"BDD", "pc":{"r":80,"t":100},"movement":"c", hide:true},
			{"name":"Dbehave/Dbehave WebService", "pc":{"r":85,"t":150},"movement":"t"},
            {"name":"Critérios de Aceite como CTs", "pc":{"r":65,"t":130},"movement":"c"},
			{"name":"Escrever Scripts de Testes Diretamente no Dbehave", "pc":{"r":65,"c":150},"movement":"c"},
		    {"name":"Testes Automatizados com Firebug", "pc":{"r":35,"t":140},"movement":"t"},
			{"name":"Jenkins", "pc":{"r":15,"t":140},"movement":"t"},
		    {"name":"Gestão de Testes com RQM", "pc":{"r":60,"t":165},"movement":"t"},
		    {"name":"Uso do Sikuli quando Dbehave c/ Selenium são ineficazes", "pc":{"r":40,"t":160},"movement":"t"},
		    {"name":"Soap UI WebService", "pc":{"r":30,"t":110},"movement":"t"},
		    {"name":"Testes Automatizados em DW c/ TestDW", "pc":{"r":80,"t":125},"movement":"t"},
		    {"name":"Testes Funcionais Automatizados", "pc":{"r":80,"t":115},"movement":"c"},

			{"name":"Executar Testes Automatizados com IC - Pipeline", "pc":{"r":150,"t":140},"movement":"t"},
            {"name":"Revisão por Pares de Testes e Artefatos de Testes", "pc":{"r":130,"t":160},"movement":"c"},
            {"name":"Testes em Plat. Alta c/ Ambientes Independentes", "pc":{"r":150,"t":120},"movement":"c"},
            {"name":"Testes de Aplicações Desktop c/ TestFX", "pc":{"r":130,"t":130},"movement":"t", "url":"http://www.google.com"},
            {"name":"Uso do SPI-Sistema de Povoamento de Dados Integrados", "pc":{"r":130,"t":150},"movement":"t"},

			{ name: 'Ambiente Exclusivo p/ Testes Automatizados', pc: { r: 240, t: 140 }, movement: 'c' },


			{"name":"Appium", "pc":{r: 230, t: 150},"movement":"t"},
            {"name":"Automatizar Geração de Massa de Dados", "pc":{"r":220,"t":130},"movement":"c"},
			{"name":"Publicação de Builds pelo Analista de Testes", "pc":{r: 270, t: 140},"movement":"c"},
		    {"name":"Testes de Regressão", "pc":{"r":60,"t":105},"movement":"c"},
		    {"name":"XPath Checker", "pc":{"r":50,"t":135},"movement":"t"},
		    {"name":"Testes Automatizados c/ Node.js", "pc":{"r":80,"t":165},"movement":"t"},
			{"name":"100% de Cobertura de CTs Automatizados", "pc":{"r":380,"t":135},"movement":"c"},
			{ name: 'Autolt Jubula',    pc: { "r":350,"t":130 },    movement: 't' },
			{"name":"Uso de Ferramenta Própria p/ Aut. de Testes", "pc":{"r":370,"t":125},"movement":"c"},
			{"name":"MANTIS", "pc":{"r":350,"t":140},"movement":"t"},
			{"name":"Rational XDE Tester p/ Mainframe", "pc":{"r":325,"t":155},"movement":"t"},
			{"name":"Automação e Testes c/ Selenium Puro", "pc":{"r":330,"t":135},"movement":"t"},
		    {"name":"TestKase", "pc":{"r":350,"t":155},"movement":"t"},
		    {"name":"TestLink", "pc":{"r":350,"t":150},"movement":"t"}
		  //{ name: 'Uso de Ferramenta Própria p/ Automação de Testes',    pc: { r: 340, t: 146 },    movement: 'c' }

        ]
    },
    { "quadrant": "Q3",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [

  { name: 'Não se aplica',    pc: { r: 150, t: 70 },    movement: 'c',    domain: 'mobile, front-end' },
  { name: 'Appium' ,   pc: { r: 240, t: 50 },    movement: 't' },
  { name: 'CT com Mapas Mentais' ,    pc: { r: 260, t: 35 },    movement: 'c' },

  { name: 'Testes de Usabilidade Firebug',    pc: { r: 80, t: 60 },    movement: 't' },
  { name: 'Testes Funcionais Manuais',    pc: { r: 35, t: 25 },    movement: 'c',    domain: 'back-end' },
  { name: 'Testes de Responsividade',    pc: { r: 70, t: 20},    movement: 'c',    domain: 'back-end' },
  { name: 'Testes de Usabilidade',    pc: { r: 70, t: 80 },    movement: 'c' },
  { name: 'Testes Exploratórios',    pc: {  r: 35, t: 55  },    movement: 'c' },
  { name: 'Testes de Integração',    pc: { r: 60, t: 40 },    movement: 'c' , hide: true},

  { name: 'Scripts de CTs Detalhados',    pc: { r: 380, t: 45 },    movement: 'c' },
  ]
    },
    { "quadrant": "Q1",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [

            {"name":"Qualidade de Código c/ Sonar", "pc":{"r":130,"t":220},"movement":"t"},

            {"name":"Revisão de Testes Unitários pelo Analista de Testes", "pc":{"r":250,"t":230},"movement":"c"},
            {"name":"Testes de Mutação", "pc":{"r":250,"t":220},"movement":"c"},

            {"name":"Testes de Unidade p/ dot.net - Nunit", "pc":{"r":65,"t":225},"movement":"t"},
            {"name":"Testes Unitários", "pc":{"r":35,"t":225},"movement":"c"},
            {"name":"TDD, BDD  c/ Cucumber", "pc":{"r":80,"t":215},"movement":"t", hide: true},

        ]
    },
    { "quadrant": "Q4",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [
            { name: 'Testes de Performance-SUPST', pc: { r: 70, t: 320},  movement: 'c' },

            { name: 'Teste de Acessibilidade-ASES', pc: { r: 150, t: 300 },              movement: 't'},
            {"name":"Testes de Acessibilidade", "pc":{r: 150, t: 335},"movement":"c"},

			{ name: 'RxJS',              pc: { r: 260, t: 320 },              movement: 't', hide: true},

            { name: 'Testes Performance Hudson', pc: { r: 380, t: 320 },  movement: 't'	 , hide: true},
            {"name":"Testes Performance Jmeter", "pc":{"r":380,"t":330},"movement":"t", hide: true}

            //{ name: 'Mustache/Handlebars template',   pc: { r: 50, t: 298 },              movement: 'c',              domain: 'template' },

        ]
    }
];
