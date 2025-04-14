'use client';

import ListGroup from 'react-bootstrap/ListGroup';
import mockData from '@/data/mockData.json';
import dayjs from 'dayjs';
import {useEffect, useState} from "react";


function getVariant(dateStr) {
    const date = dayjs(dateStr);
    const today = dayjs();
    const diff = date.diff(today, 'day');

    if (diff < 0) return 'secondary';     // Past
    if (diff === 0) return 'danger';      // Today
    if (diff <= 3) return 'warning';      // Soon
    return 'success';                     // Future
}

export default function UpcomingRepairsList() {
    const { repairs, clients } = mockData;
    const [upcomingRepairs, setUpcomingRepairs] = useState([]);

    const getClientName = (clientId) => {
        const client = clients.find((c) => c.id === clientId);
        return client ? `${client.firstName} ${client.lastName}` : 'Unknown Client';
    };

    useEffect(() => {
        const filtered = repairs.filter(r => dayjs(r.date).isAfter(dayjs(),'day'));
        setUpcomingRepairs(filtered);
    },[repairs]);

    return (
        <>
            <ListGroup className="mb-4">
                {upcomingRepairs.map((repair) => (
                    <ListGroup.Item key={repair.id} variant={getVariant(repair.date)}>
                        <div className="fw-bold">{repair.title}</div>
                        <div>{dayjs(repair.date).format('DD MMM YYYY')} – {repair.description}</div>
                        <div className="small text-muted">
                            Client: {getClientName(repair.clientId)} • Price: ${repair.price}
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
}
