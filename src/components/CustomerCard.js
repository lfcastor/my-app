import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'


import {
    Card,
    CardHeader,
    CardActions,
    Avatar,
    IconButton    
} from '@material-ui/core'

import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import ModalConfirm from './ModalConfirm'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
}))
 

const CustomerCard = ({
    id,
    name,
    lastName,
    email,
    avatar,
    className,
    onRemoveCustomer,
    onEditCustomer,
}) => {
 const classes = useStyles()

 const [openModal, setOpenModal] = useState(false)

 const handleToggleModal = () => {
   setOpenModal(!openModal)
 }

 const handelConfirModal = id => {
  onRemoveCustomer(id)
  handleToggleModal()
 }

 const handleRemoveCustomer = () => {
   handleToggleModal()
 }

 const handleEditCustomer = id => {
    onEditCustomer(id)
 }

  return (
    <>
      <Card className={classNames(className, classes.root)}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={avatar}>
              R
            </Avatar>
          }
        title={`${name} ${lastName}`}
          subheader={email}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="editar cadastro" onClick={() => handleEditCustomer(id)}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="remover cadastro" onClick={handleRemoveCustomer}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <ModalConfirm
        open={openModal} 
        onClose={handleToggleModal}
        onConfirm={() => handelConfirModal(id)}
        title="Deseja realmente excluir este cadastro?" 
        message="Ao confirmar não será possível reverter esta operação"
      />
    </>
  )
}

export default CustomerCard
