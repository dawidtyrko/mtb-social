'use client';

import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Pagination from 'react-bootstrap/Pagination';
import mockData from '@/data/mockData.json';

const ITEMS_PER_PAGE = 8;


export default function ClientsList() {
    const {  clients } = mockData;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(clients.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const clientsList = clients.slice(startIndex, startIndex + ITEMS_PER_PAGE);


    return (
        <>
            <ListGroup className="mb-4">
                {clientsList.map((client) => (
                    <ListGroup.Item key={client.id} variant='info'>
                        <div className="fw-bold">{client.firstName} {client.lastName}</div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <div className='d-flex justify-content-center'>
                <Pagination>
                    {[...Array(totalPages)].map((_, i) => (
                        <Pagination.Item
                            key={i + 1}
                            active={currentPage === i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </div>
        </>
    );
}
