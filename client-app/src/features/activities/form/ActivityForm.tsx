import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
}

const ActivityForm = ({ activity: selectedActivity, closeForm }: Props) => {
    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: '',
    }

    const [activity, setActivity] = useState(initialState);

    const handleSubmit = () => {
        console.log(activity);
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }
    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={activity.title} name="title" onChange={handleInputChange} />
                <Form.Input placeholder='Description' onChange={handleInputChange} name="description" value={activity.description} />
                <Form.Input placeholder='Category' onChange={handleInputChange} name="category" value={activity.category} />
                <Form.Input placeholder='Date' onChange={handleInputChange} name="date" value={activity.date} />
                <Form.Input placeholder='City' onChange={handleInputChange} name="city" value={activity.city} />
                <Form.Input placeholder='Venue' onChange={handleInputChange} name="venue" value={activity.venue} />
                <Button floated='right' positive type='submit' content="Submit" />
                <Button onClick={closeForm} floated='right' type='submit' content="Cancel" />
            </Form>
        </Segment>
    )
}

export default ActivityForm
