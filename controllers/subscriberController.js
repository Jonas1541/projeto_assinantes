const Subscriber = require('../models/subscriberModel');

class SubscriberController {
  async create(req, res, next) {
    try {
      const subscriber = req.body;
      const result = await Subscriber.create(subscriber);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  async uploadProfileImage(req, res, next) {
    try {
      const subscriberId = req.params.id;
      // Implemente o código para processar o upload da imagem de perfil
      res.status(200).send();
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const subscriberId = req.params.id;
      const updateData = req.body;
      const result = await Subscriber.findByIdAndUpdate(subscriberId, updateData, { new: true });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const subscribers = await Subscriber.find({});
      res.status(200).json(subscribers);
    } catch (error) {
      next(error);
    }
  }

  async getByCode(req, res, next) {
    try {
      const subscriberId = req.params.id;
      const subscriber = await Subscriber.findById(subscriberId);
      if (!subscriber) {
        res.status(404).json({ message: 'Subscriber not found' });
      } else {
        res.status(200).json(subscriber);
      }
    } catch (error) {
      next(error);
    }
  }

  async search(req, res, next) {
    try {
      const { nome, sobrenome, cidade, estado, status } = req.query;
      const query = {};

      if (nome) query.nome = nome;
      if (sobrenome) query.sobrenome = sobrenome;
      if (cidade) query.cidade = cidade;
      if (estado) query.estado = estado;
      if (status) query.status = status;

      const subscribers = await Subscriber.find(query);
      res.status(200).json(subscribers);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const subscriberId = req.params.id;
      await Subscriber.findByIdAndDelete(subscriberId);
      res.status(200).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new SubscriberController();
