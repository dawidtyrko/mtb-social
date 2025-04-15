'use client';
import {useSearch} from "@/context/SearchContext";
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Pagination from 'react-bootstrap/Pagination';
import mockData from '@/data/mockData.json';
import dayjs from 'dayjs';

const ITEMS_PER_PAGE = 8;

function getVariant(dateStr) {
    const date = dayjs(dateStr);
    const today = dayjs();
    const diff = date.diff(today, 'day');

    if (diff < 0) return 'secondary';     // Past
    if (diff === 0) return 'danger';      // Today
    if (diff <= 3) return 'warning';      // Soon
    return 'success';                     // Future
}

export default function RepairsList() {
    const { repairs, clients } = mockData;
    const [currentPage, setCurrentPage] = useState(1);
    const {searchQuery} = useSearch();

    const getClientName = (clientId) => {
        const client = clients.find((c) => c.id === clientId);
        return client ? `${client.firstName} ${client.lastName}` : 'Unknown Client';
    };

    const filteredClientIds = clients
        .filter((client) => {
            const fullName = `${client.firstName} ${client.lastName}`.toLowerCase();
            return fullName.includes(searchQuery.toLowerCase());
        })
        .map((client)=>client.id);

    const filteredRepairs = repairs.filter((r) => {
            const clientMatch = filteredClientIds.includes(r.clientId);
            const titleMatch = r.title.toLowerCase().includes(searchQuery.toLowerCase());
            return clientMatch || titleMatch;
        }
    )

    const totalPages = Math.ceil(filteredRepairs.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentRepairs = filteredRepairs.slice(startIndex, startIndex + ITEMS_PER_PAGE);



    return (
        <>
            <ListGroup className="mb-4">
                {currentRepairs.map((repair) => (
                    <ListGroup.Item key={repair.id} variant={getVariant(repair.date)}>
                        <div className="fw-bold">{repair.title}</div>
                        <div>{dayjs(repair.date).format('DD MMM YYYY')} – {repair.description}</div>
                        <div className="small text-muted">
                            Client: {getClientName(repair.clientId)} • Price: ${repair.price}
                        </div>
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
