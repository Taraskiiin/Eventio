import { useFormik } from 'formik'
import React from 'react'

import styles from './events.module.scss'

interface EventFormProps {
  open: boolean
}

const EventForm: React.FC<EventFormProps> = ({ open = false }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      time: '',
      date: '',
      status: '',
      genre: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className={open ? styles['form'] : styles['none-form']}>
      <label htmlFor='name'>Name</label>
      <input id='name' name='name' type='text' onChange={formik.handleChange} value={formik.values.name} />
      <label htmlFor='description'>Description</label>
      <input id='description' name='description' type='text' onChange={formik.handleChange} value={formik.values.description} />
      <label htmlFor='date'>Date</label>
      <input id='date' name='date' type='text' onChange={formik.handleChange} value={formik.values.date} />
      <label htmlFor='time'>Time</label>
      <input id='time' name='time' type='text' onChange={formik.handleChange} value={formik.values.time} />
      <label htmlFor='status'>Status</label>
      <input id='status' name='status' type='text' onChange={formik.handleChange} value={formik.values.status} />
      <label htmlFor='genre'>Genre</label>
      <input id='genre' name='genre' type='text' onChange={formik.handleChange} value={formik.values.genre} />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default EventForm
