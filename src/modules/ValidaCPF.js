export default class ValidaCPF {
	constructor(cpfEnviado) {
		Object.defineProperty(this, 'cpfLimpo', {
			writable: false,
			enumerable: true,
			configurable: false,
			value: cpfEnviado.replace(/\D+/g, '')
		});
	}

	generatesNewCPF() {
		const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
		const digito1 = ValidaCPF.generatesDigit(cpfSemDigitos);
		const digito2 = ValidaCPF.generatesDigit(cpfSemDigitos + digito1);
		this.novoCPF = cpfSemDigitos + digito1 + digito2;
	}

	static generatesDigit(cpfSemDigitos) {
		let total = 0;
		let reverso = cpfSemDigitos.length + 1;

		for(let stringNumerica of cpfSemDigitos) {
			total += reverso * Number(stringNumerica);
			reverso--;
		}

		const digito = 11 - (total % 11);
		return digito <= 9 ? String(digito) : '0';
	}
	
	isSequencia() {
		return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
	}

	validates() {
		if(!this.cpfLimpo) return false;
		if(typeof this.cpfLimpo !== 'string') return false;
		if(this.cpfLimpo.length !== 11) return false;
		if(this.isSequencia()) return false;
		this.generatesNewCPF();

		return this.novoCPF === this.cpfLimpo;
	}
}
