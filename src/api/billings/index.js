const express = require('express');
const router = express.Router();
const controller = require('./controller');


const getBillings = (req, res) => { res.status(200).json(controller.getBillings());  };



const newInvoice = (req, res) => {

  if (newInvoiceWasCreate){
    res.status(201).json(billings);
  } else {
    res.status(500).json("No se ha podido realizar su petición");
  }
};

const deleteInvoice = (req, res) => {

  if (invoiceWasDeleted){
    res.status(201).json("Factura eliminado");
  } else {
    res.status(500).json("No se ha podido realizar su petición");
  }
};

const assignInvoice = (req, res) => {

  if (invoiceWasAssigned){
    res.status(201).json(billings);
  } else {
    res.status(500).json("No se ha podido realizar su petición");
  }
};

const paidCheck = (req, res) => {
  if (invoiceWasPayed){
    res.status(201).json(billings);
  } else {
    res.status(500).json("No se ha podido realizar su petición");
  }
}


//API REST users
router.get('/', getBillings);

router.post('/', newInvoice);

router.delete('/', deleteInvoice);

router.put('/assigninvoice', assignInvoice);

router.put('/payed', paidCheck);


module.exports = router;
