// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from './Controls';

describe('controls', () => {
    it('render buttons to toggle', () => {
        const { getByText } = render(<Controls closed={false} locked={false} />);
        const lockBtn = getByText(/lock gate/i);
        const closeBtn = getByText(/close gate/i);

        expect(lockBtn).toHaveTextContent(/lock gate/i);

        expect(closeBtn).toHaveTextContent(/close gate/i);
    });

    it('show open button when closed button is clicked', () => {
        const { getByText } = render(<Controls closed={true} locked={false}  />);
        const closeBtn = getByText(/close gate/i);

        fireEvent.click(closeBtn);

        const openBtn = getByText(/open gate/i);

        expect(openBtn).toHaveTextContent(/open gate/i);
    });

    it('show closed button when open button is clicked', () => {
        const { getByText } = render(<Controls closed={false} locked={false} />);
        const openedBtn = getByText(/open gate/i);

        fireEvent.click(openedBtn);

        const closedBtn = getByText(/close gate/i);

        expect(closedBtn).toHaveTextContent(/close gate/i);
    });
});