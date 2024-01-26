const pontuacao = 500;
const nivelUsuario = pontuacao >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const corUsuario = null
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao)