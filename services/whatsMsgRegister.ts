export default async function whatsMsgRegister(
  name: string,
  phone: string,
  email: string,
  street: string,
  neighborhood: string,
  cep: string,
  city: string,
  type: string,
  text: string
) {
  const userText: string = `Olá, gostaria de cadastrar o meu imóvel na *Imobiliária Vigor*.\r\n\r\n*Cadastro de imóvel:*\n*Nome:* ${name}\r\n*Telefone:* ${phone}\r\n*Email:* ${email} \r\n\r\n----------------------------------------\r\n\r\n*Localização:* \r\n*Rua:* ${street}\r\n*Bairro:* ${neighborhood} \r\n*CEP:* ${cep}\r\n*Cidade:* ${city}\r\n*Tipo de imóvel:* ${type} 
  \r\n----------------------------------------\r\n\r\n*Mensagem:* \r\n${text}`;

  const encodeText: string = encodeURIComponent(userText);
  const msg: string = `https://wa.me//+55${phone}?text=${encodeText}`;

  return msg;
}
