const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
  codigo: { type: String, required: true },
  nome: { type: String, required: true },
  sobrenome: { type: String, required: true },
  dataNascimento: { type: Date, required: true },
  telefone: { type: String, required: true },
  endereco: { type: String, required: true },
  cidade: { type: String, required: true },
  estado: { type: String, required: true },
  status: { type: String, enum: ['Ativo', 'Inativo'], required: true },
  fotoPerfil: { type: Buffer },
});

module.exports = mongoose.model('Subscriber', subscriberSchema);
