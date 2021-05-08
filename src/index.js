import GeraCPf from './modules/GeraCPF'
import './assets/css/style.css'

(function() {
	const gera = new GeraCPf()
	const cpfGerado = document.querySelector('.cpf-gerado')

	cpfGerado.innerHTML = gera.geranovoCpf()
})()