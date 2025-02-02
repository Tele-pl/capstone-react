import React from 'react';
import { render, screen } from '@testing-library/react';
import Reservations from './Reservations';

test('renders Reservations component',', () => {
    render(<Reservations />);
    const headingElement = screen.getByText(/reservations/i);
    expect(headingElement).toBeInTheDocument();
});

test('renders a list of reservations', () => {
    const reservationsData = [
        { id: 1, name: 'John Doe', date: '2023-10-01' },
        { id: 2, name: 'Jane Smith', date: '2023-10-02' }
    ];

    render(<Reservations reservations={reservationsData} />);
    
    reservationsData.forEach(reservation => {
        expect(screen.getByText(reservation.name)).toBeInTheDocument();
        expect(screen.getByText(reservation.date)).toBeInTheDocument();
    });
});