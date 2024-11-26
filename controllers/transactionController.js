const Transaction = require('../models/transactionModel');

const createTransaction = async (req, res) => {
    try {
        const { description, value, transactionType, date } = req.body;
        const userId = req.user._id;

        const transaction = new Transaction({
            description,
            value,
            transactionType,
            date,
            userId
          });

          await transaction.save();
    } catch(error) {
        if(error instanceof TokenException){
            res.send(error.getStatus).json({error: error.message})
        }else {
            res.send(500).json({ error: 'Erro ao criar transação.'})
        }
    }
}

const getTransactions = async (req, res) => {
  try {
    const userId = req.user._id;

    const transactions = await Transaction.find({ userId });

    res.status(200).json({ transactions });
  } catch (error) {
    if(error instanceof TokenException){
      res.send(error.getStatus).json({error: error.message})
    }else {
        res.status(500).json({ error: 'Erro ao buscar transações.' });
    }
  }
};

const editTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, value, transactionType, date } = req.body;
    const userId = req.user._id;

    const transaction = await Transaction.findOne({ _id: id, userId });

    if (!transaction) {
      return res.status(404).json({ error: 'Transação não encontrada ou não pertence ao usuário.' });
    }

    transaction.description = description || transaction.description;
    transaction.value = value || transaction.value;
    transaction.transactionType = transactionType || transaction.transactionType;
    transaction.date = date || transaction.date;

    await transaction.save();

    res.status(200).json({ message: 'Transação editada com sucesso!', transaction });
  } catch (error) {
    if(error instanceof TokenException){
      res.send(error.getStatus).json({error: error.message})
    }else {
        res.status(500).json({ error: 'Erro ao editar transação.' });
    }
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const transaction = await Transaction.findOneAndDelete({ _id: id, userId });

    if (!transaction) {
      return res.status(404).json({ error: 'Transação não encontrada ou não pertence ao usuário.' });
    }

    res.status(200).json({ message: 'Transação deletada com sucesso!' });
  } catch (error) {
    if(error instanceof TokenException){
      res.send(error.getStatus).json({error: error.message})
    }else {
        res.status(500).json({ error: 'Erro ao deletar transação.' });
    }
  }
};

module.exports = {
  createTransaction,
  getTransactions,
  editTransaction,
  deleteTransaction
}
