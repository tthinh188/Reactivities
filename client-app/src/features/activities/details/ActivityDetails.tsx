import React from 'react'
import { Button, Card, Icon, Image } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'

interface Props {
    activity: Activity;
}

const ActivityDetails = ({ activity }: Props) => {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span >{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths="2">
                    <Button color="blue" basic content="Edit" />
                    <Button color="grey" basic content="Cancel" />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}

export default ActivityDetails
