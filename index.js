const information_gathering_items_business = [
  "Mapear colaboradores",
  "Mapear vagas de emprego",
  "Mapear endereços de e-mail",
  "Mapear padrão de usuários",
  "Mapear vazamento de dados",
  "Mapear credenciais na DeepWeb",
  "Mapear dados no Pastebin",
  "Mapear dados no Trello",
  "Mapear domínios similares",
  "Mapear cache de sites",
  "Realizar Google Hacking",
  "Realizar Bing Hacking",
  "Non Delivery Notification",
  "Mapear metadados em arquivos",
  "Mapear informações relevantes"
]

const information_gathering_items_infra = [
  "Pesquisa Whois",
  "Pesquisa RDAP",
  "Pesquisa por IP",
  "Pesquisa BGP",
  "Pesquisa Shodan",
  "Pesquisa Censys",
  "Pesquisa em certificados",
  "Pesquisa DNS direta",
  "Pesquisa DNS reversa",
  "Pesquisa DNS zone transfer",
  "Pesquisa passiva (virustotal)",
  "Pesquisa passiva (dnsdumpster)",
  "Pesquisa passiva (securitytrails)",
  "Pesquisa SPF",
  "Pesquisa por subdomínios",
  "Pesquisa subdomain takeover"
]

const information_gathering_items_web = [
  "Pesquisa Robots.txt",
  "Pesquisa sitemap.xml",
  "Identificar directory listing",
  "Realizar mirror website",
  "Identificar erros e códigos",
  "Identificar webserver",
  "Identificar métodos aceitos",
  "Pesquisa por diretórios",
  "Pesquisa por arquivos",
  "Pesquisa passiva (wappalyzer)",
  "Identificar WAF"
]

const recon_items = [
  "Mapear a rota",
  "Mapear hosts ativos",
  "Mapear portas TCP abertas",
  "Mapear portas UDP abertas",
  "Mapear serviços ativos",
  "Identificar o Sistema Operacional",
  "Identificar mecanismos de defesa"
]

const environment_analysis_items = [
  "Identificar detalhes dos serviços",
  "Identificar pontos de entrada",
  "Identificar má configuração",
  "Identificar dados sensíveis",
  "Identificar credenciais default",
  "Identificar brute force"
]

const vulnerability_analysis_items = [
  "Pesquisa por vulnerabilidades públicas",
  "Pesquisa por exploits públicos",
  "Pesquisa por vulnerabilidade não conhecida"
]


function add_items(list, ul) {

  list.forEach(e => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = e.replaceAll(' ', '_');
    checkbox.name = e.replaceAll(' ', '_');;
    checkbox.classList.add('checkinput')

    const span = document.createElement('span');
    span.innerText = e;

    const label = document.createElement('label');
    label.for = e;


    label.appendChild(checkbox);
    label.appendChild(span);
    li.appendChild(label);

    ul.appendChild(li)
  })
}

const information_gathering_business = document.getElementById('information_gathering__business');
const information_gathering_infra = document.getElementById('information_gathering__infra');
const information_gathering_web = document.getElementById('information_gathering__web');
const recon = document.getElementById('recon');
const environment_analysis = document.getElementById('environment_analysis')
const vulnerability_analysis = document.getElementById('vulnerability_analysis');

add_items(information_gathering_items_business, information_gathering_business);
add_items(information_gathering_items_infra, information_gathering_infra);
add_items(information_gathering_items_web, information_gathering_web);
add_items(recon_items, recon);
add_items(environment_analysis_items, environment_analysis);
add_items(vulnerability_analysis_items, vulnerability_analysis);


function close_all() {
  document.querySelectorAll('.caption').forEach(e => {
    const ul = e.querySelector('ul');
    if(ul.contains('close')) {
      ul.classList.add('close');
    }
  })
}

document.querySelectorAll('.caption').forEach(e => {
  const h4_btn = e.querySelector('h4');
  h4_btn.onclick = () => {
    // close_all();
    e.querySelector('ul').classList.toggle('close');
  }
})

document.querySelectorAll('.checkinput').forEach(checkbox => {
  checkbox.onclick = () => {
    localStorage.setItem(checkbox.id, checkbox.checked)
  }
})

Object.keys(localStorage).forEach(key => {
  const checkbox = document.getElementById(key);
  localStorage.getItem(key) === 'false' ? checkbox.checked = false : checkbox.checked = true;
})

const reset_btn = document.getElementById('reset_btn');
reset_btn.onclick = () => {
  document.querySelectorAll('.checkinput').forEach(e => e.checked = false);
  localStorage.clear();
}