// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from './Controls';

describe('controls', () => {
    it('render buttons to toggle', () => {
        const { getByText } = render(<Controls closed={false} unlocked={false} />);
        const lockBtn = getByText(/lock gate/i);
        const closeBtn = getByText(/close gate/i);

        expect(lockBtn).toHaveTextContent(/lock gate/i);

        expect(closeBtn).toHaveTextContent(/close gate/i);
    });
});