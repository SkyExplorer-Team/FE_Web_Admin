import { TransactionModel } from '../models/transaction'
import { type Request, type Response } from 'express'
require('dotenv').config()

const getAllTransactions = async (req: Request, res: Response): Promise<void> => {
  try {
    const allTransactions = await TransactionModel.query()

    res.status(201).json({
      message: 'Succsesfully get all Transactions data',
      data: allTransactions
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const confirmTransaction = async (req: Request & { user?: any }, res: Response): Promise<void> => {
  const transactionIdToConfirm = req.params.id
  const status = 'Confirmed'
  try {
    const transactionToConfirm = await TransactionModel.query().findById(transactionIdToConfirm)

    if (transactionToConfirm === null || transactionToConfirm === undefined) {
      res.status(404).json({ error: 'INVALID_ID', message: 'No airports data found by that id' })
      return
    }

    await TransactionModel.query().patchAndFetchById(transactionIdToConfirm, { status })
    res.status(200).json({
      message: 'Success Confirm Transaction Data'
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const deleteTransaction = async (req: Request & { user?: any }, res: Response): Promise<void> => {
  try {
    const airportId = req.params.id
    const airportToDelete = await TransactionModel.query().findById(airportId)

    if (!airportToDelete) {
      res.status(404).json({
        error: 'INVALID_ID',
        message: 'No transaction data found by that id'
      })
      return
    }

    await TransactionModel.query().deleteById(airportId)

    res.status(200).json({
      message: 'Transaction deleted successfully'
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

export default {
  getAllTransactions,
  confirmTransaction,
  deleteTransaction
}
